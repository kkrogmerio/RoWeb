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
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import fontStyle from '../../constants/fontStyle';
import {SET_MENU_CURRENT_GROUP} from '../../redux/restaurants';
const mapStateToProps = state => {
  return {
    items: state.restaurants.restaurantMenu.groups,
    groupId: state.restaurants.currentGroup,
  };
};
mapDispatchToProps = dispatch => {
  return {
    setMenuGroupId: groupId =>
      dispatch({type: SET_MENU_CURRENT_GROUP, groupId}),
  };
};
class DisplayGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {refreshPage: 0};
    this.showGroupMenu = this.showGroupMenu.bind(this);
  }
  showGroupMenu(groupId) {
    this.props.setMenuGroupId(groupId);
    this.props.navigation.navigate('DisplayDishes');
  }
  render() {
    return (
      <View style={styles.groupsPanel}>
        <View>
          <FlatList
            horizontal
            contentContainerStyle={{paddingHorizontal: 80}}
            data={this.props.items}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() => this.showGroupMenu(item.id)}>
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
                    <View style={styles.menuGradientLayou}>
                      <Text style={fontStyle.groupMenuTitle}>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayGroups);
const styles = StyleSheet.create({
  groupsPanel: {
    flex: 40,
    backgroundColor: colors.dark,

    justifyContent: 'center',
  },
  groupImage: {
    display: 'flex',
    width: 335,
    height: 535,
    marginHorizontal: 30,
    justifyContent: 'flex-end',
  },
  menuGradientLayou: {height: 180, padding: 20,paddingTop:25}
});
