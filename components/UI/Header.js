import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import fontStyle from '../../constants/fontStyle';
import TopMenu from './TopMenu';
import colors from '../../constants/colors'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props,'reeesdfamsfamfm')
    return (
      <View style={styles.header}>
        {this.props.floor && (
          <View>
            <View style={{...styles.showHour}}>
              <Text style={fontStyle.fontShowTime}>
                {this.props.currentTime[0]}
              </Text>
            </View>

            <View style={{...styles.showHour}}>
              <Text style={fontStyle.fontShowTime}>|</Text>
            </View>
            <View style={styles.showDate}>
              <Text style={fontStyle.fontShowTime}>
                {this.props.currentTime[1]}
              </Text>
            </View>
          </View>
        )}
        {this.props.admin&&Object.keys(this.props.menu).map((key,index)=>
        (
          <TouchableOpacity key={index} onPress={()=>this.props.navigate(key)} style={[styles.touchable,this.props.activeItem==key?styles.activeTouchable:styles.inactiveTouchable]}>
            <View style={styles.view}>
              <Text style={[{fontSize:17.5},this.props.activeItem==key?styles.activeTabText:styles.inactiveTabText]}>{key.split(/(?=[A-Z])/).join(" ")}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {this.props.children}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  showHour: {
    marginLeft: 25,
    justifyContent: 'center',
  },
  showDate: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  header: {
    height: 60,

    // flex: 1,
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
  },
  view:{
    justifyContent: 'center',
    alignItems:   'center',
  },
  activeTabText:{
    color:colors.white
  },
  inactiveTabText:{
    color:colors.gray
  },
  touchable:{
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    width:150
  },
  activeTouchable: {
    backgroundColor : colors.red
  },
  inactiveTouchable:{
    
    backgroundColor : '#252525'
  }
});
