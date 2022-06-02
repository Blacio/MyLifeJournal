import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CreateRatingForm = ({rating}) => {
  return  <View style={styles.rating}>
            <FontAwesome name={rating > 0 ? "star" : "star-o"} size={20} color="black" />
            <FontAwesome name={rating > 1 ? "star" : "star-o"} size={20} color="black" />
            <FontAwesome name={rating > 2 ? "star" : "star-o"} size={20} color="black" />
            <FontAwesome name={rating > 3 ? "star" : "star-o"} size={20} color="black" />
            <FontAwesome name={rating > 4 ? "star" : "star-o"} size={20} color="black" />
        </View>
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row'
  }
});

export default CreateRatingForm;
