import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
export default class OrderActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonType: {
        'Confirm Order': styles.confirmOrderStyle,
        'Issue Payment': styles.issuePaymentStyle,
        'Add Discount': styles.addDiscountStyle,
        'Clear Table': styles.clearTableStyle,
      },
    };
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={[
            this.state.buttonType[this.props.buttonDefinition],
            styles.layoutOrderButton,
          ]}>
          <Image
            style={[
              styles.orderActionImage,
              this.props.buttonDefinition === 'Issue Payment' && {height: 18},
              this.props.buttonDefinition === 'Clear Table'&&{width:50,height:50,resizeMode: 'contain'}
            ]}
            source={this.props.orderActionImage}
          />
        </View>
        {this.props.buttonDefinition.split(' ').map(ie => (
          <Text style={styles.orderActionButton}> {ie} </Text>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  confirmOrderStyle: {
    backgroundColor: '#ffba00',
    borderRadius: 25,
  },
  addDiscountStyle: {
    backgroundColor: '#92278f',
    borderRadius: 25,
  },
  layoutOrderButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  issuePaymentStyle: {
    backgroundColor: '#ed145b',
    borderRadius: 19,
  },

  orderActionButton: {
    color: colors.second,
    fontSize: 12.5,
    marginBottom: 3,
  },

  orderActionImage: {
    width: 24,
    height: 24,
  },
});
