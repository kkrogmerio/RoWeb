import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'




export default class LeftMenu extends React.PureComponent {
 

 


   

    navigate(key) {
        if (this.props.menu && this.props.menu[key]) { // if not found then let the navigator deal with it.
            let item = this.props.menu[key]

            if (typeof(item.action) == 'function') {
                return item.action(this.props)
            }
        }

    
        return this.props.navigate(key)
    }

    render() {
        if (!this.props.menu) {
            return
        }
        
        return Object.keys(this.props.menu).map((key, index) => {
            let item = this.props.menu[key]
        

            let backgroundColor = 'transparent'
            let opacity = 0.5

            if (key == this.props.activeItem) {
                backgroundColor = '#080808'
                opacity = 1
            }

            return (
                <TouchableOpacity
                    key={ index }
                    activeOpacity={ 1 }
                    onPress={ () => this.navigate(key) }
                    style={{ height: 100, justifyContent: 'center', backgroundColor }}>
                    <View style={{ opacity, alignItems: 'center' }}>
                        <Image
                            source={ item.icon }
                            resizeMode={ 'contain' }
                            style={{ width: 48, height: 48 }}/>
                        <Text style={ styles.menuText }>{ key }</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }

    // renderBranchLogo() {
    //     if (!this.props.branchLogo) {
    //         return null
    //     }
    //     return (
    //         <FastImage
	// 			style={ styles.logo }
	// 			resizeMode={ FastImage.resizeMode.contain }
	// 			source={{ uri: this.props.branchLogo }}/>
    //     )
    // }

    // render() {
    //     return (
    //         <View style={[ styles.container, this.props.style ]}>
    //             { this.renderBranchLogo() }
    //             <View style={{ width: '100%', marginTop: 10 }}>
    //                 { this.renderMenu() }
    //             </View>
    //             <View style={ styles.connectionContainer }>
    //                 <TouchableOpacity
    //                     activeOpacity={ 0.9 }
    //                     onPress={ this.onPressRefreshFloor }
    //                     style={ styles.offlineButton }>
    //                     <Image
    //                         source={ iconRefresh }
    //                         style={ styles.offlineIcon }/>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity
    //                     activeOpacity={ 0.9 }
    //                     style={ styles.offlineButton }
    //                     onPress={ this.onPressOfflineCode }>
    //                     <Image
    //                         source={ iconOfflineCode }
    //                         style={ styles.offlineIcon }/>
    //                 </TouchableOpacity>
    //                 <Image
    //                     resizeMode="contain"
    //                     style={ styles.connectionStatus }
    //                     source={ this.props.isOnline ? iconOnlineNextBite : iconOfflineNextBite } />
                  
                 
    //             </View>
    //         </View>
    //     )
    // }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',

        flexDirection:'column',
        alignItems:   'center',

        paddingTop:    10,
        paddingBottom: 10,
    },
    version: {
        color: 'lightgray',
        marginTop: 8,
        fontSize: 10
    },

    logo: {
        width:  50,
        height: 50,
    },

    menuText: {
        color: '#fff',
        // fontFamily: 'HelveticaNeueLTStd-Lt',
        fontSize: 12,
        marginTop: 5
    },
    connectionContainer: {
        alignItems: 'center',

        position: 'absolute',
        bottom:   15
    },
    connectionStatus: {
        width: 66,
        height: 40
    },
    connectionText: {
        color: '#fff',
        fontFamily: 'HelveticaNeueLTStd-Lt',
        fontSize: 10,
    },
    offlineButton: {
        marginBottom: 20
    },
    offlineIcon: {
        width: 38,
        height: 38,
        tintColor: 'lightgray'
    }
})