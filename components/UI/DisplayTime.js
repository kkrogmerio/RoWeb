import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fontStyle from '../../constants/fontStyle';
import chronometer from '../../signletons/Chronometer';
export default class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: [],
    };
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.timer = null;
  }
  setCurrentTime(currentDate) {
    this.setState({currentTime: currentDate});
  }

  getCurrentTime() {
    this.timer = setInterval(() => {
      if (chronometer.shouldChangeTime())
        this.setCurrentTime(chronometer.displayTime());
    }, 1000);
  }
  componentDidMount() {
    this.setCurrentTime(chronometer.displayTime());
    this.getCurrentTime();
  }
  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
  render() {
    if (this.state.currentTime)
      return (
        <View style={[{display: 'flex', flexDirection: 'row'},!this.props.floor&&{marginLeft:55}]}>
          <View style={{...styles.showHour}}>
            <Text
              style={[fontStyle.fontShowTime, {color: this.props.textColor}]}>
              {this.state.currentTime[0]}
            </Text>
          </View>

          <View style={{...styles.showHour}}>
            <Text
              style={[fontStyle.fontShowTime, {color: this.props.textColor}]}>
              |
            </Text>
          </View>
          <View style={styles.showDate}>
            <Text
              style={[fontStyle.fontShowTime, {color: this.props.textColor}]}>
              {this.state.currentTime[1]}
            </Text>
          </View>
        </View>
      );
    else return <View />;
  }
}
const styles = StyleSheet.create({
  showHour: {
    marginLeft: 25,
    justifyContent: 'center',
  },
  showDate: {
    marginLeft: 15,
    justifyContent: 'center',
  },
});
