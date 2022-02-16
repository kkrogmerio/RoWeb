import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import GraphBox from '../../UI/GraphBox';
import fontStyle from '../../../constants/fontStyle';

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
     
        <GraphBox complexTooltip barChart title={"Waiters performance"} subTitle={"Table Server per Waiter vs. Time"} chartTypes={["HourChart","DayChart","WeekChart"]} dataType={"Tables"}/>
        <GraphBox barChart title={"Waiters Sales"} subTitle={"Revenue per Waiter (KWD) vs. Time"} chartTypes={["DayChart","WeekChart","MonthChart"]} dataType={"KWD"}/>
     
       
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
