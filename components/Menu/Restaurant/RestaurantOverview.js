import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../constants/colors';
export default class RestaurantOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
 
    return (
      <View
        style={{flex: 1, justifyContent: 'flex-end',borderRadius:5,shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
          width: 7.5,
          height: 16,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,}}>
        <FastImage
          style={{width: '100%', height: '100%', position: 'absolute',borderRadius:5}}
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/nextbite-newplatform.appspot.com/o/about-us%2F1_1552483913_cover.jpg?alt=media',
          }}
        />
        <LinearGradient
          end={{x: 0.0, y: 0.6}}
          start={{x: 0.0, y: 0.0}}
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.7)',
            'rgba(0, 0, 0, 0.9)',
          ]}>
          <View
            style={{
              width: '100%',
              height: 95,
              display: 'flex',
              flexDirection: 'row',
              marginTop: 70,
            }}>
            <View
              style={{
                flex: 1.8,
                flexDirection: 'row',
                justifyContent: 'center',
                marginRight:30,
                marginLeft:10
              }}>
              <View
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: 37.5,
                  overflow: 'hidden',
                  marginRight: 5,
                }}>
                <FastImage
                  style={{
                    minWidth: '100%',
                    minHeight: '100%',
                    resizeMode: 'contain',
                  }}
                  source={{uri: this.props.restaurantLogo}}
                />
              </View>
              <View>
                <Text style={{fontSize: 30, color: colors.white}}>
                  {this.props.restaurantName}
                </Text>
                <Text style={{fontSize: 15, color: colors.white}}>
                  open flame kitchen
                </Text>
              </View>
            </View>
            <View style={{flex: 2.5, paddingRight: 20}}>
              <Text style={{fontSize: 11, color: colors.white}}>
                Description {'\n\n'} {this.props.restaurantDescription}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
