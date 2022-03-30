import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import { ZOOM_PHOTO_IN_GALLERY } from '../../../redux/reducers/restaurantOverview';
import {connect} from 'react-redux';
const zoomPhoto=()=>{
  return {type:ZOOM_PHOTO_IN_GALLERY}
}
class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navigateToGallery=(linkToPhoto)=>{
    this.props.zoomPhoto();
    this.props.navigateToGallery('Gallery',{linkToPhoto:linkToPhoto});
  }
  renderPhotos = (photoFrame, index) => {
    let flexDirection = index > 0 ? 'row' : 'row-reverse';
    
    return (
      <View style={{flex: 1, flexDirection}}>
        <TouchableOpacity  style={{flex: 1.2, height: 100}}  onPress={() => this.navigateToGallery(photoFrame[0])}>
          <FastImage
           style={{width:'100%',height: '100%'}}
            source={{uri: photoFrame[0]}}
          />
        </TouchableOpacity>
        <TouchableOpacity  style={{flex: 0.8, height: 100}} onPress={() => this.navigateToGallery(photoFrame[1])}>
          <FastImage
            style={{width:'100%',height: '100%'}}
            source={{uri: photoFrame[1]}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    if(this.props.photos===undefined)
    return <View/>
    let photosFrame = [];
    this.props.photos.slice(6).map((ie, index, self) => {
      if (index % 2 == 1) photosFrame.push([self[index - 1], self[index]]);
    });

    return (
      <View style={styles.cardStyle}>
        <Text style={styles.titleStyle}> Photos </Text>
        {photosFrame.map((ie, index) => this.renderPhotos(ie, index))}
      </View>
    );
  }
}
export default connect(null,{zoomPhoto})(Photos)
const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    backgroundColor: '#21212b',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 16,
  },
  titleStyle: {color: '#fff', fontSize: 25, marginBottom: 15},
});
