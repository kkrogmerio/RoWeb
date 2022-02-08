import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  LineChart,
} from "react-native-chart-kit";
import update from 'immutability-helper';

import Chronometer from '../../../signletons/Chronometer';
import {getWeeklyTimelineDummyData,bezierChartConfig} from '../../../constants/dummyData'
// import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'
console.log('intrruduuu')
export default class BezierLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklyTimeline:[{date:null},{data:null}]
        
        
      
    };
    this.timer=null;
    this.getCurrentWeek = this.getCurrentWeek.bind(this);
  }
  getCurrentWeek() {
    this.timer = setInterval(() => {
      if(!this.state.weeklyTimeline.date||JSON.stringify(this.state.weeklyTimeline.date)!=JSON.stringify(Chronometer.getCurrentWeekTimeline()))
      this.setState({
        weeklyTimeline: {
               ...this.state.weeklyTimeline,
               date:Chronometer.getCurrentWeekTimeline()
              }
   });
   
      
    }, 1000);
  }
  componentDidMount() {
    this.getCurrentWeek();
  }
  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
  render() {
    console.log(this.state.weeklyTimeline.date)
   if(this.state.weeklyTimeline.date&&!this.state.weeklyTimeline.data){
     this.state.weeklyTimeline.data=getWeeklyTimelineDummyData(this.state.weeklyTimeline.date);
   

    return (<View><Text>{this.state.weeklyTimeline.date}</Text>
    <Text>{this.state.weeklyTimeline.data}</Text>
     
       <LineChart data={{
        labels: this.state.weeklyTimeline.date,
        datasets: [
          {
            data: this.state.weeklyTimeline.data
            
          }
        ]
      }}  
      width={333}
      height={220}
      
      // optional, defaults to 1
      chartConfig={{
        yAxisInterval:
        1,
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        fillShadowGradient:'black',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        formatYLabel: () => [0,20,40,60,80,200],
        data:[0,20,40,60,80,100],
        propsForDots: {
          r: "9",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}/>
      {/* <Chart
  style={{ height: 200, width: '100%', backgroundColor: '#eee' }}

  padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
>
  <VerticalAxis tickValues={[0, 20,40,60,80,100]} />
  <HorizontalAxis tickCount={this.state.weeklyTimeline.date} />
 
  <Line data={this.state.weeklyTimeline.data} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1 } }} />
</Chart> */}
       </View>
    );}
    else
    return <View></View>
  }
}
