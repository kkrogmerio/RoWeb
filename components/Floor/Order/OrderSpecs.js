import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import fontStyle from '../../../constants/fontStyle';
export default class OrderSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
              {scalars.connectionCode}
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
            />
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
              {scalars.serviceOrder}
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
              {scalars.partySize}
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
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimary,
                marginTop: 2,
              }}>
              {scalars.tableNumber}
            </Text>
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
          <View style={{flex: 1}}>
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
