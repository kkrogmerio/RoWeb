import React, { Component } from 'react';
import { View, Text,FlatList,ScrollView,StyleSheet} from 'react-native';

import fontStyle from '../../constants/fontStyle';

import  Group  from './Group';
import  Category  from './Category';
import  Dish  from './Dish';
export default class MenuSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    var arrays = [], size = 2;
    while (this.props.currentDishes.lengthlength > 0)
        arrays.push(this.props.currentDishes.lengthsplice(0, size));
    return (
        <View style={{height: '100%', flex: 3.5}}>
        <Text style={styles.menuItem}>Groups</Text>
        <View>
          <FlatList
            horizontal
            data={this.props.groups}
            renderItem={itemData => (<Group 
                selectedGroup={itemData.item.id == this.props.selectedGroup?true:false}
                switchGroupHandler={() => this.props.switchGroupHandler(itemData.item.id)} groupName={itemData.item.name} imageUrl={itemData.item.imageUrl}/>)}
              
            
            keyExtractor={item => item.id}
          />
        </View>

        <Text style={styles.menuItem}>Dishes</Text>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            data={this.props.currentCategories}
            renderItem={itemData => (<Category isSelectedCategory={()=>this.props.isSelectedCategory(itemData.item.id)} switchCategoryHandler={()=>this.props.switchCategoryHandler(itemData.item.id)}
            categoryName={itemData.item.name}/>
             
            )}
            keyExtractor={item => item.name}
          />
        </View>

        <ScrollView horizontal>
          <View>
            <FlatList
              key={this.props.currentDishes.length}
              numColumns={Math.ceil(this.props.currentDishes.length / 2)}
              data={this.props.currentDishes}
              renderItem={itemData => (<Dish dishName={itemData.item.name} dishPrice={itemData.item.price} dishImage={itemData.item.imageUrl}/>)}
               
              
              keyExtractor={item => item.name}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    menuItem: {
        ...fontStyle.fontDetails,
        marginTop: 34,
        marginRight: 44.5,
        marginBottom: 5,
        marginLeft: 20,
      },
      
     
});
