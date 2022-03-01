import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Waitlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    this.props.navigation.navigate("Support",{withAnimation:true})
    return (
      <View>
        <Text> Waitlist </Text>
      </View>
    );
  }
}

export default Waitlist;
