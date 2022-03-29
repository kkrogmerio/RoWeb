import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import MenuBackgroundImage from '../../UI/MenuBackgroundImage';
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.navigation.state.params.linkToPhoto,"UAAAU")
    return (
      <View style={{flex:1}}>
        <MenuBackgroundImage/>
      </View>
    );
  }
}
