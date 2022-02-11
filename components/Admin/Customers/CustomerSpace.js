import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import fontStyle from '../../../constants/fontStyle';

import GraphBox from '../../UI/GraphBox';
import ToolTip from 'react-native-tooltip';
import { Chart, VerticalAxis, HorizontalAxis, Line ,Area,Tooltip} from 'react-native-responsive-linechart'
const data=[{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 300, pv: 2400, amt: 2400}]
export default class CustomerSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.customerSpaceStyle}>
        <Text style={fontStyle.fontPrimary}> Customers</Text>
       
     <GraphBox bezierLineChart title={"Traffic Chart"} subTitle={"Served Tables Count vs Time"} chartTypes={["DayChart","WeekChart","MonthChart"]}/>



     <GraphBox bezierLineChart title={"Serving Time"} subTitle={"Avg. time taken for serving per table (MIN) vs. Time"} chartTypes={["HourChart","DayChart","WeekChart"]}/>
  
  {/* </LineChart> */}
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
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
    },
    chart: {
      flex: 1
    }
})
