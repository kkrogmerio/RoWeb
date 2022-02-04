import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import fontStyle from '../../../constants/fontStyle';

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 9.5,
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontOrderName,
              }}>
              {this.props.quantity}
            </Text>
          </View>
          <View style={{flex: 4}}>
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontOrderName,
              }}>
              {this.props.itemName}
            </Text>
            {this.props.orderToppings.length > 0 && (
              <Text>Toppings:</Text>
            )}
            {this.props.orderToppings &&
              this.props.orderToppings.map(ie => (
                <Text>{ie.name}</Text>
              ))}
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            {this.props.calculatePrice(
              this.props.itemPriceWithoutDiscount,
              this.props.orderToppings,
            ) -
              this.props.calculatePrice(
                this.props.itemPrice,
                this.props.orderToppings,
              ) >
              0 && (
              <Text
                style={{
                  ...styles.orderSpecsLayout,
                  ...fontStyle.fontDiscountItem,
                  marginTop: 18,
                }}>
                $
                {this.props.calculatePrice(
                  this.props.itemPriceWithoutDiscount,
                  this.props.orderToppings,
                )}
              </Text>
            )}
            <Text
              style={{
                ...styles.orderSpecsLayout,
                ...fontStyle.fontOrderPrice,
                marginTop: 8,
              }}>
              $
              {this.props.calculatePrice(
                this.props.itemPrice,
                this.props.orderToppings,
              )}
            </Text>
          </View>
        </View>
        <View style={styles.orderSeparator} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    orderSpecsLayout: {
        marginTop: 18,
        marginRight: 2,
        marginBottom: 8,
      },
      orderSeparator: {
        width: '100%',
        height: 0.5,
        marginTop: 15.9,
        marginRight: 8.5,
        backgroundColor: '#d7d7d7',
      },
})