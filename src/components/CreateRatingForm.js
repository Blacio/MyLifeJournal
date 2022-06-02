import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CreateRatingForm = ({rating, onChange}) => {
  return  <View style={styles.rating}>
          <TouchableOpacity activeOpacity={1} onPress={() => {onChange(1)}}>
            <FontAwesome name={rating > 0 ? "star" : "star-o"} size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => {onChange(2)}}>
            <FontAwesome name={rating > 1 ? "star" : "star-o"} size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => {onChange(3)}}>
            <FontAwesome name={rating > 2 ? "star" : "star-o"} size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => {onChange(4)}}>
            <FontAwesome name={rating > 3 ? "star" : "star-o"} size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => {onChange(5)}}>
            <FontAwesome name={rating > 4 ? "star" : "star-o"} size={35} color="black" />
          </TouchableOpacity>
        </View>
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20
  }
});

export default CreateRatingForm;
