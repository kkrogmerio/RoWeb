import React, {Component} from 'react';
import {View,  StyleSheet, FlatList} from 'react-native';


import OrderSpecs from './OrderSpecs'
import OrderItem from './OrderItem'
import OrderSummary from './OrderSummary';
export default class OrderSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <View style={{height: '100%', flex: 2.6}}>
       <OrderSpecs scalars={this.props.scalars}/>
        <View style={{flex: 3.1}}>
          <FlatList
            data={this.props.currentItems}
            renderItem={itemData => (<OrderItem quantity={itemData.item.quantity} itemName={itemData.item.itemName} orderToppings={itemData.item.orderToppings}
                                    itemPrice={itemData.item.itemPrice} itemPriceWithoutDiscount={itemData.item.itemPriceWithoutDiscount}
                                    calculatePrice={this.props.calculatePrice}/>)}
              
            
            keyExtractor={item => item.id}
          />
        </View>
        <OrderSummary calculateSubTotal={this.props.calculateSubTotal}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
});
