
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator'
import {Provider, connect} from 'react-redux';
import store from './redux/configure_store';
import Firebase from './firebase/firebase';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
 
    return (
        <Provider store={store}>
        <AppNavigator/>
       </Provider>
    );
  }
}

