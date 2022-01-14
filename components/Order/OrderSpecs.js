import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import fontStyle from '../../constants/fontStyle';
export default class OrderSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      scalars=this.props.scalars;
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
                ...fontStyle.fontOrderSpecifications,
              }}>
              Connection Code
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimaryOrderSpecs,
                marginTop: 2,
              }}>
              {scalars.connectionCode}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontOrderSpecifications,
              }}>
              Elaps Time
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimaryOrderSpecs,
                marginTop: 2,
              }}
            />
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
                ...fontStyle.fontOrderSpecifications,
              }}>
              Service Order
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimaryOrderSpecs,
                marginTop: 2,
              }}>
              {scalars.serviceOrder}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontOrderSpecifications,
              }}>
              Party Size
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimaryOrderSpecs,
                marginTop: 2,
              }}>
              {scalars.partySize}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontOrderSpecifications,
              }}>
              Table Number
            </Text>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontPrimaryOrderSpecs,
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
              ...fontStyle.fontOrderSpecifications,
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
                ...fontStyle.fontOrderSpecifications,
              }}>
              Qty
            </Text>
          </View>
          <View style={{flex: 5}}>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontOrderSpecifications,
              }}>
              Order
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontOrderSpecifications,
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
