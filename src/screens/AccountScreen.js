import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as SignContext} from '../context/SignContext';

const AccountScreen = () => {
  const { signout } = useContext(SignContext);

  return <>
    <Button title="SIGN OUT" style={{margin: 10}} onPress={signout}/>
  </>
}

const styles = StyleSheet.create({

})

export default AccountScreen;
