import createContext from './createContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

import journalApi from '../api/journal';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin': 
      return {errorMessage: '', token: action.payload};
    case 'clearErrorMessage':
      return {...state, errorMessage: ''};
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const trySignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({type: 'signin', payload: token});
    navigate('Journal');
  } else {
    navigate('Authentification');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clearErrorMessage'});
};

const signin = (dispatch) => async ({email, password}) => {
    try {
      const response = await journalApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});

      navigate('Journal');
    } catch (err) {
      dispatch({type: 'add_error', payload: 'Something wrong with sign in'});
    }
}

const signup = (dispatch) => async ({email, password}) => {
      try {

        const response = await journalApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});

        navigate('Journal');
      } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
      }
}

const signout = (dispatch) => {
  return async () => {
    // somehow sign out !!!
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('Authentification');
  }
}

export const {Provider, Context} = createContext(
  authReducer,
  {signin, signup, signout, clearErrorMessage, trySignIn},
  { token: null, errorMessage: '' }
);
