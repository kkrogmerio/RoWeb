import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import BezierLineChart from '../Admin/Customers/BezierLineChart'
import BarChart from '../Admin/Waiters/BarChart';
import MenuChart from '../Admin/Menu/MenuChart';
export default class GraphBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.graphBoxStyle}>
   {this.props.bezierLineChart&&  <BezierLineChart dataType={this.props.dataType} title={this.props.title} subTitle={this.props.subTitle} chartTypes={this.props.chartTypes} dataType={this.props.dataType}/>}
   {this.props.barChart&&  <BarChart pickerValue={this.props.pickerValue} complexTooltip={this.props.complexTooltip} title={this.props.title} subTitle={this.props.subTitle} chartTypes={this.props.chartTypes} dataType={this.props.dataType}/>}
   {this.props.menuChart&&<MenuChart dataType={this.props.dataType} title={this.props.title} subTitle={this.props.subTitle} chartTypes={this.props.chartTypes} dataType={this.props.dataType}/>}

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
    zIndex:-1,
    shadowColor: '#171717',
    shadowOpacity:0.3,
    shadowRadius:3
}
})
