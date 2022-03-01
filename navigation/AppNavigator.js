// import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import Floor from '../screens/Floor';
import WaitList from '../screens/Waitlist';
import Admin from '../screens/Admin';
import Menu from '../screens/Menu';
import Support from '../screens/Support';
import Logout from '../screens/Logout';
import {StyleSheet, View} from 'react-native';
import createLeftNavigator from '../helpers/createLeftNavigator';
import {CONFIGURE_FIREBASE} from '../redux/restaurants';
import {connect} from 'react-redux';
const defaultConfiguration = {
  Admin: {
    screen: Admin,
    icon: require('../assets/icons/admin.png'),
    adminOnly: false,
  },
  Floor: {
    screen: () => <Floor />,
    icon: require('../assets/icons/floor.png'),
    adminOnly: false,
  },
  WaitList: {
    screen: WaitList,
    icon: require('../assets/icons/waitlist.png'),
    params: {screen: Admin},
    adminOnly: false,
  },

  Menu: {
    screen: () => <Menu />,
    icon: require('../assets/icons/menu.png'),
    adminOnly: false,
  },
  Support: {
    screen: Support,
    icon: require('../assets/icons/support.png'),
    adminOnly: false,
  },
  Logout: {
    screen: Logout,
    icon: require('../assets/icons/logout.png'),
    adminOnly: false,
  },
};
const mapDispatchToProps = dispatch => {
  return {
    configureFirebase: () => {
      dispatch({type: CONFIGURE_FIREBASE});
    },
  };
};
class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.configureNavigator = this.configureNavigator.bind(this);
  }
  componentDidMount() {
    this.setState({isLoading: true});
    setTimeout(() => {}, 1000);
    this.props.configureFirebase();
    this.setState({isLoading: false});
  }
  configureNavigator() {
    return createLeftNavigator(defaultConfiguration, {
      initialRouteName: 'Menu',
      tabBarComponent: () => {
        return null;
      },
 
    });
  }
  render() {
    if (!this.Navi) {
      this.Navi = this.configureNavigator();
    }
    if (this.state.isLoading == true) {
      return <View />;
    } else return <this.Navi />;
  }
}
export default connect(null
  ,
  mapDispatchToProps,
)(AppNavigator);
