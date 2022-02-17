import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from 'react-native';

import {BarChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import {LinearGradient, Stop, Defs} from 'react-native-svg';
import Chronometer from '../../../signletons/Chronometer';
import colors from '../../../constants/colors';
import ComplexTooltip from '../../UI/ComplexTooltip';
import SimpleTooltip from '../../UI/SimpleTooltip';
import BoxHeader from '../BoxHeader';
import {
  
  barChartType,
  getWaitersDummyData,
  getCurrentTimelineChartDummyData,
} from '../../../constants/dummyData';
const getChartCalibration = currentChartType => {
  return barChartType[currentChartType];
};
function compareAscYValue( a, b ) {
  if ( a.yValue< b.yValue ){
    return -1;
  }
  if ( a.yValue > b.yValue ){
    return 1;
  }
  return 0;
}
function compareDescYValue( a, b ) {
  if ( a.yValue> b.yValue ){
    return -1;
  }
  if ( a.yValue < b.yValue ){
    return 1;
  }
  return 0;
}
const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'#ef4923'} />
      <Stop offset={'100%'} stopColor={'#f26522'} />
    </LinearGradient>
  </Defs>
);

export default class GraphBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipPosition: {
        x: null,
        y: null,
      },
      currentTimeline: [{date: null}, {data: null}],
      chartType: this.props.chartTypes[0],
      waitersData: getWaitersDummyData(),
    };
    this.timer = null;
    this.getCurrentTimeline = this.getCurrentTimeline.bind(this);
    this.setChartType = this.setChartType.bind(this);
    this.changeTooltipPosition = this.changeTooltipPosition.bind(this);
  }
  setChartType(chartType) {
    this.setState({
      chartType,
      currentTimeline: {
        ...this.state.currentTimeline,
        data: getCurrentTimelineChartDummyData(chartType),
      },
    });
  }
  changeTooltipPosition(x, y) {
    this.setState({tooltipPosition: {x, y}});
  }
  getCurrentTimeline() {
    this.timer = setInterval(() => {
      if (
        !this.state.currentTimeline.date ||
        JSON.stringify(this.state.currentTimeline.date) !=
          JSON.stringify(Chronometer.getCurrentTimeline(this.state.chartType))
      )
        this.setState({
          currentTimeline: {
            ...this.state.currentTimeline,
            date: Chronometer.getCurrentTimeline(this.state.chartType),
          },
        });
    }, 1000);
  }
  componentDidMount() {
    this.getCurrentTimeline();
  }
  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
  render() {
    if (this.state.currentTimeline.date && !this.state.currentTimeline.data) {
      this.setState({
        currentTimeline: {
          ...this.state.currentTimeline,
          data: getCurrentTimelineChartDummyData(this.state.chartType),
        },
      });
      return <View />;
    } else if (
      this.state.currentTimeline.date &&
      this.state.currentTimeline.data
    ) {
    
      let barChartData = this.state.currentTimeline.data.map(
        (value, index) => ({
          yValue: value,
          svg: {onPress: () => this.changeTooltipPosition(index + 1, value)},
          xValue:
            String(this.state.currentTimeline.date[index]).split(',')[0] ==
            'undefined'
              ? ''
              : String(this.state.currentTimeline.date[index]).split(',')[0],
        }),
      );
      if(this.props.pickerValue==='lowestHighest')barChartData=barChartData.sort(compareAscYValue)
      if(this.props.pickerValue==='highestLowest')barChartData=barChartData.sort(compareDescYValue)
    
      const axesSvg = {fontSize: 10, fill: 'grey'};

      return (
        <View>
          <BoxHeader chartTypes={this.props.chartTypes} chartType={this.state.chartType} setChartType={this.setChartType} title={this.props.title} subTitle={this.props.subTitle}/>
          {this.state.tooltipPosition.x &&
            this.state.tooltipPosition.y &&
            this.state.waitersData &&
            this.props.complexTooltip && (
              <ComplexTooltip
                topCalibration={-1.7 * this.state.tooltipPosition.y + 90}
                leftCalibration={getChartCalibration(
                  this.state.chartType,
                ).calibrateChartFormula(this.state.tooltipPosition.x)-10}
                waitersData={this.state.waitersData}
                dataType={this.props.dataType}
                date={this.state.currentTimeline.date[this.state.tooltipPosition.x-1]}
              />
            )}
          {this.state.tooltipPosition.x &&
            this.state.tooltipPosition.y &&
            this.state.waitersData &&
            !this.props.complexTooltip && (
              <SimpleTooltip
                topCalibration={-1.2 * this.state.tooltipPosition.y + 120}
                leftCalibration={getChartCalibration(
                  this.state.chartType,
                ).calibrateChartFormula(this.state.tooltipPosition.x)}
                date={this.state.currentTimeline.date[this.state.tooltipPosition.x-1]}
                data={this.state.currentTimeline.data[this.state.tooltipPosition.x-1]}
                dataType={'KWD'}
              />
            )}
          <View style={styles.chartLayout}>
            <YAxis
            min={0} max={100} numberOfTicks={6}
              data={barChartData.map(ie => ie.yValue)}
              style={{marginBottom: 0}}
              contentInset={{top: 20, bottom: 10}}
              svg={axesSvg}
            />
            <View style={{flex: 1}}>
              <BarChart
                style={{flex: 1, zIndex: -1}}
                data={barChartData}
                yAccessor={({item}) => item.yValue}
                spacing={0.3}
                gridMin={0}
                gridMax={100}
                contentInset={{top: 18, bottom: 18}}
                svg={{
                  fill: 'url(#gradient)',
                }}>
                <Grid />
                <Gradient />
              </BarChart>
            </View>
          </View>
          <XAxis
            style={{height: 30, marginTop: 10}}
            data={barChartData}
            formatLabel={value => barChartData[value].xValue}
            svg={{fontSize: 14, fill: '#222'}}
            contentInset={{left: 45, right: 45, fontSize: 15}}
          />
        </View>
      );
    } else return <View />;
  }
}
const styles = StyleSheet.create({
  graphBoxStyle: {
    width: '100%',
    height: 290,
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 8,
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowColor: '#171717',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  chartLayout: {height: 200, width: 553, flexDirection: 'row'},
});
