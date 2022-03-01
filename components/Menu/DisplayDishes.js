import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../constants/colors';
import fontStyle from '../../constants/fontStyle';
export default class DisplayDishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      currentDishes: null,
    };
    this.switchCategoryHandler = this.switchCategoryHandler.bind(this);

  }
  switchCategoryHandler(categoryId) {
    let dishes = this.props.items.dishes;
    
    let filteredDishes = dishes.filter(ie =>
      ie.categoryIds.includes(categoryId),
    );
      
    this.setState({
      selectedCategory: categoryId,
      currentDishes: filteredDishes,
    });
  }
  componentDidMount() {
    this.switchCategoryHandler(this.props.items.categories[0].id);
  }
  render() {
    const {categories,dishes} = this.props.items;

    return (
      <View style={styles.dishesPanel}>
       {this.state.currentDishes&&<View><View style={styles.categoriesBar}>
          <ScrollView horizontal contentContainerStyle={{alignItems: 'center'}}>
            {categories.map(ie => (
              <View style={{paddingHorizontal:20}}>
              <TouchableWithoutFeedback
                onPress={() => this.switchCategoryHandler(ie.id)}
               >
                <Text
                  style={
                    [fontStyle.menuTitle,this.state.selectedCategory==ie.id&&{color:colors.red}]
                    
                  }>
                  {ie.name}
                </Text>
              </TouchableWithoutFeedback>
              </View>
            ))}
          </ScrollView>
        </View>
        
        <FlatList

              numColumns={2}
              data={this.state.currentDishes}
              contentContainerStyle={{ paddingBottom: 50 }}
              renderItem={({item}) => (<FastImage source={{uri:item.imageUrl}} style={styles.dishImage}/>)}
               
              
              keyExtractor={item => item.name}
            /></View>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dishesPanel: {
    flex: 14,
    backgroundColor: colors.second,
  },
  categoriesBar: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
  },
  dishImage:{
    width:370,
    height:240,
    margin:40,
    bottom:10
  }
});
