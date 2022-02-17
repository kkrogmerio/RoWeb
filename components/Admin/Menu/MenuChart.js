import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList,TouchableWithoutFeedback} from 'react-native';
import BoxHeader from '../BoxHeader';
import DishItem from './DishItem';

import {getDishesDummyData} from '../../../constants/dummyData';
export default class MenuChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: this.props.chartTypes[0],
      dishesData: getDishesDummyData(),
      flatListRef: React.createRef(),
      currentListOffset: 0,
    };
    this.setChartType = this.setChartType.bind(this);
    this.toNextDish = this.toNextDish.bind(this);
    this.toPrevDish = this.toPrevDish.bind(this);
  }
  setChartType(chartType) {
    this.setState({chartType});
  }
  toNextDish(){
    console.log(this.state.currentListOffset);
    
    let newOffsetValue = this.state.currentListOffset+1;
    this.state.flatListRef.current.scrollToIndex({index:newOffsetValue,animated:true})
    this.setState({currentListOffset:newOffsetValue})
  }
  toPrevDish(){
    let newOffsetValue = this.state.currentListOffset-1;
    this.state.flatListRef.current.scrollToIndex({index:newOffsetValue,animated:true})
    this.setState({currentListOffset:newOffsetValue})
  }
  render() {
    
    return (
      <View>
        <BoxHeader
          chartTypes={this.props.chartTypes}
          chartType={this.state.chartType}
          setChartType={this.setChartType}
          title={this.props.title}
        />
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={{height: '100%', display: 'flex', justifyContent: 'center'}}>
         {this.state.currentListOffset>0&&  <TouchableWithoutFeedback onPress={this.toPrevDish}>
            <View style={{width: 16, height: 27}}>
              <Image
                source={require('../../../assets/icons/previous.png')}
                style={{maxHeight: '100%', maxWidth: '100%'}}
              />
            </View>
            </TouchableWithoutFeedback>}
          </View>
          <View style={styles.mostSellingDishesLayout}>
            <FlatList showsHorizontalScrollIndicator={false} scrollEnabled={false} ref={this.state.flatListRef} horizontal data={this.state.dishesData} renderItem={({item,index})=>(<DishItem dishData={item} index={index} />)}/>
           
            <View
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}>
           {this.state.currentListOffset<this.state.dishesData.length-1&&        <TouchableWithoutFeedback onPress={this.toNextDish}>
              <View style={{width: 16, height: 27}}>
                <Image
                  source={require('../../../assets/icons/next.png')}
                  style={{maxHeight: '100%', maxWidth: '100%'}}
                />
              </View>
              </TouchableWithoutFeedback>}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mostSellingDishesLayout: {
    height: 217,
    width: 520,
    
    
   
    display: 'flex',
    flexDirection: 'row',
    
  },
});
