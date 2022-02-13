import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import BezierLineChart from '../Admin/Customers/BezierLineChart'
import BarChart from '../Admin/Waiters/BarChart';
export default class GraphBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.graphBoxStyle}>
   {this.props.bezierLineChart&&  <BezierLineChart title={this.props.title} subTitle={this.props.subTitle} chartTypes={this.props.chartTypes}/>}
   {this.props.barChart&&  <BarChart title={this.props.title} subTitle={this.props.subTitle} chartTypes={this.props.chartTypes}/>}
   

     </View>
    );
  }
}
const styles = StyleSheet.create({
  graphBoxStyle:{
        
    width:'100%',
    height:290,
    padding:20,
    backgroundColor: 'white',
    marginVertical:8,
    shadowOffset:{
      width:-2,
      height:4
    },
    shadowColor: '#171717',
    shadowOpacity:0.3,
    shadowRadius:3
}
})
