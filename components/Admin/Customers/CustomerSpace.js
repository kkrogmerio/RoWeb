import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import fontStyle from '../../../constants/fontStyle';
export default class CustomerSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.customerSpaceStyle}>
        <Text style={fontStyle.fontPrimary}> Customers </Text>
        {/* <View style={styles.graphBoxStyle}>
            <CurveChart date={this.state.date} chartData={this.state.chartData}/>
        </View>
        <View style={styles.graphBoxStyle}>
        <CurveChart date={this.state.date} chartData={this.state.chartData}/>
        </View> */}
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
    customerSpaceStyle:{
        padding:30
    },
    graphBoxStyle:{
        width:520,
        height:270,
        padding:20,
        backgroundColor:'yellow',
        marginVertical:8
    }
})
