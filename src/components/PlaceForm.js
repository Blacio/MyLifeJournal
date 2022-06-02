import React from 'react';
import { Button, Text } from 'react-native-elements';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import RatingForm from './RatingForm';

const PlaceForm = ({place, callback}) => {
  const dDate = new Date(place.date);
  var fDate = ('0' + dDate.getDate()).slice(-2)
    + '.' + ('0' + dDate.getMonth()).slice(-2)
    + '.' + (dDate.getFullYear());

  return <View style={styles.form}>
    <Text h3>{place.name} ({place.country})</Text>
    <Text style={styles.infoText}>{place.continent}</Text>
    <Text style={styles.text}>
      <Text>Date Visited: </Text>
      <Text style={styles.infoText}>{fDate}</Text>
    </Text>
    <View style={styles.mainContent}>
      <View style={styles.rating}>
      <Text style={styles.text}>Rating: </Text>
      <RatingForm rating={place.rating} />
      </View>
      <Text style={styles.text}>
        <Text>Favourite Experience: </Text>
        <Text style={styles.infoText}>{place.favouriteExperience}</Text>
      </Text>
      <Text style={styles.text}>
        <Text>Favourite Site: </Text>
        <Text style={styles.infoText}>{place.favouriteSite}</Text>
      </Text>
      <Text style={styles.text}>
        <Text>Notes: </Text>
        <Text style={styles.infoText}>{place.notes}</Text>
      </Text>
    </View>
    <TouchableOpacity style={styles.icon} onPress={callback}>
        <AntDesign name="delete" size={24} color="black" />
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderRadius: 25,
    padding: 10,
    marginVertical: 8
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontFamily: 'sans-serif-light'
  },
  mainContent: {
    marginVertical: 10
  },
  icon: {
    alignSelf: "flex-end",
    marginEnd: 10
  }
});

export default PlaceForm;
