import React, { Component } from 'react';
import { View, Text,Image ,StyleSheet} from 'react-native';

export default class MenuBackgroundImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Image style={styles.imageBackground} 
        source={require('../../assets/icons/backgroundCustomer.png')}/>
    );
  }
}
const styles = StyleSheet.create({
    imageBackground:{width:'100%',height:'100%',position:'absolute',backgroundColor:'rgba(0,0,0,0.4)'}
})
