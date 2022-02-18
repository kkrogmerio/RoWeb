import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fontStyle from '../../../constants/fontStyle';

import GraphBox from '../../UI/GraphBox';

export default class CustomerSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.customerSpaceStyle}>
        <Text style={fontStyle.fontPrimary}> Customers</Text>

        <GraphBox
          bezierLineChart
          title={'Traffic Chart'}
          subTitle={'Served Tables Count vs Time'}
          chartTypes={['WeekChart', 'DayChart', 'MonthChart']}
          dataType={"Tables"}

        />

        <GraphBox
          bezierLineChart
          title={'Serving Time'}
          subTitle={'Avg. time taken for serving per table (MIN) vs. Time'}
          chartTypes={['HourChart', 'DayChart', 'WeekChart']}
          dataType={"Tables"}
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
