import React, {Component} from 'react';
import {View,  StyleSheet, FlatList,Image} from 'react-native';

import OrderActionButton from './OrderActionButton';
import OrderSpecs from './OrderSpecs'
import OrderItem from './OrderItem'
import OrderSummary from './OrderSummary';
export default class OrderSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const nextBiteMenu=require('../../assets/icons/icon_support_next_bite.png')
    return (
      <View style={{height: '100%', flex: 2.6}}>
       <OrderSpecs scalars={this.props.scalars}/>
        <View style={{flex: 2.7}}>
          <FlatList
            data={this.props.currentItems}
            renderItem={itemData => (<OrderItem quantity={itemData.item.quantity} itemName={itemData.item.itemName} orderToppings={itemData.item.orderToppings}
                                    itemPrice={itemData.item.itemPrice} itemPriceWithoutDiscount={itemData.item.itemPriceWithoutDiscount}
                                    calculatePrice={this.props.calculatePrice}/>)}
              
            
            keyExtractor={item => item.id}
          />
        </View>
        
         <OrderSummary calculateSubTotal={this.props.calculateSubTotal}/>
         <View style={{flexDirection: 'row',
            justifyContent: 'space-around',
            flex:1,
            }}>
                
              <OrderActionButton buttonDefinition={"Confirm Order"} orderActionImage={require('../../assets/icons/icon_confirm_order.png')}/>
              <OrderActionButton buttonDefinition={"Add Discount"} orderActionImage={require('../../assets/icons/icon_add_discount.png')}/>
              <OrderActionButton buttonDefinition={"Issue Payment"} orderActionImage={require('../../assets/icons/icon_issue_payment.png')}/> 
              <OrderActionButton buttonDefinition={"Clear Table"} orderActionImage={require('../../assets/icons/icon_clear_table.png')}/>
              </View> 
        
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
});
