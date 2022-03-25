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
import {SET_MENU_CURRENT_GROUP} from '../../redux/reducers/restaurantMenu';
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
    let sideMenuTitle;
    if(this.props.nameMenu==='Menu')
    sideMenuTitle = this.props.items.find(ie => ie.id == this.props.groupId)
      ? this.props.items.find(ie => ie.id == this.props.groupId).name
      : MENU.DEFAULT_HEADER;
      else
      sideMenuTitle=this.props.nameMenu;

    return (
      <View style={styles.leftMenu}>
        <View>
          <TouchableWithoutFeedback onPress={()=>this.props.navigate('Menu')}>
          <Image
            style={[styles.iconMenu, {marginTop: 0,opacity:1}]}
            source={require('../../assets/icons/icon_food_active.png')}
          />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>this.props.navigate('Gallery')}>
          <Image
            style={styles.iconMenu}
            source={require('../../assets/icons/imageicon.png')}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.props.navigate('Restaurant')}>
          <Image
            style={styles.iconMenu}
            source={require('../../assets/icons/info.png')}
          />
          </TouchableWithoutFeedback>
        </View>
        
        <View style={{width: 300}}>
          <View style={styles.groupTitle}>
            <Text style={[fontStyle.menuHeader, {marginLeft: 20}]}>
              {sideMenuTitle}
            </Text>
            {sideMenuTitle !== MENU.DEFAULT_HEADER && this.props.nameMenu==='Menu'&& (
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
    flex: 0.10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    
    alignItems: 'center',
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  groupTitle: {
    height: 'auto',
    transform: [{rotate: '270deg'}],
    alignItems: 'center',
    width: 'auto',  
    opacity:1.5,

    flexDirection: 'row-reverse',
  },
  iconMenu: {
    maxWidth: 35,
    maxHeight: 40,
    resizeMode: 'contain',
    marginTop: 33,
    opacity:0.4
  },
  rotatedIcon: {
    maxWidth: 33,
    maxHeight: 33,
    resizeMode: 'contain',
    transform: [{rotate: '90deg'}],
  },
  nextBiteIcon: {maxWidth: 75, maxHeight: 61, resizeMode: 'contain'},
});
