import React, { Component } from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import colors from '../../constants/colors'
export default class OrderActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View >
        <Image style={[this.props.buttonDefinition==='Confirm Order'&&styles.confirmOrderStyle||
          this.props.buttonDefinition==='Issue Payment'&&styles.issuePaymentStyle,
          styles.orderActionImage]} source={this.props.orderActionImage}/>
        </View>
       {this.props.buttonDefinition.split(" ").map(ie=><Text style={styles.orderActionButton}> {ie} </Text>)} 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  confirmOrderStyle:{
    backgroundColor:'#ffba00',padding:12,borderRadius:23.5
  },
  issuePaymentStyle:{
    backgroundColor:'#ed145b'
  },
  orderActionButton: {
    color:colors.second,
    fontSize:12.5
  },
  orderActionImage:{
    width:42,
    height:42
  }
})