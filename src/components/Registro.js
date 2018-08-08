import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
 
export default class Registro extends Component {
    static navigationOptions = {
      headerTitle: "Lobby",
      
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
  }
    render() {
      
      return (
        <View style={styles.container}>
            
        </View>
      );
    }
  }