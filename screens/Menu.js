import React, { Component } from 'react';
import { View } from 'react-native';
import {MENU} from '../constants/strings';
import {LeftSideMenu,RightSideMenu,DisplayDishes,DisplayGroups} from '../components/Menu';
import createMenuNavigator from '../components/Menu/createMenuNavigator';
const defaultConfiguration = {
  DisplayGroups: {
    screen: () => <DisplayGroups />,
    icon: require('../assets/icons/floor.png'),

  },
  DisplayDishes: {
    screen:()=> <DisplayDishes/>,
    icon: require('../assets/icons/admin.png'),
 
  },
  
}
const mapStateToProps = state=>{
  return {
    
      restaurantMenu:state.restaurants.restaurantMenu
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
    return (
     <this.MenuNavi/>
    );
    else
    return <View/>
  }
}

export default  (Menu);
