import React, { Component } from 'react';
import { View, Text,ScrollView,StyleSheet } from 'react-native';

import Customers from '../../../components/Admin/Customers/CustomerSpace';
import Waiters from '../../../components/Admin/Waiters/WaiterSpace';
import TableStatus from '../../../components/Admin/TableStatus';
import SectionSeparator from '../../../components/UI/SectionSeparator';
export default class Evaluations extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView horizontal style={styles.innerAdmin}>
        <Customers/>
        <SectionSeparator/>
        <Waiters/>
         
        </ScrollView>
        <TableStatus/>
        </View>
    );
  }
}
const styles = StyleSheet.create({innerAdmin:{
  flex:1,
  
 
}})