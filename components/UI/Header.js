import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import fontStyle from '../../constants/fontStyle';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
 
    return (
        <View
        style={styles.header}>
        <View style={{...styles.showHour}}>
          <Text style={fontStyle.fontShowTime}>
            {this.props.currentTime[0]}
          </Text>
        </View>
        <View style={{...styles.showHour}}>
          <Text style={fontStyle.fontShowTime}>|</Text>
        </View>
        <View style={styles.showDate}>
          <Text style={fontStyle.fontShowTime}>
            {this.props.currentTime[1]}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    showHour: {
        marginLeft: 25,
        justifyContent: 'center',
      },
       showDate: {
        marginLeft: 15,
        justifyContent: 'center',
      },
    header:{
        height: '100%',
        flex: 0.9,
        backgroundColor: '#222',
        flexDirection: 'row',
        alignItems: 'center'
      }})
