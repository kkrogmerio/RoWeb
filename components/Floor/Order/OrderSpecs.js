import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import fontStyle from '../../../constants/fontStyle';
import {formatNumberTwoDigits} from '../../../helpers/numberFormatter';
export default class OrderSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {serviceOrder:15,tableNumber:4
    };
    
  }

  render() {
      const image=require('../../../assets/icons/icon_device.png');
      let scalars=this.props.scalars;
    return (
        <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 9.5,
          }}>
          <View>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontDataSpecifications,
              }}>
              Connection Code
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimary,
                marginTop: 2,
              }}>
              {formatNumberTwoDigits(scalars.connectionCode)}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontDataSpecifications,
              }}>
              Elaps Time
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimary,
                marginTop: 2,
              }}
            >
              </Text>
          </View>
          <View style={{backgroundColor:'#ef4923',marginVertical:22,padding:7,borderRadius:17}}>
            <Image source={image} resizeMode='contain' style={{width:27,height:27}}/>
            </View>
        </View>
        <View
          style={{
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 9.5,
          }}>
          <View>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontDataSpecifications,
              }}>
              Service Order
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimary,
                marginTop: 2,
              }}>
              {formatNumberTwoDigits(this.state.serviceOrder)}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontDataSpecifications,
              }}>
              Party Size
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimary,
                marginTop: 2,
              }}>
              {formatNumberTwoDigits(scalars.partySize)}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontDataSpecifications,
              }}>
              Table Number
            </Text>
            <View style={{borderWidth:1,borderRadius:10,alignSelf:'flex-start',paddingHorizontal:7.5,display:'flex',alignItems: 'center',justifyContent:'center'}}>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimary,
                fontSize:17,
                marginTop: 2,
              }}>
              {formatNumberTwoDigits(this.state.tableNumber)}
            </Text>
            </View>
          </View>
        </View>
        <View style={{marginLeft: 9.5}}>
          <Text
            style={{
              ...styles.orderSpecsLayout,
              ...fontStyle.fontDataSpecifications,
            }}>
            Order Details
          </Text>
        </View>
        <View
          style={{
            marginTop: 1,
            marginLeft: 9.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1.2}}>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontDataSpecifications,
              }}>
              Qty
            </Text>
          </View>
          <View style={{flex: 5}}>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontDataSpecifications,
              }}>
              Order
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontDataSpecifications,
              }}>
              Price
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    orderSpecsLayout: {
        marginTop: 12,
        marginRight: 2,
        marginBottom: 8,
      },
})
