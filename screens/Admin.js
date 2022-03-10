import React, {Component} from 'react';



import createTopNavigator from '../helpers/createTopNavigator';
import {
  CustomerSettings,
  MenuSettings,
  WaiterSettings,
  Evaluations,
} from '../components/Admin/Tabs/index';
const defaultConfiguration = {
  WaiterSettings: {screen: WaiterSettings},
  CustomerSettings: {screen: CustomerSettings},
  MenuSettings: {screen: MenuSettings},
  
  Evaluations: {screen: Evaluations},
};
class Admin extends Component {
  AdminNavi = null;
  constructor(props) {
    super(props);
    this.state = {};
    this.configureNavigator = this.configureNavigator.bind(this);
  }

  configureNavigator() {
    return createTopNavigator(
      {...defaultConfiguration},
      {
        initialRouteName: 'Evaluations',

        tabBarComponent: () => {
          return null;
        },
      },
    );
  }
  render() {
    this.AdminNavi = this.configureNavigator();
    return <this.AdminNavi />;
  }
}

export default Admin;
