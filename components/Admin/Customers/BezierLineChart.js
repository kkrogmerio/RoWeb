import React, {Component} from 'react';
import {View, Text,TouchableWithoutFeedback} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import update from 'immutability-helper';
import colors from '../../../constants/colors';
import Chronometer from '../../../signletons/Chronometer';
import TooltipView from 'react-native-tooltip-view';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import {
  getCurrentTimelineDummyData,
  bezierChartConfig,
} from '../../../constants/dummyData';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
  Tooltip,
} from 'react-native-responsive-linechart';
console.log('intrruduuu');
export default class BezierLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimeline: [{date: null}, {data: null}],
      chartType:this.props.chartTypes[0]
    };
    this.timer = null;
    this.getCurrentTimeline = this.getCurrentTimeline.bind(this);
    this.setChartType=this.setChartType.bind(this);
    
  }
  setChartType(chartType){  this.setState({
    chartType,
    currentTimeline: {
      ...this.state.currentTimeline,
      data: getCurrentTimelineDummyData(chartType),
    },
  });
    
   
  }
  getCurrentTimeline() {
    console.log(this.state.chartType,Chronometer.getCurrentTimeline(this.state.chartType))
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
    console.log("HELOOO")
    this.getCurrentTimeline();
  }
  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
  render() {
    
   
    if (this.state.currentTimeline.date && this.state.currentTimeline.data) {
      console.log(this.state.currentTimeline.date.length," LENGTH")
      const data = [];
      this.state.currentTimeline.data.map((ie, index) =>
        data.push({x: index, y: ie}),
      );
      return (
        <View>
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize: 17.5, color: 'black'}}>
                {/* Traffic Chart */}
                {this.props.title}
              </Text>
              <Text style={{fontSize: 12.5, color: 'gray'}}>
                {/* Served Tables Count vs Time */}
                {this.props.subTitle}
              </Text>
            </View>
            <View style={{flexDirection:'row',width:120,justifyContent:'space-around'}}>
              {this.props.chartTypes.map(ie=><TouchableWithoutFeedback onPress={()=>this.setChartType(ie)}>
                <Text
                  style={[
                    {fontSize: 12},
                    this.state.chartType !== ie
                      ? {color: colors.gray}
                      : {color: colors.red},
                  ]}>
                 {ie.split(/(?=[A-Z])/).join(" ").split(" ")[0]}
                </Text>
              </TouchableWithoutFeedback>)}
              
             
            </View>
          </View>

          <Chart
            style={{height: 220, width: 553}}
            data={data}
            padding={{left: 40, bottom: 20, right: 20, top: 20}}
            xDomain={{min: 0, max: 7}}
            yDomain={{min: 0, max: 100}}>
            <VerticalAxis
              tickCount={6}
              theme={{labels: {formatter: v => v.toFixed(2)}}}
            />
            <HorizontalAxis
              tickCount={7}
              theme={{
                labels: {
                  label:{color:'black',fontSize:14,dy:-18},
                  formatter: v =>
                    String(this.state.currentTimeline.date[v]).split(',')[0] ==
                    'undefined'
                      ? ''
                      : String(this.state.currentTimeline.date[v]).split(',')[0],
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
                      <View
                        style={{
                          position: 'absolute',
                          left: v.x * 70,
                          width: 80,
                          height: 63,
                          top: 135 - 2 * v.y,
                          backgroundColor: 'black',
                          display: 'flex',
                          flexDirection: 'column-reverse',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View>
                          <Text style={{color: '#a8a8a8', fontSize: 10}}>
                            {this.state.currentTimeline.date[v.x]}
                          </Text>

                          <Text style={{color: '#fff', fontSize: 14}}>
                            {v.y} Tables
                          </Text>
                        </View>
                      </View>
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
          {/* <Chart
  style={{ height: 200, width: '100%', backgroundColor: '#eee' }}

  padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
>
  <VerticalAxis tickValues={[0, 20,40,60,80,100]} />
  <HorizontalAxis tickCount={this.state.currentTimeline.date} />
 
  <Line data={this.state.currentTimeline.data} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1 } }} />
</Chart> */}
        </View>
      );
    } if (
      (this.state.currentTimeline.date &&
      !this.state.currentTimeline.data)
    ) {
      console.log('MIAUUU');

      this.setState({
        currentTimeline: {
          ...this.state.currentTimeline,
          data: getCurrentTimelineDummyData(this.state.chartType),
        },
      });
      return <View />;
    } else return <View />;
  }
}
