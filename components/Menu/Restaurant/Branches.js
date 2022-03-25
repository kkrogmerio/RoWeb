import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps'
export default class Branches extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'purple'}}>
        <Text> Branches </Text>
        <View style={{flex:1,justifyContent:'flex-end'}}>
        <MapView
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 29.3696088,
          longitude: 47.9721385,
          latitudeDelta: 0.04,
          longitudeDelta: 0.03,
        }}
        style={{width: '100%', height: 150}}
        userInterfaceStyle="dark"
      />
      </View>
      </View>
    );
  }
}
