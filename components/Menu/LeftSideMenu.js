import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../constants/colors';
import fontStyle from '../../constants/fontStyle';
export default class LeftSideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.leftMenu}>
        <View>
          <Image
            style={{
              maxWidth: 35,
              maxHeight: 40,
              resizeMode: 'contain',
              
            }}
            source={require('../../assets/icons/icon_food_active.png')}
          />

          <Image
            style={{
              maxWidth: 35,
              maxHeight: 40,
              resizeMode: 'contain',
              marginTop: 33,
            }}
            source={require('../../assets/icons/imageicon.png')}
          />

          <Image
            style={{
              maxWidth: 35,
              maxHeight: 40,
              resizeMode: 'contain',
              marginTop: 33,
            }}
            source={require('../../assets/icons/info.png')}
          />
        </View>
        <View style={{width:300}}>
          <View
            style={{
              
              height: 'auto',
              transform: [{rotate: '270deg'}],
              alignItems: 'center',
              width:'auto',
              
              flexDirection: 'row-reverse',
              
           
            }}>
            <Text style={[fontStyle.menuHeader,{marginLeft:20}]}>Breakfast and dinner</Text>
            <Image
              style={{maxWidth: 33, maxHeight: 33, resizeMode: 'contain',transform:[{rotate:'90deg'}]}}
              source={require('../../assets/icons/arrow-right.png')}
            />
          </View>
          <View>
           
          </View>
        </View>
        <Image
          style={{maxWidth: 100, maxHeight: 65, responsive: 'contain'}}
          source={require('../../assets/icons/icon_nextbite_menu_online.png')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  leftMenu: {
    flex: 2,
    backgroundColor: colors.dark,
    alignItems: 'center',
    paddingVertical: 40,
    justifyContent: 'space-between',
    
  },
});
