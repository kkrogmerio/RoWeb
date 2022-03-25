import React, {Component} from 'react';
import {View, Animated, Easing} from 'react-native';
import {MENU} from '../constants/strings';
import {GET_RESTAURANT_MENU} from '../redux/reducers/restaurantMenu';
import {GET_RESTAURANT_OVERVIEW} from '../redux/reducers/restaurantOverview';
import {connect} from 'react-redux';
import {DisplayDishes, DisplayGroups} from '../components/Menu/Menu';
import {Gallery} from '../components/Menu/Gallery/Index'
import {Restaurant} from '../components/Menu/Restaurant/Index';
import LeftSideMenu from '../components/Menu/LeftSideMenu';
import createMenuNavigator from '../components/Menu/Menu/createMenuNavigator';
import { createStackNavigator,createTabNavigator } from 'react-navigation';
const defaultConfiguration = {
  DisplayGroups: {
    screen: DisplayGroups,
  },

  DisplayDishes: {
    screen: DisplayDishes,
  },
};
const mapStateToProps = state => {
  return {
    restaurantMenu: state.restaurants.restaurantMenu,
    currentGroup: state.restaurants.currentGroup,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRestaurantMenu: () => {
      dispatch({type: GET_RESTAURANT_MENU});
    },
    getRestaurantOverview: () => {
      dispatch({type: GET_RESTAURANT_OVERVIEW});
    },
  };
};
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHeader: 'Breakfast',
      isLoading: false,
      route:'Menu'
    };
    this.configureNavigator = this.configureNavigator.bind(this);
  }
  componentDidMount() {
    this.setState({isLoading: true});
    this.props.getRestaurantMenu();
    this.props.getRestaurantOverview();
    this.setState({isLoading: false});
  }
  getStackNavigator(){
    return createStackNavigator(defaultConfiguration, {
      initialRouteName: 'DisplayGroups',
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
          const {layout, position, scene} = sceneProps;
          const {index} = scene;

          const width = layout.initWidth;
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: this.props.currentGroup
              ? [0, 0, width]
              : [width, 0, 0],
          });

          const opacity = position.interpolate({
            inputRange: [index - 1, index - 1, index],
            outputRange: [0, 1, 1],
          });

          return {opacity, transform: [{translateX}]};
        },
      }),
    });
  }
  configureNavigator() {
    return createTabNavigator({
      Menu:{screen:this.getStackNavigator()},
      Gallery:{screen:Gallery},
      Restaurant: {screen: Restaurant},

    },{ initialRouteName: 'Restaurant',
    tabBarComponent: () => {
      return null;
    },})
   
  }
  setRoute = (prevState, nextState) => {
    const route = nextState.routes[nextState.index].routeName;
    
    this.setState({route: route});
  };

  navigate = route => {
    this.navigator.navigate(route,{withAnimation: true});
  };
  render() {
    if (!this.MenuNavi) this.MenuNavi = this.configureNavigator();
    if (this.props.restaurantMenu) {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <LeftSideMenu navigate={this.navigate} nameMenu={this.state.route} />
          <this.MenuNavi
            ref={element => (this.navigator = element?._navigation)}
            onNavigationStateChange={this.setRoute}
          />
        </View>
      );
    } else return <View />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
