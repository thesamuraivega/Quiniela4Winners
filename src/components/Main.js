import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Navigator  } from 'react-native';
import { createStackNavigator,createSwitchNavigator } from 'react-navigation';
import Expo from 'expo';

import LoginScreen from './Login';
import LobbyScreen from './Lobby';


const AppStack = createStackNavigator({ Lobby: LobbyScreen });
//const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    Login: LoginScreen,
    App: AppStack,
    //Auth: AuthStack,
  },
  {
    initialRouteName: 'Login',
  }
);
