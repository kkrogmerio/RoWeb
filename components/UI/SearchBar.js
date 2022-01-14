import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,Image } from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("PROPS=",this.props.searchDishName)
    const searchItem=require('../../assets/icons/icon_search.png');
    return (
      <View style={{marginLeft:27.5,backgroundColor:'#0e0e0e',width:225,height:31.5,borderRadius:16,color:'purple',padding:5,flexDirection:'row'}}>
          <Image source={searchItem} style={{height:22.4,width:22.4,marginRight:8}}/>
        
        <TextInput style={{width:'85%',color:'white'}} placeholder="Search for dish.." value={this.props.searchDishName} onChangeText={(inputValue)=>this.props.searchDishHandler(inputValue)}/>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({

})
