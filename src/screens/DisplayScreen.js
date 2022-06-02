import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ListItem } from 'react-native-elements';
import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import PlaceForm from '../components/PlaceForm';
import {Context as ChapterContext} from '../context/ChapterContext';
import Popover from 'react-native-popover-view';

const MainScreen = ({navigation}) => {
  const {state, fetchPlaces, deletePlace} = useContext(ChapterContext);
  const route = useRoute();
  const [ascending, setAscending] = useState(false);
  const [vPopover, setPopover] = useState(false);
  const [continent, setContinent] = useState('');
  var screenName = route.name;

  useEffect(() => {
    fetchList(screenName);
  }, [screenName]);

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerRight: () => (
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateScreen', {screenName})}>
                <AntDesign name="plus" style={styles.icon} size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setAscending(!ascending);
            }}>
              <FontAwesome5 name="sort" style={styles.icon} size={20} color="white" />
            </TouchableOpacity>
            <Popover from={(
              <TouchableOpacity onPress={() => setPopover(true)}>
                <FontAwesome name="filter" style={styles.icon} size={20} color="white" />
              </TouchableOpacity>
            )}>
              <FlatList
                  data={continents}
                  keyExtractor={item => item.name}
                  renderItem={({item}) => {
                    return <TouchableOpacity style={styles.pItem} onPress={() => {
                      setContinent(item.name === 'All' ? '' : item.name);
                      setPopover(false);
                    }}>
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
              }} />
            </Popover>

          </View>
        )
     });
}, [navigation]);

const fetchList = (screenName) => {
  switch (screenName) {
    case 'Places':
      fetchPlaces();
    default: break;
  }
}

const createListItem = (screenName, item, visible) => {
  switch (screenName) {
    case 'Places':
      return <PlaceForm isVisible={visible} place={item} callback={() => {
        deletePlace(item);
      }}/>;
    default: break;
  }
}

  return <>
    <StatusBar backgroundColor='white' barStyle="dark-content" />
    <FlatList
        data={ascending ? state.sort((a, b) => a.name.localeCompare(b.name)) : state}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          if(item.continent === continent || continent === '')
            return createListItem(screenName, item)
          else return null;
    }} />
  </>
}

const continents = [
    { name: "Europe" },
    { name: "Asia" },
    { name: "Africa" },
    { name: "North America" },
    { name: "South America" },
    { name: "Australia" },
    { name: "All" }
]

const styles = StyleSheet.create({
    icon: {
      margin: 10
    },
    iconContainer: {
      flexDirection: 'row'
    },
    pItem: {
      padding: 10
    }
})

export default MainScreen;
