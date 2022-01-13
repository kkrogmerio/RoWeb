import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';

import colors from '../../constants/colors';
import FastImage from 'react-native-fast-image';
export default class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{marginHorizontal: 17}}>
        <TouchableOpacity
          onPress={() =>
            this.props.switchGroupHandler()
          }>
          <FastImage
            style={styles.groupBox}
            source={{uri: this.props.imageUrl}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Text style={fontStyle.fontDetailsBox}>
                {this.props.groupName}
              </Text> */}
            </View>
          </FastImage>
          {this.props.selectedGroup && <View style={styles.selectedGroup} />}
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    groupBox: {
        width: 110,
        height: 100,
        marginTop: 11,
    
        marginBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red,
      },
      selectedGroup: {
        width: '100%',
        height: 5,
        marginTop: 14,
        backgroundColor: colors.red,
      }
})