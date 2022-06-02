import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import CreatePlaceForm from '../components/CreatePlaceForm';
import {Context as ChapterContext} from '../context/ChapterContext';

const CreateScreen = ({route, navigation}) => {
  const {state, createPlace} = useContext(ChapterContext);
  const {screenName} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: true,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white'
     });
  }, [navigation]);

  return <>
    <StatusBar backgroundColor='white' barStyle="dark-content" />
    <ScrollView>
      { screenName === 'Places' ?
        <CreatePlaceForm onSave={(item) => {
          createPlace(item);
          navigation.goBack();
        }} /> : null }
    </ScrollView>
  </>
}

const styles = StyleSheet.create({

})

export default CreateScreen;
