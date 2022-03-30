import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
  
  } from 'react-native';
export default class PhotoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Modal isVisible={this.props.zoomPhoto || this.props.isModalVisible}>
        <View
          style={{
            marginLeft: 90,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableWithoutFeedback onPress={() => this.props.unzoom()}>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                marginBottom: 20,
              }}
              source={require('../../../assets/icons/icon_close.png')}
            />
          </TouchableWithoutFeedback>
          <Image
            style={{
              width: Dimensions.get('window').width / 1.2,
              height: Dimensions.get('window').height / 1.22,
              resizeMode: 'contain',
            }}
            source={{
              uri:
                this.props.zoomPhoto === true
                  ? this.props.linkToPhoto
                  : this.props.openedGalleryPhoto,
            }}
          />
        </View>
      </Modal>
    );
  }
}
