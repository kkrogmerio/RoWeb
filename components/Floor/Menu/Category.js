import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import fontStyle from '../../../constants/fontStyle';
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.isSelectedCategory()}
        onPress={() => this.props.switchCategoryHandler()}>
        <Text style={fontStyle.fontDetailsBox}>{this.props.categoryName}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({});
