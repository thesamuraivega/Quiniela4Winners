import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
  Alert,
  View,
  Keyboard,
} from 'react-native';
import * as firebase from 'firebase'

import spinner from '../../public/images/loading.gif';

const spinnerAfter = require("../../public/images/sports_loading.gif");
const spinnerBall = require("../../public/images/ballico.png");

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;



export default class ButtonSubmit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
    this._valueInputs = this._valueInputs.bind(this);
  }

  _valueInputs(){
    var flag = false;
    if(!flag && this.props.user==""){
      Alert.alert(
        'Alerta',
        'Se requiere un usuario',);
        flag = true;
    }
    else if(this.props.user.indexOf("@") == -1){
      Alert.alert(
        'Alerta',
        'Correo con formato incorrecto',);
        flag = true;
    }
    else if(!flag && this.props.passw==""){
      Alert.alert(
        'Alerta',
        'Se requiere un Contraseña',);
        flag = true;
    }

    return flag;
  }


  _onPress() {
    Keyboard.dismiss()
    if(this._valueInputs()) return;
    
    if (this.state.isLoading) return;
    var self = this;
    firebase.auth().signInWithEmailAndPassword(this.props.user,this.props.passw)
      .then(function(firebaseUser) {
        self.setState({isLoading: true});
        Animated.timing(self.buttonAnimated, {
          toValue: 1,
          duration: 200,
          easing: Easing.linear,
        }).start();
        

        setTimeout(() => {
          self._onGrow();
        }, 2000);

        setTimeout(() => {      
          //Actions.secondScreen();
          self.setState({isLoading: false});
          self.buttonAnimated.setValue(0);
          self.growAnimated.setValue(0);
          self.props.isLoggedRef = true;      
          self.props.navigation.navigate('Lobby');
        }, 9300);
      })
      .catch(function(error) {
        Alert.alert(
          'Error',
          error.toString());
          return true;
      });

    
    //}, 9300);
  }

  _onGrow() {      
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const { navigate } = this.props.navigation;

    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
        <View style={styles.container}>
          <Animated.View style={{width: changeWidth}}>
            <TouchableOpacity
              style={styles.button}
              onPress={this._onPress}
              activeOpacity={1}>
              {this.state.isLoading ? (
                <Image style={styles.image} />
              ) : (
                <Text style={styles.text}>Entrar</Text>
              )}
            </TouchableOpacity>
            <Animated.View
              style={[styles.circle, {transform: [{scale: changeScale}]}]}
            >
            {this.state.isLoading ? (
                <Image key="imgLogin" source={spinnerAfter} style={styles.spinnerAfter} />
              ) : (
                <Image  style={styles.spinnerAfter} />
              )}
            </Animated.View>
          </Animated.View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 5
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 100,
        //alignSelf: 'center',
        zIndex: 99,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texted: {
        color: 'black',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
    spinnerAfter: {
      width: 25,
      height: 25,
      borderRadius: 10,
      overlayColor: 'white',
    },
});