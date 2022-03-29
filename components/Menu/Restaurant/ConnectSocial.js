import React, {Component} from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';
import colors from '../../../constants/colors';
const ICON_PATH='../../../assets/icons/'
export default class ConnectSocial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderConnect=(requiredPath,text)=>{
    return (<View style={{flexDirection: 'row'}}>
      <Image source={requiredPath} style={{width:22,height:22,resizeMode: 'contain'}}/>
      <Text style={{marginLeft:10,fontSize:17.5,marginBottom:20,color:colors.white}}>{text}</Text>
    </View>)

  }
  renderSocialmedia=(requiredPath,text)=>{
    return (<View style={{flexDirection: 'row'}}>
      <Image source={requiredPath} style={{width:22,height:22,resizeMode: 'contain'}}/>
      <Text style={{marginLeft:10,fontSize:17.5,marginBottom:12.5,color:colors.white}}>{text}</Text>
    </View>)

  }
  render() {
  
    return (
      <View style={styles.cardStyle}>
        
          <Text style={styles.titleStyle}> Connect {'\n'} </Text>
          {this.renderConnect(require(ICON_PATH+'icon_phone.png'),this.props.connect.phone)}
          {this.renderConnect(require(ICON_PATH+'icon_email.png'),this.props.connect.email)}
          {this.renderConnect(require(ICON_PATH+'icon_location.png'),this.props.connect.location)}
          {this.renderConnect(require(ICON_PATH+'icon_website.png'),this.props.connect.website)}
          <Text style={styles.titleStyle}> Connect {'\n'} </Text>
          {this.renderSocialmedia(require(ICON_PATH+'icon_facebook.png'),this.props.socialmedia.facebook)}
          {this.renderSocialmedia(require(ICON_PATH+'icon_google.png'),this.props.socialmedia.gplus)}
          {this.renderSocialmedia(require(ICON_PATH+'icon_instagram.png'),this.props.socialmedia.instagram)}
          {this.renderSocialmedia(require(ICON_PATH+'icon_twitter.png'),this.props.socialmedia.twitter)}
          {this.renderSocialmedia(require(ICON_PATH+'icon_youtube.png'),this.props.socialmedia.youtube)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleStyle: {color: '#fff', fontSize: 25},
  cardStyle: {
    flex: 2,
    backgroundColor: '#21212b',
    borderRadius: 5,
    overflow: 'hidden',
    padding:12
  },
})
