import React, { Component } from 'react';
import { Alert, Button, TextInput,Text, View,ImageBackground,Image,TouchableOpacity, StyleSheet } from 'react-native';

import BackgroundImageCls from './BackGroundImage';
import ButtonSubmit from './LoginButton';
import UserInput from './InputLogin';

import usernameImg from '../../public/images/username.png';
import passwordImg from '../../public/images/password.png';
import eyeImg from '../../public/images/eye_black.png';
import Logo from '../../public/images/logo.png';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    }
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            username: '',
            password: '',
            isLogged: false,
        };
        this.showPass = this.showPass.bind(this);

    }
    
    showPass() {
        this.state.press === false
        ? this.setState({showPass: false, press: true})
        : this.setState({showPass: true, press: false});
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <BackgroundImageCls>
            <View style={styles.viewStyle}>
            <Image source={Logo} style={styles.logoApp}/>
            <UserInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                source={usernameImg}
                placeholder="Usuario"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
            />
            <UserInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                source={passwordImg}
                secureTextEntry={this.state.showPass}
                placeholder="Contraseña"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
            />
            <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnEye}
            onPress={this.showPass}>
            <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>
                
            <ButtonSubmit 
                title={'Entrar'}
                user={this.state.username}
                passw={this.state.password}
                navigation={this.props.navigation}
            />
            </View>
            
            </BackgroundImageCls>      
        );
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        top:130,
    },
    btnEye: {
        position: 'absolute',
        top: 63,
        right: 38,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    logoApp: {
        width: 100,
        height: 100,
        margin: 10,
    }
  });
