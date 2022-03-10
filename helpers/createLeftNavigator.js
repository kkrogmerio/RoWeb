import React from 'react';
import {View, Text, Image} from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation'
import {createTabNavigator} from 'react-navigation';
import LeftMenu from '../components/UI/LeftMenu';

function createLeftNavigator(routeConfigMap, stackConfig = {}) {
  let Navigator = createTabNavigator(routeConfigMap, stackConfig);
  const nextBiteMenu = require('../assets/icons/icon_support_next_bite.png');
  class Menu extends React.PureComponent {
    state = {
      route: stackConfig.initialRouteName,
    };

    setRoute = (prevState, nextState) => {
      const route = nextState.routes[nextState.index].routeName;
      
      this.setState({route: route});
    };

    navigate = route => {
      this.navigator.navigate(route,{withAnimation: true});
    };

    render() {
      
      return (
        <View
          style={{
            height: '100%',
            backgroundColor: '#222',
            flexDirection: 'row',
          }}>
         {this.state.route!=='Menu'&& <View style={{flex: 2}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={nextBiteMenu}
                resizeMode="contain"
                style={{width: 60, height: 60, marginBottom: 5}}
              />
            </View>

            <LeftMenu
              navigate={this.navigate}
              menu={routeConfigMap}
              activeItem={this.state.route}
              {...this.props}
            />
          </View>}

          <View style={{flex: 17}}>
            <Navigator
              onNavigationStateChange={this.setRoute}
           
              ref={element => (this.navigator = element?._navigation)}
            />
          </View>
        </View>
      );
    }
  }

  return Menu;
}
export default createLeftNavigator;
