import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fontStyle from '../../constants/fontStyle';
export default class SimpleTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[
          styles.tooltipStyle,
          {left: this.props.leftCalibration, top: this.props.topCalibration},
        ]}>
        <View>
          <Text style={fontStyle.fontChartDate}>{this.props.date}</Text>

          <Text style={fontStyle.fontChartData}>
            {this.props.data} {this.props.dataType}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tooltipStyle: {
    display: 'flex',
    position: 'absolute',

    width: 80,
    height: 63,

    backgroundColor: 'black',

    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
});
