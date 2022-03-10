import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import colors from '../../constants/colors';
import fontStyle from '../../constants/fontStyle';
import LinearGradient from 'react-native-linear-gradient';
const mapStateToProps = state => {
  return {
    items: {
      categories: state.restaurants.restaurantMenu.categories,
      dishes: state.restaurants.restaurantMenu.dishes,
    },
    groupId: state.restaurants.currentGroupId
      ? state.restaurants.currentGroupId
      : 2193,
    groupName: state.restaurants.restaurantMenu.groups.find(ie =>
      ie.id == state.restaurants.currentGroupId
        ? state.restaurants.currentGroupId
        : 2193,
    ).name,
  };
  // return 0
};
class DisplayDishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      currentDishes: null,
      filteredCategories: null,
      favoriteItems: new Array(
        this.props.items.dishes
          .map(ie => ie.rank)
          .reduce((acc, cval) => Math.max(acc, cval)),
      ).fill(false),
    };
    this.switchCategoryHandler = this.switchCategoryHandler.bind(this);
    this.getGroupData = this.getGroupData.bind(this);
    this.setFavouriteItem = this.setFavouriteItem.bind(this);
  }
  setFavouriteItem(itemId) {
    const modifiedFavoriteItems = this.state.favoriteItems.slice();
    modifiedFavoriteItems[itemId] = !this.state.favoriteItems[itemId];
    this.setState({favoriteItems: modifiedFavoriteItems});
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
  getGroupData() {
    const {categories, dishes} = this.props.items;
    let categoriesId = [];
    for (let i in dishes) {
      dishes[i].categoryIds.every(ie => {
        if (!categoriesId.includes(ie)) categoriesId.push(ie);
      });
    }

    let filteredCategories = categories
      .filter(ie => ie.groupIds.includes(this.props.groupId))
      .filter(ie => categoriesId.includes(ie.id));
    filteredCategories.map(ie => console.log(ie.id));

    let selectedCategory = filteredCategories[0].id;
    let filteredDishes = dishes.filter(ie =>
      ie.categoryIds.includes(selectedCategory),
    );
    this.setState({
      selectedCategory,
      currentDishes: filteredDishes,
      filteredCategories,
    });
  }
  componentDidMount() {
    this.getGroupData();
  }
  render() {
    console.log("HEEER")
    return (
      <View style={styles.dishesPanel}>
        <Image style={{width:'100%',height:'100%',position:'absolute',opacity:0.9}} source={require('../../assets/icons/backgroundCustomer.png')}/>
        {this.state.currentDishes && this.state.filteredCategories && (
          <View>
            <View style={styles.categoriesBar}>
              <ScrollView
                horizontal
                contentContainerStyle={{alignItems: 'center'}}>
                {this.state.filteredCategories.map(ie => (
                  <View style={{paddingHorizontal: 20}}>
                    <TouchableWithoutFeedback
                      onPress={() => this.switchCategoryHandler(ie.id)}>
                      <Text
                        style={[
                          fontStyle.menuTitle,
                          this.state.selectedCategory == ie.id
                            ? {color: colors.red}
                            : {color: 'rgba(255, 255, 255, 0.15);'},
                        ]}>
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
              contentContainerStyle={{paddingBottom: 100}}
              renderItem={({item}) => (
                <View style={{flexDirection: 'row-reverse'}}>
                  <View
                    style={styles.dishFavoriteIcon}>
                    <TouchableWithoutFeedback
                      onPress={() => this.setFavouriteItem(item.rank)}>
                      <View style={styles.centeredItems}>
                        <Image
                          style={styles.heartIconLayout}
                          source={
                            this.state.favoriteItems[item.rank]
                              ? require('../../assets/icons/icon_heart_active.png')
                              : require('../../assets/icons/icon_heart_inactive.png')
                          }
                        />
                        <Text style={fontStyle.menuFavorite}>
                          {this.state.favoriteItems[item.rank]
                            ? item.id + 1
                            : item.id}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.dishIcon}>
                    <Image
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                      source={require('../../assets/icons/plus.png')}
                    />
                  </View>
                  <View style={styles.imageShadow}>
                  <FastImage
                    source={{uri: item.imageUrl}}
                    style={styles.dishImage}>
                    <LinearGradient
                      end={{x: 0.0, y: 0.2}}
                      start={{x: 0.0, y: 0.0}}
                      colors={[
                        'rgba(0, 0, 0, 0)',
                        'rgba(0, 0, 0, 0.5)',
                        'rgba(0, 0, 0, 0.75)',
                      ]}>
                      <View style={styles.innerGradientLayout}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View style={{flex: 5}}>
                            <Text style={fontStyle.menuTitle}>
                              {item.name}
                              {'\n'}
                            </Text>
                            <Text style={fontStyle.menuDesc}>
                              {item.description}
                            </Text>
                          </View>
                          <View style={[styles.centeredItems,{flex:1.60}]}>
                            <Text style={fontStyle.menuTitle}>
                              {item.price} KD
                            </Text>
                          </View>
                        </View>
                      </View>
                    </LinearGradient>
                  </FastImage>
                  </View>
                </View>
              )}
              keyExtractor={item => item.name}
            />
          </View>
        )}
      </View>
    );
  }
}
export default connect(mapStateToProps)(DisplayDishes);
const styles = StyleSheet.create({
  dishesPanel: {
    flex: 14,
    backgroundColor: colors.second,
  },
  categoriesBar: {

    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  

  },
  dishImage: {
    width: 370,
    height: 260,
    margin: 35,
    bottom: 10,
    marginRight: 45,
    borderRadius:5,
    justifyContent: 'flex-end',
    
    
  },
  imageShadow:{shadowColor: 'rgba(0, 0, 0, 0.8)',
  shadowOffset: {width: 7.5, height: 15},
  shadowOpacity: 0.5,
  shadowRadius: 5},
  dishIcon: {
    position: 'absolute',
    zIndex: 2,
    width: 62,
    height: 62,
    borderRadius: 31,
    top: 240,
    left:12
   
  },
  
   dishFavoriteIcon: {
    position: 'absolute',
    zIndex: 2,
    width: 52,
    height: 52,
    borderRadius: 26,
    left:16,
      top: 165,
      backgroundColor: colors.dark,
      justifyContent: 'center',
    },
 
  heartIconLayout: {height: 26, width: 16, resizeMode: 'contain'},
  centeredItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerGradientLayout: {display:'flex',height: 'auto', padding: 25, justifyContent: 'flex-end'},
});
