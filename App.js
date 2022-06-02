import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DisplayScreen from './src/screens/DisplayScreen';
import CreateScreen from './src/screens/CreateScreen';
import AccountScreen from './src/screens/AccountScreen';

import { Provider as SignProvider } from './src/context/SignContext';
import { Provider as ChapterProvider } from './src/context/ChapterContext';
import { navigationRef } from './src/navigationRef';

const SignNavigator = createStackNavigator();
const JournalNavigator = createDrawerNavigator();
const MainNavigator = createStackNavigator();

const SignScreen = () => (
  <SignNavigator.Navigator screenOptions={{headerShown: false}}>
    <SignNavigator.Screen name="SignIn" component={SignInScreen} />
    <SignNavigator.Screen name="SignUp" component={SignUpScreen} />
  </SignNavigator.Navigator>
);

const JournalScreen = () => (
  <JournalNavigator.Navigator>
    <JournalNavigator.Screen name="Places" component={DisplayScreen}
      options={{
        drawerIcon: () => (
           <FontAwesome5 name="city" size={15} color="black" />
        )
      }}/>
    <JournalNavigator.Screen name="Books" component={DisplayScreen}
      options={{
            drawerIcon: () => (
               <FontAwesome5 name="book" size={15} color="black" />
            )
         }}/>
    <JournalNavigator.Screen name="Movies" component={DisplayScreen}
      options={{
              drawerIcon: () => (
                 <MaterialIcons name="movie" size={15} color="black" />
              )
         }}/>
    <JournalNavigator.Screen name="Concerts" component={DisplayScreen}
      options={{
              drawerIcon: () => (
                 <FontAwesome5 name="guitar" size={15} color="black" />
              )
        }}/>
    <JournalNavigator.Screen name="Events" component={DisplayScreen}
      options={{
            drawerIcon: () => (
               <MaterialIcons name="event" size={15} color="black" />
            )
         }}/>
    <JournalNavigator.Screen name="Sign Out" component={AccountScreen} />
  </JournalNavigator.Navigator>
);

export default () => {
  return <ChapterProvider>
          <SignProvider>
            <NavigationContainer ref={navigationRef}>
              <MainNavigator.Navigator screenOptions={{headerShown: false}}>
                <MainNavigator.Screen name="Authentification" component={SignScreen} />
                <MainNavigator.Screen name="Journal" component={JournalScreen} />
                <MainNavigator.Screen name="CreateScreen" component={CreateScreen} />
              </MainNavigator.Navigator>
            </NavigationContainer>
          </SignProvider>
        </ChapterProvider>
}
