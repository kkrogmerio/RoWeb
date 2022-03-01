import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TestScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      console.log(this.props.navigation,"VALEURED");
    return (
      <View>
        <Text> TestScreen1 </Text>
      </View>
    );
  }
}
