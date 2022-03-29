import React, { Component } from 'react';
import { View, Text,StyleSheet,Modal } from 'react-native';
import MenuBackgroundImage from '../../UI/MenuBackgroundImage';
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      displayPhotoModal:undefined
    };
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props.navigation.state.params.linkToPhoto,nextProps.navigation.state.params.linkToPhoto);
  // }

  render() {
      // console.log(this.state.displayPhotoModal," ",this.props.navigation.state.params.linkToPhoto)
    return (
      <View style={{flex:1}}>
    {this.props.navigation.state.params&&this.props.navigation.state.params.linkToPhoto&&    <Modal isVisible={true} transparent={true}>
        <View style={{ flex: 1 }}>
          <Text>{this.props.navigation.state.params.linkToPhoto}!</Text>

          
        </View>
      </Modal>}
        <MenuBackgroundImage/>
      </View>
    );
  }
}
