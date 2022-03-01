import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import {GET_RESTAURANT_MENU} from '../../redux/restaurants';
import DisplayDishes from './DisplayDishes';
import DisplayGroups from './DisplayGroups';
import {connect} from 'react-redux'
const mapStateToProps = state=>{
  return {
    
      restaurantMenu:state.restaurants.restaurantMenu
  }
}
const mapDispatchToProps =dispatch=>{
  return{
    getRestaurantMenu:()=>dispatch({type: GET_RESTAURANT_MENU})
  }
}
class RightSideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
        dishes:[],
        categories:[],
        groups:[],
    };
    this.getCategoriesForGroup=this.getCategoriesForGroup.bind(this);
  }
  componentDidMount() {
    this.setState({isLoading:true});
    this.props.getRestaurantMenu();
    this.setState({isLoading:false});
  
}
getCategoriesForGroup(groupId) {
  let dishes = this.state.dishes;
  let categories = this.state.categories;

  let filteredCategories = categories.filter(ie =>
    ie.groupIds.includes(groupId),
  );
  // let selectedCategory = filteredCategories[0].id;
  
  return {categories:filteredCategories,dishes}
}
  render() {
      
    if(!this.props.restaurantMenu||this.state.isLoading)
    return <View/>
    else if(this.props.restaurantMenu&&(this.state.dishes.length==0||this.state.categories==0||this.state.groups==0))
    {this.setState({dishes:this.props.restaurantMenu.dishes,
    categories:this.props.restaurantMenu.categories,
  groups:this.props.restaurantMenu.groups});
return <View/>}
      else if(this.state.dishes.length>0&&this.state.categories.length>0&&this.state.groups.length>0)
      {
        if(this.props.selectGroup)
          return <DisplayGroups items={this.state.groups}/>
        else
          { 
            return <DisplayDishes items={this.getCategoriesForGroup(2192)} />}
      }
      else
    return (
      <View style={styles.rightMenu}>
       
      </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (RightSideMenu)
const styles = StyleSheet.create({
    rightMenu: {
        flex:14,
        backgroundColor:colors.second
      }
})
