import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import fontStyle from '../../../constants/fontStyle';
import colors from '../../../constants/colors';
export default class Dish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FastImage
          style={styles.dishImage}
          source={{uri: this.props.dishImage}}>
          <View style={styles.dishPrice}>
            <Text style={fontStyle.fontDetailsBox}>
              ${this.props.dishPrice}
            </Text>
          </View>
          <LinearGradient
                      end={{x: 0.0, y: 1}}
                      start={{x: 0.0, y: 0.0}}
                      colors={[
                        'rgba(0, 0, 0, 0)',
                        'rgba(0, 0, 0, 0.5)',
                        'rgba(0, 0, 0, 0.75)',
                      ]}>
          <View style={styles.dishOverlay}>
          
            <Text style={fontStyle.fontDetailsBox}>{this.props.dishName}</Text>
            
          </View>
          </LinearGradient>
        </FastImage>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dishImage: {
    flex: 4,
    marginTop: 3,
    marginRight: 25,
    marginBottom: 22.5,
    marginLeft: 20.5,
  },
  dishPrice: {
 
    
    width: 51,
    height: 22,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 99,
    paddingTop: 5,
    backgroundColor: colors.red,
    marginBottom:80
  },
  dishOverlay: {
    width: 150,
    height: 34,
    
    paddingLeft: 9,
    display:'flex',
    justifyContent: 'flex-end',
    paddingBottom:4
    
  
  },
});
