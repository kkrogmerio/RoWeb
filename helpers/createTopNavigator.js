import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Header from '../components/UI/Header';
import TopMenu from '../components/UI/TopMenu';
export default (createTopNavigator = (routeConfigMap, stackConfig = {}) => {
  let Navigator = TabNavigator(routeConfigMap, stackConfig);
  class Menu extends React.Component {
    state = {
      route: stackConfig.initialRouteName,
    };

    setRoute = (prevState, nextState) => {
    
      const route = nextState.routes[nextState.index].routeName;

      this.setState({route: route});
    };

    navigate = route => {
      this.navigator.navigate(route);
    };
    render() {
      return (
        <View style={styles.fullScreen}>
        <Header
          admin={1}
          navigate={this.navigate}
          menu={routeConfigMap}
          activeItem={this.state.route}
          {...this.props}
        />
            <Navigator
                        onNavigationStateChange={ this.setRoute }
                        ref={ (element) => this.navigator = element?._navigation }/>
                        
         </View>
      );
    }
  }
  return Menu;
});
const styles = StyleSheet.create({
  fullScreen: {
    flex:1,
    
   
    backgroundColor: 'white',
  },
  
})