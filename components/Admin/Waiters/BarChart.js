import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { BarChart, Grid,XAxis,YAxis } from 'react-native-svg-charts'
import { LinearGradient, Stop, Defs } from 'react-native-svg'
import colors from '../../../constants/colors';
import {VictoryChart,VictoryAxis,VictoryBar,VictoryTheme,VictoryTooltip} from 'victory-native';
const Gradient = () => (
    <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
            <Stop offset={'0%'} stopColor={'#ef4923'}/>
            <Stop offset={'100%'} stopColor={'#f26522'}/>
        </LinearGradient>
    </Defs>
)
export default class GraphBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tooltipPosition:{
            x:null,
            y:null
        }
    };
    this.changeTooltipPosition=this.changeTooltipPosition.bind(this);
  }
  changeTooltipPosition(x,y){
    console.log('eu')
      this.setState({tooltipPosition:{x:x,y:y}});
  }
  render() {
     const data = [ 0,20,37,31,24]
    let barChartData=data.map((value,index)=>({value,svg:{onPress:()=>this.changeTooltipPosition(value,index+1)}}))
    
  
    const axesSvg = { fontSize: 10, fill: 'grey' }
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30
    const CUT_OFF = 20
   
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
      {this.state.tooltipPosition.x&&this.state.tooltipPosition.y&&<View style={{position: "absolute",width:30,height:30,backgroundColor:'black',left:this.state.tooltipPosition.x,bottom:this.state.tooltipPosition.y}}></View>}
      <View style={{ height: 200,width:553, flexDirection: 'row' }}>
        <YAxis min={0} max={100} numberOfTicks={5} data={barChartData} style={{ marginBottom: 0 }} contentInset={{top:20,bottom:10}} svg={axesSvg} />
        <View style={{ flex: 1 }}>
          <BarChart
            style={{ flex: 1 }}
            data={barChartData}
            yAccessor={({item})=>item.value}
            spacing={0.3}
            contentInset={{top:18,bottom:18}}
           
            svg={{
              fill: 'url(#gradient)'
            }}
          >
            <Grid />
            <Gradient/>
          </BarChart>
        </View>
      </View>
      <XAxis style={{  height: 30,marginTop:10}} data={barChartData} formatLabel={(value, index) => String('Feb ') + index} svg={{fontSize:14,fill:'#222'}} contentInset={{ left: 45, right: 45 ,fontSize:15 }} />
    </View>
  
              
    )
  }
}
const styles = StyleSheet.create({
  graphBoxStyle:{
        
    width:'100%',
    height:290,
    padding:20,
    backgroundColor: 'white',
    marginVertical:8,
    shadowOffset:{
      width:-2,
      height:4
    },
    shadowColor: '#171717',
    shadowOpacity:0.3,
    shadowRadius:3
}
})
