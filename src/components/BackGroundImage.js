import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View
} from 'react-native';

export default class BackgroundImageCls extends Component {
   
    render() {
        return (
            <ImageBackground source={require('../../public/images/BG.jpg')}
                  style={styles.backgroundImagecss}>
                  {this.props.children}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImagecss: {
        flex: 1,
        width: null,
        height: null,
        
        alignItems: 'center',
        //justifyContent: 'center',     
    }
});