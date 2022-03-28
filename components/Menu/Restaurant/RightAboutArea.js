import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {ConnectSocial,OpenHours} from './Index';
export default class RightAboutArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ConnectSocial/>
        <View style={{marginVertical:10}}/>
        <OpenHours/>
      </View>
    );
  }
}
