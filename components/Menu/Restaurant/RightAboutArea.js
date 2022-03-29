import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import {ConnectSocial,OpenHours} from './Index';
const mapStateToProps = state => {
  return {
    connect:state.restaurantOverview.connect,
    socialmedia: state.restaurantOverview.socialmedia,
    program: state.restaurantOverview.program
  };
};
class RightAboutArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ConnectSocial connect={this.props.connect} socialmedia={this.props.socialmedia}/>
        <View style={{marginVertical:10}}/>
        <OpenHours program={this.props.program}/>
      </View>
    );
  }
}
export default connect(mapStateToProps,null)(RightAboutArea);
