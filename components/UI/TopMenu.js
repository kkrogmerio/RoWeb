import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
export default class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return Object.keys(this.props.menu).map((key, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => this.props.navigate(key)}
        style={[
          styles.touchable,
          this.props.activeItem == key
            ? styles.activeTouchable
            : styles.inactiveTouchable,
        ]}>
        <View style={styles.view}>
          <Text
            style={[
              {fontSize: 17.5},
              this.props.activeItem === key
                ? styles.activeTabText
                : styles.inactiveTabText,
            ]}>
            {key.split(/(?=[A-Z])/).join(' ')}
          </Text>
        </View>
      </TouchableOpacity>
    ));
  }
}
const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabText: {
    color: colors.white,
  },
  inactiveTabText: {
    color: '#4e4e4e',
  },
  touchable: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  activeTouchable: {
    backgroundColor: colors.red,
  },
  inactiveTouchable: {
    backgroundColor: '#252525',
  },
});
