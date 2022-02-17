import React, {Component} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import fontStyle from '../../constants/fontStyle';
export default class ComplexTooltip extends Component {
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
        <View style={{width: '100%', height: '100%'}}>
          <ScrollView>
            {this.props.waitersData.map(ie => (
              <View style={styles.waiterDataStyle}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                  }}>
                  <View style={styles.profilePicLayout}>
                    <View>
                      <Image
                        source={ie.profilePic}
                        resizeMode="contain"
                        style={{width: 22, height: 22}}
                      />
                    </View>
                  </View>

                  <Text style={{color: 'white'}}>{ie.name}</Text>
                </View>
                <View>
                  <Text style={{color: 'white'}}>{ie.performance}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}>
            <View
              style={styles.horizontalSeparatorStyle}
            />
            <Text style={fontStyle.fontChartDate}>{this.props.date}</Text>

            <Text style={fontStyle.fontData}>
              {this.props.waitersData
                .map(ie => ie.performance)
                .reduce((prev, cur) => prev + cur, 0)}{' '}
              {this.props.dataType}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tooltipStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 122,
    height: 120,
    backgroundColor: 'black',

    zIndex: 2,
  },
  waiterDataStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
  },
  profilePicLayout: {
    width: 33,
    height: 33,
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16.5,
    backgroundColor: 'white',
  },
  horizontalSeparatorStyle:{
    width: '100%',
    height: 3,
    backgroundColor: 'white',
    borderWidth: 1,
  }
});
