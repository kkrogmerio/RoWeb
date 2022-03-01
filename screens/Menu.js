import React, { Component } from 'react';
import { View } from 'react-native';
import {MENU} from '../constants/strings';
import {LeftSideMenu,RightSideMenu} from '../components/Menu';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHeader:'Breakfast'
    };
    
  }
  
  render() {
   
  
  
    return (
      <View style={{flex:1,flexDirection:'row'}}>
        <LeftSideMenu menuHeader={this.state.menuHeader}/>
        <RightSideMenu selectGroup={this.state.menuHeader==MENU.DEFAULT_HEADER}/>
      </View>
    );
  }
}

export default  (Menu);
