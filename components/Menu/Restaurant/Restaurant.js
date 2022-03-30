import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import {LeftAboutArea,RightAboutArea} from './Index'
import MenuBackgroundImage from '../../UI/MenuBackgroundImage';
export default class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  
    return (
      <View style={{flex:1,flexDirection: 'row',padding:20}}>
       <MenuBackgroundImage/>
        <LeftAboutArea navigate={this.props.navigation.navigate}/>
        <View style={{marginHorizontal:10}}/>
        <RightAboutArea/>
      </View>
    );
    
  }
}
