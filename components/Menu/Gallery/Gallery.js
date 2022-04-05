import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import MenuBackgroundImage from '../../UI/MenuBackgroundImage';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import {
  ZOOM_PHOTO_IN_GALLERY,
  UNZOOM_PHOTO_IN_GALLERY,
} from '../../../redux/reducers/restaurantOverview';
import PhotoModal from './PhotoModal';
const unzoomPhoto = () => {
  return {type: UNZOOM_PHOTO_IN_GALLERY};
};
const zoommPhoto = () => {
  return {type: ZOOM_PHOTO_IN_GALLERY};
};
const photosStyles = [
  {width: 160, height: 160, top: 0},
  {width: 160, height: 160, top: 0, left: 160},
  {width: 160, height: 160, top: 0, left: 320},
  {width: 450, height: 340, top: 0, left: 480},
  {width: 480, height: 480, top: 160},
  {width: 300, height: 300, top: 340, left: 480},
  {width: 150, height: 150, top: 340, left: 780},
  {width: 150, height: 150, top: 490, left: 780},
  {width: 300, height: 600, top: 640},
  {width: 630, height: 600, top: 640, left: 300},
];
const mapStateToProps = state => {
  return {
    photos: state.restaurantOverview.photos,
    zoomPhoto: state.restaurantOverview.zoomPhoto,
  };
};
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      displayPhotoModal: undefined,
      openedGalleryPhoto: undefined,
    };
  }
  
  renderPhotos = () => {
    return this.props.photos.map(ie => (
      <FastImage style={{width: 300, height: 300}} source={{uri: ie}} />
    ));
  };
  calculateImageTop = index => {
    return (
      1240 * parseInt(index / photosStyles.length) +
      photosStyles[index % photosStyles.length].top
    );
  };

  openGalleryPhoto = photoUrl => {
    this.setState({isModalVisible: true, openedGalleryPhoto: photoUrl});
  };
  unzoom = () => {
    this.props.unzoomPhoto();
    this.setState({isModalVisible: false});
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.navigation.state.params &&
      this.props.navigation.state.params.linkToPhoto !=
        nextProps.navigation.state.params.linkToPhoto
    )
      this.setState({isModalVisible: true});
  }
  closeModal = () => {
    this.setState({isModalVisible: false});
  };
  render() {
   
    let photos = [...this.props.photos,...this.props.photos.slice(0,3)];
    return (
      <View style={{flex: 1}}>
        <MenuBackgroundImage />

        <PhotoModal
          zoomPhoto={this.props.zoomPhoto}
          isModalVisible={this.state.isModalVisible}
          unzoom={this.unzoom}
          openedGalleryPhoto={this.state.openedGalleryPhoto}
          linkToPhoto={
            this.props.navigation.state.params !== undefined
              ? this.props.navigation.state.params.linkToPhoto
              : undefined
          }
        />
        <FlatList
          keyExtractor={(item, index) => index}
          data={photos}
          contentContainerStyle={{
            paddingBottom:
              1240 * parseInt(photos.length / photosStyles.length) +
              photosStyles[photos.length % photosStyles.length-1].top +
              photosStyles[photos.length % photosStyles.length-1].height,
          }}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback
              onPress={() => this.openGalleryPhoto(item)}>
              <FastImage
                style={[
                  {position: 'absolute'},
                  photosStyles[index % photosStyles.length],
                  {top: this.calculateImageTop(index)},
                ]}
                source={{uri: item}}
              />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  {unzoomPhoto, zoommPhoto},
)(Gallery);
