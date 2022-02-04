import React, { Component } from 'react';
import { View,StyleSheet} from 'react-native';

export default class SectionSeparator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.sectionStyle}/>
        
      
    );
  }
}
const styles=StyleSheet.create({
    sectionStyle:{
        width: 0.5,
    backgroundColor: 'black',
    marginHorizontal: 22.5,
    }
})