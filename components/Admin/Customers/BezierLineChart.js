import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import BoxHeader from '../BoxHeader';
import colors from '../../../constants/colors';
import Chronometer from '../../../signletons/Chronometer';
import SimpleTooltip from '../../UI/SimpleTooltip';
import {
  getCurrentTimelineChartDummyData,
  
  bezierChartType,
} from '../../../constants/dummyData';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
  Tooltip,
} from 'react-native-responsive-linechart';

const getChartCalibration = currentChartType => {
  return bezierChartType[currentChartType];
};
export default class BezierLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimeline: [{date: null}, {data: null}],
      chartType: this.props.chartTypes[0],
    };
    this.timer = null;
    this.getCurrentTimeline = this.getCurrentTimeline.bind(this);
    this.setChartType = this.setChartType.bind(this);
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
    if (this.state.currentTimeline.date && this.state.currentTimeline.data) {
      const data = [];
      this.state.currentTimeline.data.map((ie, index) =>
        data.push({x: index, y: ie}),
      );
      return (
        <View>
          
          <BoxHeader chartTypes={this.props.chartTypes} chartType={this.state.chartType} setChartType={this.setChartType} title={this.props.title} subTitle={this.props.subTitle}/>

          <Chart
            style={{height: 220, width: 553}}
            data={data}
            padding={{left: 40, bottom: 20, right: 20, top: 20}}
            yDomain={{min: 0, max: 100}}>
            <VerticalAxis
              tickCount={6}
              theme={{labels: {formatter: v => v.toFixed(2)}}}
            />
            <HorizontalAxis
              tickCount={getChartCalibration(this.state.chartType).xAxisCount}
              theme={{
                labels: {
                  label: {color: 'black', fontSize: 14, dy: -18},
                  formatter: v =>
                    String(this.state.currentTimeline.date[v]).split(',')[0] ==
                    'undefined'
                      ? ''
                      : String(this.state.currentTimeline.date[v]).split(
                          ',',
                        )[0],
                },
              }}
              includeOriginTick={false}
            />
            <Area
              theme={{
                gradient: {
                  from: {color: '#ed1f24'},
                  to: {color: '#ef4e23', opacity: 0.2},
                },
              }}
            />
            <Line
              smoothing="cubic-spline"
              tooltipComponent={
                <Tooltip
                  theme={{
                    shape: {width: 0, height: 0},
                    formatter: v => (
                      <SimpleTooltip
                        topCalibration={135 - 2 * v.y}
                        leftCalibration={getChartCalibration(
                          this.state.chartType,
                        ).calibrateChartFormula(v.x)}
                        date={this.state.currentTimeline.date[v.x]}
                        data={v.y}
                        dataType={this.props.dataType}
                      />
                    ),
                  }}
                />
              }
              theme={{
                stroke: {color: '#ef4e23', width: 5},
                scatter: {
                  default: {
                    width: 8,
                    height: 8,
                    rx: 8,
                    color: 'black',
                    stroke: 'white',
                  },

                  selected: {color: 'black'},
                },
              }}
            />
          </Chart>
        </View>
      );
    }
    if (this.state.currentTimeline.date && !this.state.currentTimeline.data) {
      this.setState({
        currentTimeline: {
          ...this.state.currentTimeline,
          data: getCurrentTimelineChartDummyData(this.state.chartType),
        },
      });
      return <View />;
    } else return <View />;
  }
}
const styles = StyleSheet.create({
  scatterStyle: {},
});
