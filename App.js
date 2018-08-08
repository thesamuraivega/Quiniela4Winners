import React from 'react';
import Main from './src/components/Main'
import * as firebase from 'firebase';
import Firebase from './modules/helpers/Firebase'

export default class App extends React.Component {
  render() {
    Firebase.init();    
    return (
      <Main/>
    );
  }
}

