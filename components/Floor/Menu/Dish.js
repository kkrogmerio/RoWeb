import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient'
import fontStyle from '../../../constants/fontStyle';
import colors from '../../../constants/colors';
export default class Dish extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
          <View style={styles.dishOverlay}>
         
         
          
					<Text style={fontStyle.fontDetailsBox}>
              {this.props.dishName}
            </Text>
			
          
          </View>
         
        </FastImage>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    dishImage: {
        flex:4,
        marginTop: 3,
        marginRight: 25,
        marginBottom: 22.5,
        marginLeft: 20.5,
      },
      dishPrice: {
        width: 51,
        height: 22,
        marginLeft: 99,
        paddingTop: 5,
        paddingHorizontal: 6.5,
        paddingBottom: 2.5,
        backgroundColor: colors.red,
      },
      dishOverlay: {
        width: 150,
        height: 34,
        marginTop: 80,
        paddingLeft:9,
      
     
    
      
        opacity: 0.8,
      },
})
