import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TestScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      console.log("UAI")
    return (
      <View style={{flex:40,backgroundColor:'white'}}>
        <Text> TestScreen1 </Text>
      </View>
    );
  }
}
