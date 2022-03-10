import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import DisplayTime from './DisplayTime';
import TopMenu from './TopMenu';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <View style={styles.header}>
        {this.props.floor && ( <DisplayTime textColor="white" floor/>)}
        {this.props.admin&&<TopMenu menu={this.props.menu} navigate={this.props.navigate} activeItem={this.props.activeItem}/> }
        {this.props.children}
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  header: {
    height: 60,

    // flex: 1,
    backgroundColor: '#252525',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
});
