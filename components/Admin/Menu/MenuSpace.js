import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fontStyle from '../../../constants/fontStyle';
import GraphBox from '../../UI/GraphBox';
export default class MenuSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.customerSpaceStyle}>
        <Text style={fontStyle.fontPrimary}> Menu</Text>
        <GraphBox
          menuChart
          title={'Most Selling Dishes'}
          
          chartTypes={['WeekChart', 'DayChart', 'MonthChart']}
        />
        <GraphBox
          bezierLineChart
          title={'Offers'}
          subTitle={'Count of Customers used Promoting Offers vs. Time'}
          chartTypes={[ 'DayChart','WeekChart', 'MonthChart']}
          dataType={"Customers"}
        />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    customerSpaceStyle: {
      padding: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    chart: {
      flex: 1,
    },
  });
  
