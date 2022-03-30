import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,Dimensions } from 'react-native';
import MenuBackgroundImage from '../../UI/MenuBackgroundImage';
import Modal from "react-native-modal";
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      displayPhotoModal:undefined
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props.navigation.state.params.linkToPhoto,nextProps.navigation.state.params.linkToPhoto);
  }

  render() {
      // console.log(this.state.displayPhotoModal," ",this.props.navigation.state.params.linkToPhoto)
    return (
      <View style={{flex:1,backgroundColor:'red'}}>
    {this.props.navigation.state.params&&this.props.navigation.state.params.linkToPhoto&&   <Modal   isVisible={true}>
        <View style={{marginLeft:90,alignItems: 'center',justifyContent: 'center'}}>
          <Image style={{width:60,height:60,resizeMode: 'contain',marginBottom:20}} source={require('../../../assets/icons/icon_close.png')}/>
          <Image style={{width:Dimensions.get('window').width/1.2,height:Dimensions.get('window').height/1.22,resizeMode: 'contain'}} source={{uri:this.props.navigation.state.params.linkToPhoto}}/>
        </View>
      </Modal>}
        {/* <MenuBackgroundImage/> */}
      </View>
    );
  }
}
