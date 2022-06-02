import React, {useState} from 'react';
import { Input, Button, Text } from 'react-native-elements';
import { StyleSheet, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import CreateRatingForm from './CreateRatingForm';
import DatePicker from 'react-native-datepicker';
import Popover from 'react-native-popover-view';
import { FontAwesome } from '@expo/vector-icons';

const CreatePlaceForm = ({onSave}) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [continent, setContinent] = useState('Europe');
  const [date, setDate] = useState(new Date());
  const [rating, setRating] = useState(5);
  const [experience, setExperience] = useState('');
  const [site, setSite] = useState('');
  const [notes, setNotes] = useState('');

  const [vPopover, setPopover] = useState(false);

  return <View style={styles.container}>
    <View>
      <Text style={styles.label}>Place</Text>
      <Input style={styles.input} onChangeText={setName}/>
    </View>
    <View>
      <Text style={styles.label}>Country</Text>
      <Input style={styles.input} onChangeText={setCountry}/>
    </View>
    <View>
      <Text style={styles.label}>Date Visited</Text>
      <DatePicker
        style={styles.date}
        onDateChange={ (date)=>setDate(date) }
        useNativeDriver={true}
        date={date} // Initial date from state
        mode="date" // The enum of date, datetime and time
        placeholder="Select"
        format="DD-MM-YYYY"
        minDate="01-01-1900"
        maxDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
      />
    </View>
    <View>
      <Text style={styles.label}>Continent</Text>
      <Popover from={(
        <TouchableOpacity onPress={() => setPopover(true)}>
            <Text style={styles.input}>{continent}</Text>
        </TouchableOpacity>
      )}>
        <FlatList
            data={continents}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return <TouchableOpacity style={styles.input} onPress={() => {
                setContinent(item.name);
                setPopover(false);
              }}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
        }} />
      </Popover>
    </View>
    <View>
      <Text style={styles.label}>Rating</Text>
      <CreateRatingForm rating={rating} onChange={(newRating) => setRating(newRating)}/>
    </View>
    <View>
      <Text style={styles.label}>Favourite Experience</Text>
      <Input style={styles.input} onChangeText={setExperience}/>
    </View>
    <View>
      <Text style={styles.label}>Favourite Site</Text>
      <Input style={styles.input} onChangeText={setSite}/>
    </View>
    <View>
      <Text style={styles.label}>Notes</Text>
      <Input style={styles.input} onChangeText={setNotes}/>
    </View>
    <Button title="Save Place" onPress={() => {
      if (name) {
        onSave({name, country, continent, date, rating, experience, site, notes})
      } else {
        Alert.alert(
          "Cannot Save",
          "Place Name is mandatory",
          [
            { text: "OK" }
          ]
        );
      }
    }} />
  </View>
}

const continents = [
    { name: "Europe" },
    { name: "Asia" },
    { name: "Africa" },
    { name: "North America" },
    { name: "South America" },
    { name: "Australia" }
]

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 16,
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold'
  },
  input: {
    fontSize: 14,
    padding:10
  },
  date: {
    fontSize: 14,
    width: 250,
    marginTop: 10,
    marginBottom: 20
  }
});

export default CreatePlaceForm;
