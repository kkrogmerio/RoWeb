import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import fontStyle from '../../constants/fontStyle';
import {STATUS_TABLE} from '../../constants/strings';
import DisplayTime from '../UI/DisplayTime';
export default class TableStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.statusScreen}>
        <View style={[styles.statusTable, {backgroundColor: '#9dd155'}]}>
          <Text style={fontStyle.fontStatusTable}>15 </Text>
          <Text style={[fontStyle.fontStatusTable, {fontSize: 12}]}>
            {STATUS_TABLE.FREE}
          </Text>
        </View>
        <View style={[styles.statusTable, {backgroundColor: '#f4d055'}]}>
          <Text style={fontStyle.fontStatusTable}>5 </Text>
          <Text style={[fontStyle.fontStatusTable, {fontSize: 12}]}>
            {STATUS_TABLE.BUSY}
          </Text>
        </View>
        <View style={[styles.statusTable, {backgroundColor: '#f5484f'}]}>
          <Text style={fontStyle.fontStatusTable}>3 </Text>
          <Text style={[fontStyle.fontStatusTable, {fontSize: 12}]}>
            {STATUS_TABLE.OVERSTAYED}
          </Text>
        </View>
        <View style={[styles.statusTable, {backgroundColor: '#a864a8'}]}>
          <Text style={fontStyle.fontStatusTable}>2 </Text>
          <Text style={[fontStyle.fontStatusTable, {fontSize: 12}]}>
            {STATUS_TABLE.NEED_SERVICES}
          </Text>
        </View>
        <View style={[styles.statusTable, {backgroundColor: '#00a99d'}]}>
          <Text style={fontStyle.fontStatusTable}>3 </Text>
          <Text style={[fontStyle.fontStatusTable, {fontSize: 12}]}>
            {STATUS_TABLE.NO_WAITERS}{' '}
          </Text>
          <Image
            style={{width: 17.5, height: 17.5}}
            source={require('../../assets/icons/nowaiters.png')}
          />
        </View>
        <DisplayTime textColor={'black'} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  statusScreen: {borderWidth: 1, borderColor: 'black', flexDirection: 'row'},
  statusTable: {
    width: 116,

    height: 39,
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
