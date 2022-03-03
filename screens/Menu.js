import React, { Component } from 'react';
import { View,Animated,Easing} from 'react-native';
import {MENU} from '../constants/strings';
import {GET_RESTAURANT_MENU} from '../redux/restaurants';
import {connect} from 'react-redux';
import {DisplayDishes,DisplayGroups,TestScreen1,TestScreen2} from '../components/Menu';
import createMenuNavigator from '../components/Menu/createMenuNavigator';
const defaultConfiguration = {
  DisplayGroups: {
    screen: DisplayGroups,


  },
  TestScreen1: {
    screen:  TestScreen1 
  },
  DisplayDishes: {
    screen:  DisplayDishes ,


  },
  
}
const mapStateToProps=state=>{
  return {restaurantMenu:state.restaurants.restaurantMenu,
  currentGroup:state.restaurants.currentGroup}
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
    console.log("RATAT")
    this.setState({isLoading:true});
    this.props.getRestaurantMenu();
    this.setState({isLoading:false});
  
}
configureNavigator(){
  console.log(this.props.currentGroup,"MY CURRENT GROUP")
  return createMenuNavigator(defaultConfiguration,{initialRouteName: 'DisplayGroups',
  tabBarComponent: () => {
    return null;
  },
  headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 1000,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: this.props.currentGroup?[0,0,width]:[width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 1, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    })
})
}
  render() {
   
    if(!this.MenuNavi)
      this.MenuNavi=this.configureNavigator();
    if(this.props.restaurantMenu)
   {  
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
