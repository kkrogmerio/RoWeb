import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class TableStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.statusScreen}>
        <Text> TableStatus </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    statusScreen:{borderWidth:3,
    borderColor: 'black',
   
    flex:0.1}
})
