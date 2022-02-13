import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import GraphBox from '../../UI/GraphBox';
import fontStyle from '../../../constants/fontStyle';
import XyBarChart from './XyBarChart';
export default class WaiterSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.waiterSpaceStyle}>
        <Text style={fontStyle.fontPrimary}> Waiters </Text>
        <GraphBox barChart title={"Serving Time"} subTitle={"Avg. time taken for serving per table (MIN) vs. Time"} chartTypes={["HourChart","DayChart","WeekChart"]}/>
        {/* <XyBarChart/> */}
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
    waiterSpaceStyle:{
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
