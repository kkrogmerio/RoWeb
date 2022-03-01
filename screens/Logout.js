import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text> Logout </Text>
      </View>
    );
  }
}

export default Logout;
