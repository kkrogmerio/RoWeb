import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import fontStyle from '../../constants/fontStyle';
import colors from '../../constants/colors';
import OrderActionButton from './OrderActionButton';
export default class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1.9}}>
        <View style={styles.orderSeparator} />
        <View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column-reverse'}}>
                <Text
                  style={{
                    ...styles.orderSpecsLayout,
                    ...fontStyle.fontOrderSpecifications,
                    marginRight: 14,
                  }}>
                  SubTotal
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...styles.orderSpecsLayout,
                    ...fontStyle.fontOrderPrice,
                  }}>
                  ${this.props.calculateSubTotal()}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column-reverse'}}>
                  <Text
                    style={{
                      ...fontStyle.fontOrderSpecifications,
                      marginRight: 14,
                    }}>
                    Discount
                  </Text>
                </View>
                <View style={{flexDirection: 'column-reverse'}}>
                  <Text
                    style={{
                      ...fontStyle.fontOrderPrice,
                    }}>
                    $00.00
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column-reverse'}}>
                  <Text
                    style={{
                      ...fontStyle.fontOrderSpecifications,
                      marginRight: 14,
                    }}>
                    Total
                  </Text>
                </View>
                <View style={{flexDirection: 'column-reverse'}}>
                  <Text
                    style={{
                      ...fontStyle.fontOrderPrice,
                    }}>
                    ${this.props.calculateSubTotal()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.orderSeparator} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 12,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.red,
              width: 120,
              height: 40,
              borderRadius: 19,
            }}>
            <Text style={fontStyle.fontDetailsBox}>Special Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.red,
              width: 120,
              height: 40,
              borderRadius: 19,
            }}>
            <Text style={fontStyle.fontDetailsBox}>Switch / Join Table</Text>
          </TouchableOpacity>
        </View>
        
              
      </View>
    );
  }
}
const styles = StyleSheet.create({
    orderSpecsLayout: {
        marginTop: 18,
        marginRight: 2,
        
      },
      orderSeparator: {
        width: '100%',
        height: 0.5,
        marginTop: 15.9,
        marginRight: 8.5,
        backgroundColor: '#d7d7d7',
      },
})
