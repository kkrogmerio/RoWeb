import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import GraphBox from '../../UI/GraphBox';
import fontStyle from '../../../constants/fontStyle';
export default class BranchSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.branchSpaceStyle}>
          <Text style={fontStyle.fontPrimary}> Branch</Text>
          <View>
        <GraphBox
          bezierLineChart
          
          title={'Branch revenue'}
          subTitle={'Revenue per branch (in KWD) vs. Time'}
          chartTypes={[ 'DayChart', 'WeekChart','MonthChart']}
          dataType={"KWD"}
          otherTooltipInfo={"Downtown"}
        />
        </View>
        <View style={{flexDirection: 'row',width:'100%',justifyContent: 'space-between'}}>
        <GraphBox halfAnItem ratingChart={"circle"} title={'Customers evaluated'}
          subTitle={'Count of Customers who did Evaluation'}
         />
        <GraphBox halfAnItem ratingChart={"star"} title={'Rating'}
          subTitle={'Evaluation of the branch out of 5'}
        />
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({branchSpaceStyle: {
    padding: 30,
    
    width:680,
   
  },})
