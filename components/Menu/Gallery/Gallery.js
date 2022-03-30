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
const unzoomPhoto = () => {
  return {type: UNZOOM_PHOTO_IN_GALLERY};
};
const zoommPhoto = () => {
  return {type: ZOOM_PHOTO_IN_GALLERY};
};
const photosStyles = [
  {width: 160, height: 160,top:0},
  {width: 160, height: 160,top:0, left: 160},
  {width: 160, height: 160,top:0, left: 320},
  {width: 450, height: 340,top:0, left: 480},
  {width:480,height:480,top:160},
  {width:300,height:300,top:340,left:480},
  {width:150,height: 150,top:340,left:780},
  {width:150,height: 150,top:490,left:780},
  {width:300,height:600,top:640},
  {width:630,height:600,top:640,left:300}

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
  calculateImageTop=(index)=>{
     return (1240*parseInt(index/photosStyles.length)+photosStyles[index% photosStyles.length].top)
  }
   
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
    let photos = this.props.photos.reverse();
     return (
      <View style={{flex: 1}}>
        <MenuBackgroundImage/>
        <Modal isVisible={this.props.zoomPhoto || this.state.isModalVisible}>
          <View
            style={{
              marginLeft: 90,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableWithoutFeedback onPress={() => this.unzoom()}>
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
                    ? this.props.navigation.state.params.linkToPhoto
                    : this.state.openedGalleryPhoto,
              }}
            />
          </View>
        </Modal>

        <FlatList
          keyExtractor={(item, index) => index}
          data={photos}
          contentContainerStyle={{ paddingBottom:1240*parseInt(photos.length/photosStyles.length)+photosStyles[photos.length% photosStyles.length].top+photosStyles[photos.length% photosStyles.length].height }}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback
              onPress={() => this.openGalleryPhoto(item)}>
              <FastImage
                style={[
                  {position: 'absolute'},
                  photosStyles[index % photosStyles.length],
                  {top:this.calculateImageTop(index)}
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
