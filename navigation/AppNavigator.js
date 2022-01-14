// import {NavigationContainer} from '@react-navigation/native';


import React from 'react';


import Floor from '../screens/Floor';
import WaitList from '../screens/Waitlist';
import Admin from '../screens/Admin';
import Menu from '../screens/Menu';
import Support from '../screens/Support';
import Logout from '../screens/Logout';
import {StyleSheet, View} from 'react-native';   
import  createLeftNavigator  from '../helpers/createLeftNavigator'
const defaultConfiguration = {
  Floor: {
      screen: ()=><Floor/>,
      icon: require('../assets/icons/floor.png'),
      adminOnly: false
  },
  WaitList: {
    screen: WaitList,
    icon: require('../assets/icons/waitlist.png'),
    params:{screen: Admin},
    adminOnly: false
},
Admin: {
  screen: Admin,
  icon: require('../assets/icons/admin.png'),
  adminOnly: false
},
Menu: {
  screen: Menu,
  icon: require('../assets/icons/menu.png'),
  adminOnly: false
},
Support: {
  screen: Support,
  icon: require('../assets/icons/support.png'),
  adminOnly: false
},
Logout: {
  screen: Logout,
  icon: require('../assets/icons/logout.png'),
  adminOnly: false
},
}
class AppNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.configureNavigator=this.configureNavigator.bind(this);
      }
      configureNavigator() {
        

        return createLeftNavigator(defaultConfiguration, {
          headerMode: 'none',
          initialRouteName: 'Floor',
          tabBarComponent: () => { return null }
         
            
        })
    }
  render() {
    if (!this.Navi) {
      this.Navi = this.configureNavigator()
  }

    return (
      
  
      <this.Navi       />
        

     
    );
  }
}
export default AppNavigator;
