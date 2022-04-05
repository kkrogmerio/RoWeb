import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
export default class OpenHours extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderProgram=()=>{
   return this.props.program.map(ie=><View style={{marginBottom:10}}>
      <Text style={{fontSize:14,color:colors.white}}>
        {ie.days}
      </Text>
      <Text style={{fontSize:22,color:colors.white}}>
        {ie.hours}
      </Text>
    </View>)
  }
  render() {
  
    return (
      <View style={styles.cardStyle}>
         <Text style={styles.titleStyle}> Open Hours </Text>
          {this.renderProgram()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    backgroundColor: '#21212b',
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 7.5,
      height: 16,
    },
    shadowOpacity: 1,
    shadowRadius: 16.00,
    padding:16
  },
  titleStyle: {color: '#fff', fontSize: 25,marginBottom:15},
})
