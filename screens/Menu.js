import React, { Component } from 'react';
import { View } from 'react-native';
import {MENU} from '../constants/strings';
import {GET_RESTAURANT_MENU} from '../redux/restaurants';
import {connect} from 'react-redux';
import {DisplayDishes,DisplayGroups,TestScreen1,TestScreen2} from '../components/Menu';
import createMenuNavigator from '../components/Menu/createMenuNavigator';
const defaultConfiguration = {
  DisplayGroups: {
    screen: DisplayGroups ,


  },
  DisplayDishes: {
    screen:  DisplayDishes ,


  },
  
}
const mapStateToProps=state=>{
  return {restaurantMenu:state.restaurants.restaurantMenu}
}
const mapDispatchToProps = dispatch => {
  return {
    getRestaurantMenu: () => {
      dispatch({type: GET_RESTAURANT_MENU});
    },
  }
}
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHeader:'Breakfast',
      isLoading:false
    };
    this.configureNavigator = this.configureNavigator.bind(this);
    
  }
  componentDidMount() {
    this.setState({isLoading:true});
    this.props.getRestaurantMenu();
    this.setState({isLoading:false});
  
}
configureNavigator(){
  return createMenuNavigator(defaultConfiguration,{initialRouteName: 'DisplayGroups',
  tabBarComponent: () => {
    return null;
  }})
}
  render() {
   
    if(!this.MenuNavi)
      this.MenuNavi=this.configureNavigator();
    if(this.props.restaurantMenu)
   {  console.log(this.props.restaurantMenu.dishes,"HEREEE")
      return (
     <this.MenuNavi/>
    );}
    else
    return <View/>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
