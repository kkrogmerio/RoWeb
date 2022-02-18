import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {Circle,Svg,Defs,LinearGradient,Stop,Polygon} from 'react-native-svg'
import BoxHeader from '../BoxHeader';
const Gradient=()=><Defs>
<LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
  <Stop offset="1" stopColor="#FFD080" stopOpacity="1" />
  <Stop offset="0" stopColor="red" stopOpacity="1" />
</LinearGradient>
</Defs>
export default class RatingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <BoxHeader title={this.props.title} subTitle={this.props.subTitle}/>
        <View style={styles.figurineLayout}>
            <View style={{position: 'absolute',zIndex:2}}><Text style={{color:'white',fontSize:40}}>{this.props.ratingChart==='circle'?116:4.9}</Text></View>
            
        <Svg height="160" width="160">
        
  {this.props.ratingChart==='circle'&&<Circle cx="80" cy="80" r="80" fill="url(#grad)" />}
  {this.props.ratingChart==='star'&&<Polygon points="80,0 60,60 0,80 60,100 80,160 100,100 160,80 100,60"  fill="url(#grad)" />}
  <Gradient />
</Svg>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    figurineLayout:{
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})