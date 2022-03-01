import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../constants/colors';
import {loremIpsum} from '../../constants/dummyData';
import LinearGradient from 'react-native-linear-gradient';
import fontStyle from '../../constants/fontStyle';
export default class DisplayGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showGroupMenu=this.showGroupMenu.bind(this);
  }
 
  render() {
    console.log(this.props.items);
    return (
      <View style={styles.groupsPanel}>
        <View>
          <FlatList
            horizontal
            contentContainerStyle={{paddingHorizontal: 80}}
            data={this.props.items}
            renderItem={({item}) => (
              <TouchableWithoutFeedback onPress={()=>this.showGroupMenu(item.name)}>
                <FastImage
                  source={{uri: item.imageUrl}}
                  style={styles.groupImage}>
                  <LinearGradient
                    end={{x: 0.0, y: 0.2}}
                    start={{x: 0.0, y: 0.0}}
                    colors={[
                      'rgba(0, 0, 0, 0)',
                      'rgba(0, 0, 0, 0.5)',
                      'rgba(0, 0, 0, 0.75)',
                    ]}>
                    <View style={{height: 150, padding: 20}}>
                      <Text style={fontStyle.menuTitle}>
                        {item.name}
                        {'\n'}
                      </Text>
                      <Text style={fontStyle.menuDesc}>{loremIpsum}</Text>
                    </View>
                  </LinearGradient>
                </FastImage>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  groupsPanel: {
    flex: 14,
    backgroundColor: colors.dark,

    justifyContent: 'center',
  },
  groupImage: {
    display: 'flex',
    width: 335,
    height: 535,
    marginHorizontal: 40,
    justifyContent: 'flex-end',
  },
});
