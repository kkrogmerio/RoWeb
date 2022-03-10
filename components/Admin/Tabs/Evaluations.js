import React, { Component } from 'react';
import { View, Text,ScrollView,StyleSheet } from 'react-native';

import Customers from '../../../components/Admin/Customers/CustomerSpace';
import Waiters from '../../../components/Admin/Waiters/WaiterSpace';
import Branch from '../../../components/Admin/Branch/BranchSpace'
import Menu from '../../../components/Admin/Menu/MenuSpace';
import TableStatus from '../../../components/Admin/TableStatus';
import SectionSeparator from '../../../components/UI/SectionSeparator';
export default class Evaluations extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.scrollViewRef=React.createRef();
    this.toNextPage=this.toNextPage.bind(this);
    this.screenIndex=0
  }
  toNextPage = () => {
    this.screenIndex += 1;
    
    this.scrollViewRef.current?.scrollTo({x: 50 * this.screenIndex, animated: true});
 };
  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView ref={this.scrollViewRef} horizontal style={styles.innerAdmin}>
        <Customers/>
        <SectionSeparator/>
        <Waiters/>
        <SectionSeparator/>
        <Menu/>
        <SectionSeparator/>
        <Branch/>
        </ScrollView>
        <TableStatus toNextPage={this.toNextPage}/>
        </View>
    );
  }
}
const styles = StyleSheet.create({innerAdmin:{
  flex:1,
  
 
}})