import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import {MENU} from '../../constants/strings';
import colors from '../../constants/colors';
import fontStyle from '../../constants/fontStyle';
import {SET_MENU_CURRENT_GROUP} from '../../redux/restaurants';
const mapStateToProps = state => {
  return {
    items: state.restaurants.restaurantMenu.groups,
    groupId: state.restaurants.currentGroupId,
  };
};
mapDispatchToProps = dispatch => {
  return {
    setMenuGroupId: groupId =>
      dispatch({type: SET_MENU_CURRENT_GROUP, groupId}),
  };
};
class LeftSideMenu extends Component {
  constructor(props) {
    super(props);

    this.backToMenu = this.backToMenu.bind(this);
  }
  backToMenu() {
    this.props.setMenuGroupId(null);

    this.props.navigate('DisplayGroups');
  }
  componentDidMount() {}
  render() {
    const groupName = this.props.items.find(ie => ie.id == this.props.groupId)
      ? this.props.items.find(ie => ie.id == this.props.groupId).name
      : MENU.DEFAULT_HEADER;

    return (
      <View style={styles.leftMenu}>
        <View>
          <Image
            style={[styles.iconMenu, {marginTop: 0}]}
            source={require('../../assets/icons/icon_food_active.png')}
          />

          <Image
            style={styles.iconMenu}
            source={require('../../assets/icons/imageicon.png')}
          />

          <Image
            style={styles.iconMenu}
            source={require('../../assets/icons/info.png')}
          />
        </View>
        <View style={{width: 300}}>
          <View style={styles.groupTitle}>
            <Text style={[fontStyle.menuHeader, {marginLeft: 20}]}>
              {groupName}
            </Text>
            {groupName !== MENU.DEFAULT_HEADER && (
              <TouchableWithoutFeedback onPress={this.backToMenu}>
                <Image
                  style={styles.rotatedIcon}
                  source={require('../../assets/icons/arrow-right.png')}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
        <Image
          style={styles.nextBiteIcon}
          source={require('../../assets/icons/icon_nextbite_menu_online.png')}
        />
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftSideMenu);
const styles = StyleSheet.create({
  leftMenu: {
    flex: 0.12,
    backgroundColor: colors.dark,
    alignItems: 'center',
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  groupTitle: {
    height: 'auto',
    transform: [{rotate: '270deg'}],
    alignItems: 'center',
    width: 'auto',

    flexDirection: 'row-reverse',
  },
  iconMenu: {
    maxWidth: 35,
    maxHeight: 40,
    resizeMode: 'contain',
    marginTop: 33,
  },
  rotatedIcon:{
    maxWidth: 33,
    maxHeight: 33,
    resizeMode: 'contain',
    transform: [{rotate: '90deg'}],
  },
  nextBiteIcon: {maxWidth: 80, maxHeight: 65, resizeMode: 'contain'}
});
