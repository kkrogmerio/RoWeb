import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import GraphBox from '../../UI/GraphBox';
import fontStyle from '../../../constants/fontStyle';
import DropDownPicker from 'react-native-dropdown-picker';

export default class WaiterSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: 'default',
      items: [ {label: 'Highest-lowest', value: 'highestLowest'},
      {label: 'Lowest-highest', value: 'lowestHighest'},
      {label: 'Default (chronological)', value: 'default'},
    ]
      
    };
    this.setValue = this.setValue.bind(this);
    this.setItems = this.setItems.bind(this);
    this.setOpen = this.setOpen.bind(this);

  }
  setOpen(open) {
    this.setState({
      open
    });
  }

  setValue(callback) {
    this.setState(state => ({
      value: callback(state.value)
    }));
  }

  setItems(callback) {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }

  render() {
    const { open, value, items } = this.state;
    return (
      <View style={styles.waiterSpaceStyle}>
          <View style={styles.headerStyle}>       
          <View>
        <Text style={fontStyle.fontPrimary}> Waiters </Text>
        </View>
        <View style={{right:10}}>
        <DropDownPicker
        style={styles.dropDownStyle}
        open={open}
        value={value}
        items={items}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
       
      />
      </View>
        </View>  
        <GraphBox pickerValue={this.state.value} complexTooltip barChart title={"Waiters performance"} subTitle={"Table Server per Waiter vs. Time"} chartTypes={["HourChart","DayChart","WeekChart"]} dataType={"Tables"}/>
        <GraphBox pickerValue={this.state.value} barChart title={"Waiters Sales"} subTitle={"Revenue per Waiter (KWD) vs. Time"} chartTypes={["DayChart","WeekChart","MonthChart"]} dataType={"KWD"}/>
     
       
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
    },
    headerStyle:{
      width:570,
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',

    },
    dropDownStyle:{width:150,height:30,zIndex:3,borderWidth:0}
})
