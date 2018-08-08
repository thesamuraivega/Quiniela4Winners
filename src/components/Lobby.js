import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
 
export default class GridLayout extends Component {
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
          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
            <View style={[styles.box, styles.two]}></View>
          </View>
      </View>
    );
  }
}
 
 
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: '#333',
  },
  box2: {
    backgroundColor: 'green'
  },
  box3: {
    backgroundColor: 'orange'
  },
  two: {
    flex: 2
  }
});