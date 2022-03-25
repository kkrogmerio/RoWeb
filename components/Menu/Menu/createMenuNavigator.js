import React from 'react';
import {View, Text, Image} from 'react-native';
import {MENU} from '../../../constants/strings';
import {createStackNavigator} from 'react-navigation';
import {LeftSideMenu} from '.';
export default function createMenuNavigator(routeConfigMap, stackConfig = {}) {
  let Navigator = createStackNavigator(routeConfigMap, stackConfig);
  class Menu extends React.PureComponent {
    state = {
      route: stackConfig.initialRouteName,
      selectedGroup: MENU.DEFAULT_HEADER,
    };

    setRoute = (prevState, nextState) => {
      const route = nextState.routes[nextState.index].routeName;
      console.log(this.props.navigation);
      this.setState({route: route});
    };

    navigate = route => {
      this.navigator.navigate(route);
    };
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <LeftSideMenu
            navigate={this.navigate}
            selectedGroup={this.state.selectedGroup}
          />
          <Navigator
            onNavigationStateChange={this.setRoute}
            ref={element => (this.navigator = element?._navigation)}
            navigate={this.navigate}
          />
        </View>
      );
    }
  }
  return Menu;
}
