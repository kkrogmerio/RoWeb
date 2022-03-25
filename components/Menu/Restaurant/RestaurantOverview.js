import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RestaurantOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <Text> RestaurantOverview </Text>
      </View>
    );
  }
}
