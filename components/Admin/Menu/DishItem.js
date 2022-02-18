import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import fontStyle from '../../../constants/fontStyle';

export default class DishItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   let {dishData}=this.props;
   let dishKeys=Object.keys(dishData).filter(ie=>ie!='menuImage');
    return (<View style={{width:108,height:'100%',marginHorizontal:10}}>
      
      <View style={{width:'100%',height:107}}>
        <Image source={dishData['menuImage']} style={{maxWidth:'100%',maxHeight:'100%'}}/>
        </View>
        {dishKeys.map(ie=><View style={{marginVertical:3}}>
                <Text style={fontStyle.fontDataSpecifications}>{ie}</Text>
                <Text >{dishData[ie]}</Text>
        </View>)}
       
        </View>
    );
  }
}
const styles = StyleSheet.create({
    
})
