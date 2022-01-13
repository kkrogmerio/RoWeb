import React from 'react'
import { View, Text, Image } from 'react-native'
// import { createBottomTabNavigator } from 'react-navigation'
import { TabNavigator } from 'react-navigation';
import  LeftMenu  from '../components/UI/LeftMenu'

function createLeftNavigator(routeConfigMap, stackConfig = {}) {
    let Navigator = TabNavigator(routeConfigMap);

    class Menu extends React.PureComponent {
        state = {
            route: stackConfig.initialRouteName
        }

        setRoute = (prevState, nextState) => {
            console.log("PREVSTATE",prevState)
            console.log("nextSTATE",nextState)
            const route = nextState.routes[ nextState.index ].routeName
            
            this.setState({ route: route })
        }

        navigate = (route) => {
            this.navigator.navigate(route)            
        }

       

        render() {
            return (
                <View style={{ height:'100%',width:100,backgroundColor:'black' }}>
                    <LeftMenu
                        navigate={ this.navigate }
                        menu={ routeConfigMap }
                        activeItem={ this.state.route }
                        { ...this.props }
                       />
                    <Navigator
                        onNavigationStateChange={ this.setRoute }
                        ref={ (element) => this.navigator = element?._navigation }/>
                </View>
            )
        }
    }

    return Menu
}
export default createLeftNavigator