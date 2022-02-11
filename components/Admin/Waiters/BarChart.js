import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {VictoryChart,VictoryAxis,VictoryBar,VictoryTheme,VictoryTooltip} from 'victory-native';
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
        console.log(x,y);
  }
  render() {
    return (
       <View>
        {/* {this.state.tooltipPosition&&   <View style={{position:'absolute',left:20+75*1,bottom:60+90,height:63,width:80,backgroundColor:'black'}}><Text>HEEIAAU</Text></View>} */}
        <VictoryChart 
        width={553}
        height={280}
        theme={VictoryTheme.material}
        tickValues={[0,30,60,80]}
    
      >
       
         <VictoryAxis
        tickValues={[0,1,2,3,4,5,6]}
        tickFormat={(t) => t}
      />
      <VictoryAxis dependentAxis
      tickValues={[0,20,40,60,80,100]}
      tickFormat={(t)=>t} />
      
        <VictoryBar style={{ data: { fill: "tomato", width: 30 } }}
        events={[{
            target: "data",
            eventHandlers: {
              onClick: () => {
                console.log("MEREU")
              }
            }
          }]}
          labelComponent={<VictoryTooltip />}
          data={[
            { x: 1, y: 25,label:()=>{console.log('a')}},
            { x: 2, y: 35 ,label:console.log('b')},
            { x: 3, y: 55,label:()=>'c'},

          ]}
        />
      </VictoryChart>
      </View>
      
    );
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
