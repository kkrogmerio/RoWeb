import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from '../firebase/firebase';
import {dummyRestaurantFirebase} from '../constants/dummyData';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

    Firebase.database.ref(`viewStore/${ Firebase.restaurantId }/menus/${Firebase.menuId}`).on('value',snapshot=>{console.log("SNAPSHOT = ",snapshot)})
  }
  render() {
    return (
      <View>
        <Text> Menu </Text>
      </View>
    );
  }
}

export default Menu;
