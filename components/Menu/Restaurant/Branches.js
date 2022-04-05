import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MapView, {Marker} from 'react-native-maps';
import colors from '../../../constants/colors';
export default class Branches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: this.props.branches[0].latitude,
        longitude: this.props.branches[0].longitude,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006,
      },
    };
  }
  switchMapViewLocation = (latitude, longitude) => {


    this.setState(prevState => {
      let region = Object.assign({}, prevState.region);
      region.latitude = latitude;
      region.longitude = longitude;
      return {region};
    });
  };
  renderBranchesData = branch => {
    return (
      <View style={styles.branchAreaStyle}>
        <View style={{flex: 6}}>
          <Text style={[styles.branchNameStyle, {marginBottom: 4}]}>
            {branch.name}
          </Text>
          <Text style={styles.branchAddressStyle}>{branch.address}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.switchMapViewLocation(branch.latitude, branch.longitude)
          }>
          <View style={{flex: 1, marginLeft: 1}}>
            <Image
              source={{uri: branch.goToIcon}}
              style={{width: 30, height: 30}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  renderBrenchesLocation = branches => {
    return branches.map(ie => (
      <Marker
        coordinate={{latitude: ie.latitude, longitude: ie.longitude}}
        image={{uri: ie.pinLocationIcon}}
      />
    ));
  };
  render() {
    let branches = this.props.branches;
    if(branches===undefined) {
      return <View/>
    }
    return (
      <View style={styles.cardStyle}>
        <View style={styles.noMapAreaStyle}>
          <Text style={styles.titleStyle}> Branches </Text>
          <FlatList
            data={branches}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => this.renderBranchesData(item)}
          />
          {/* <View style={[{height:25,zIndex:2,backgroundColor:'white'},styles.shadowMapStyle]}/> */}
        </View>
        <View
          style={[
            {flex: 0.25, zIndex: 2, backgroundColor: '#21212b'},
            styles.shadowMapStyle,
          ]}
        />

        <View style={styles.cardMapStyle}>
          <MapView
            showsPointsOfInterest={false}
            initialRegion={this.state.region}
            region={this.state.region}
            style={styles.mapAreaStyle}
            userInterfaceStyle="dark">
            {this.renderBrenchesLocation(branches)}
          </MapView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    backgroundColor: '#21212b',
    borderRadius: 5,
   
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 7.5,
      height: 16,
    },
    shadowOpacity: 1,
    shadowRadius: 16.00,
  },
  noMapAreaStyle: {flex: 1.7, paddingTop: 15, paddingLeft: 15},
  titleStyle: {color: colors.white, fontSize: 25},
  mapAreaStyle: {width: '100%', height: '100%'},
  branchAreaStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    marginTop: 10,
  },
  branchNameStyle: {color: colors.white, fontSize: 18},
  branchAddressStyle: {color: colors.white, fontSize: 14},
  cardMapStyle: {flex: 1.5},
  shadowMapStyle: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 20,
    shadowOffset: {height: 30},
  },
});
