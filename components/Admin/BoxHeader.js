import React, { Component } from 'react';
import { View, Text,TouchableWithoutFeedback } from 'react-native';
import colors from '../../constants/colors';
export default class BoxHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize: 17.5, color: 'black'}}>
            {this.props.title}
          </Text>
          <Text style={{fontSize: 12.5, color: 'gray'}}>
            {this.props.subTitle}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: 120,
            justifyContent: 'space-around',
          }}>
          {this.props.chartTypes&&this.props.chartTypes.map(ie => (
            <TouchableWithoutFeedback onPress={() => this.props.setChartType(ie)}>
              <Text
                style={[
                  {fontSize: 12},
                  this.props.chartType !== ie
                    ? {color: colors.gray}
                    : {color: colors.red},
                ]}>
                {
                  ie
                    .split(/(?=[A-Z])/)
                    .join(' ')
                    .split(' ')[0]
                }
              </Text>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    );
  }
}
