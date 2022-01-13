
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FloorContainer from './screens/Floor'
import {Provider, connect} from 'react-redux';
import store from './redux/configure_store';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Provider store={store}>
        <FloorContainer/>
       </Provider>
    );
  }
}

