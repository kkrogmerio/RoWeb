import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
  Image
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import colors from '../../constants/colors';
import fontStyle from '../../constants/fontStyle';
import LinearGradient from 'react-native-linear-gradient';
const mapStateToProps=state=>{
  return {items:{categories:state.restaurants.restaurantMenu.categories,dishes:state.restaurants.restaurantMenu.dishes},
groupId:state.restaurants.currentGroupId?state.restaurants.currentGroupId:2193,groupName:state.restaurants.restaurantMenu.groups.find(ie=>ie.id==state.restaurants.currentGroupId?state.restaurants.currentGroupId:2193).name}
  // return 0
}
class DisplayDishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      currentDishes: null,
      filteredCategories:null,
      favoriteItems:new Array(this.props.items.dishes.map(ie=>ie.rank).reduce((acc,cval)=>Math.max(acc,cval))).fill(false)
    };
    this.switchCategoryHandler = this.switchCategoryHandler.bind(this);
    this.getGroupData=this.getGroupData.bind(this);
    this.setFavouriteItem=this.setFavouriteItem.bind(this);
  }
  setFavouriteItem(itemId){
    const modifiedFavoriteItems=this.state.favoriteItems.slice();
    modifiedFavoriteItems[itemId]=!this.state.favoriteItems[itemId]
    this.setState({favoriteItems:modifiedFavoriteItems});
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
  getGroupData(){
    const {categories,dishes}=this.props.items;
    let categoriesId=[];
    for(let i in dishes){
      dishes[i].categoryIds.every(ie=>{if(!categoriesId.includes(ie))categoriesId.push(ie)})
    }
    
    let filteredCategories = categories.filter(ie =>
      ie.groupIds.includes(this.props.groupId)
    ).filter(ie=>categoriesId.includes(ie.id));
    filteredCategories.map(ie=>console.log(ie.id));
    console.log(categoriesId)
    let selectedCategory = filteredCategories[0].id;
    let filteredDishes = dishes.filter(ie =>
      ie.categoryIds.includes(selectedCategory),
    );
    this.setState({selectedCategory,currentDishes:filteredDishes,filteredCategories});
  }
  componentDidMount() {
   this.getGroupData();
  }
  render() {
  
  
 
    
    return (
      <View style={styles.dishesPanel}>
       {this.state.currentDishes&&this.state.filteredCategories&&<View><View style={styles.categoriesBar}>
          <ScrollView horizontal contentContainerStyle={{alignItems: 'center'}}>
            {this.state.filteredCategories.map(ie => (
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
              contentContainerStyle={{ paddingBottom: 100 }}
              renderItem={({item}) => (<View style={{flexDirection:'row-reverse'}}>
                <View style={{position:'absolute',zIndex:2,width:62,height:62,borderRadius:31,backgroundColor:colors.dark,top:100,justifyContent: 'center'}}>
                <TouchableWithoutFeedback onPress={()=>this.setFavouriteItem(item.rank)}>
                  <View style={{display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                  <Image style={{height:30,width:22,resizeMode:'contain'}} source={this.state.favoriteItems[item.rank]?require('../../assets/icons/icon_heart_active.png'):require('../../assets/icons/icon_heart_inactive.png')}/>
                  <Text style={fontStyle.menuDesc}>{this.state.favoriteItems[item.rank]?item.id+1:item.id}</Text>
                  </View>
                  </TouchableWithoutFeedback>
                  </View>
                <View style={{position:'absolute',zIndex:2,width:62,height:62,borderRadius:31,top:240}}>
                  <Image style={{maxWidth:'100%',maxHeight:'100%'}} source={require('../../assets/icons/icon_increase_quantity.png')}/>
                  </View>
                <FastImage source={{uri:item.imageUrl}} style={styles.dishImage}>
                
                <LinearGradient
                    end={{x: 0.0, y: 0.4}}
                    start={{x: 0.0, y: 0.0}}
                    colors={[
                      'rgba(0, 0, 0, 0)',
                      'rgba(0, 0, 0, 0.5)',
                      'rgba(0, 0, 0, 0.75)',
                    ]}>
                      <View style={{height: 150, padding: 15}}>
                     
                      
                      <View style={{display:'flex',flexDirection:'row'}}>
                      <View style={{flex:4}}>
                      <Text style={fontStyle.menuTitle}>
                        {item.name}
                        {'\n'}
                      </Text>
                      <Text style={fontStyle.menuDesc}>{item.description}</Text>
                      </View>
                      <View style={{display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                      <Text style={fontStyle.menuTitle}>{item.price} KD</Text>
                      </View>
                      </View>
                    </View>
                      </LinearGradient>
              </FastImage></View>)}
               
              
              keyExtractor={item => item.name}
            /></View>}
      </View>
    );
  }
}
export default connect(mapStateToProps,)(DisplayDishes)
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
    width:380,
    height:240,
    margin:35,
    bottom:10,
    justifyContent: 'flex-end',
  }
});
