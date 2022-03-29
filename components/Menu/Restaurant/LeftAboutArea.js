import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {RestaurantOverview, Photos, Branches} from './Index';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    photos: state.restaurantOverview.photos,
    logo: state.restaurantOverview.logo,
    photos: state.restaurantOverview.photos,
    branches: state.restaurantOverview.branches,
    backgroundImage: state.restaurantOverview.backgroundImage,
    restaurantName: state.restaurantOverview.name,
    description: state.restaurantOverview.description,
    logo: state.restaurantOverview.logo,
  };
};
class LeftAboutArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 2}}>
        <RestaurantOverview
          backgroundImage={this.props.backgroundImage}
          restaurantName={this.props.restaurantName}
          restaurantDescription={this.props.description}
          restaurantLogo={this.props.logo}
        />
        <View style={{marginVertical: 10}} />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Photos navigateToGallery={this.props.navigate} photos={this.props.photos}/>
          <View style={{marginHorizontal: 10}} />
          <Branches branches={this.props.branches} />
        </View>
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  null,
)(LeftAboutArea);
