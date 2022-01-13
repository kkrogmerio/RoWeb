import React from 'react';
import {connect} from 'react-redux';
import {GET_RESTAURANTS_MENU} from '../redux/restaurants';
import {GET_RESTAURANTS_ORDER} from '../redux/restaurants';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Header from '../components/UI/Header';
import colors from '../constants/colors';
import MenuSpace from '../components/Menu/MenuSpace';
import OrderSpace from '../components/Order/OrderSpace';
import chronometer from '../signletons/Chronometer';
const mapStateToProps = state => {
  return {
    restaurantsMenu: state.restaurants.restaurantsMenu,
    restaurantsOrder: state.restaurants.restaurantsOrder,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getRestaurantsMenu: () => {
      dispatch({type: GET_RESTAURANTS_MENU});
    },
    getRestaurantsOrder: () => {
      dispatch({type: GET_RESTAURANTS_ORDER});
    },
  };
};
class Floor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      selectedGroup: 0,
      selectedCategory: 0,
      currentCategories: [],
      currentDishes: [],
      currentItems: [],
      currentTime: [],
    };
    this.timer = null;
    this.switchGroupHandler = this.switchGroupHandler.bind(this);
    this.isSelectedCategory = this.isSelectedCategory.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);

    this.calculatePrice = this.calculatePrice.bind(this);
    this.calculateSubTotal = this.calculateSubTotal.bind(this);
  }

  calculatePrice(itemCost, toppingsCost) {
    return (
      itemCost +
      toppingsCost.map(ie => ie.price).reduce((acc, cval) => acc + cval, 0)
    );
  }
  calculateSubTotal() {
    return this.state.currentItems
      .map(ie => this.calculatePrice(ie.itemPrice, ie.orderToppings))
      .reduce((acc, cval) => acc + cval, 0);
  }
  componentWillReceiveProps(newProps) {
    setTimeout(() => {}, 1000);
    if (newProps.restaurantsMenu && newProps.restaurantsOrder) {
      let groups = newProps.restaurantsMenu.groups;
      let dishes = newProps.restaurantsMenu.dishes;
      let categories = newProps.restaurantsMenu.categories;
      console.log('CATEGORIES= ', categories);
      let items = newProps.restaurantsOrder.items;

      let scalars = newProps.restaurantsOrder.scalars;
      let filteredItems = items.filter(ie => ie.orderId == scalars.orderId);
      let filteredCategories = categories.filter(ie =>
        ie.groupIds.includes(groups[0].id),
      );

      let selectedCategory = filteredCategories[0].id;
      let filteredDishes = dishes.filter(ie =>
        ie.categoryIds.includes(filteredCategories[0].id),
      );

      this.setState({
        selectedGroup: groups[0].id,
        currentCategories: filteredCategories,
        selectedCategory,
        currentDishes: filteredDishes,
        currentItems: filteredItems,
        fetchedData: 1,
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.selectedGroup, nextState.selectedGroup);
    return true;
  }
  isSelectedCategory(categoryId) {
    let categoryButtonDesign = {
      width: 66.5,
      height: 29,
      padding: 5,
      marginBottom: 20,
      marginLeft: 21,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 14.5,
      backgroundColor:
        categoryId == this.state.selectedCategory ? colors.red : colors.gray,
      borderWidth: categoryId == this.state.selectedCategory ? 1 : 0,
      borderColor: categoryId == this.state.selectedCategory ? '' : colors.gray,
    };
    return categoryButtonDesign;
  }
  switchGroupHandler(groupId) {
    let dishes = this.props.restaurantsMenu.dishes;
    let categories = this.props.restaurantsMenu.categories;
    console.log('Reacts');
    let filteredCategories = categories.filter(ie =>
      ie.groupIds.includes(groupId),
    );
    let selectedCategory = filteredCategories[0].id;
    let filteredDishes = dishes.filter(ie =>
      ie.categoryIds.includes(filteredCategories[0].id),
    );
    this.setState({
      selectedGroup: groupId,
      currentCategories: filteredCategories,
      selectedCategory,
      currentDishes: filteredDishes,
      fetchedData: 1,
    });
  }
  switchCategoryHandler(categoryId) {
    let dishes = this.props.restaurantsMenu.dish;
    let filteredDishes = dishes.filter(ie =>
      ie.categoryIds.includes(categoryId),
    );
    this.setState({
      selectedCategory: categoryId,
      selectedDishes: filteredDishes,
    });
  }
  setCurrentTime(currentDate) {
    this.setState({currentTime: currentDate});
  }
  
  getCurrentTime() {
    this.timer = setInterval(() => {
      if(chronometer.shouldChangeTime())
        this.setCurrentTime(chronometer.displayTime())
      
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
  componentDidMount() {
    this.setCurrentTime(chronometer.displayTime());
    this.getCurrentTime();
    this.setState({isLoading: true});
    setTimeout(() => {}, 1000);
    try {
      this.props.getRestaurantsOrder();
      this.props.getRestaurantsMenu();
    } catch (e) {
      this.setState({isLoading: false});
      this.setState({isError: true});
    }
    this.setState({isLoading: false});
  }
  render() {
    if (
      this.props.restaurantsMenu &&
      this.props.restaurantsOrder &&
      this.state.isLoading == false
    ) {
      let scalars = this.props.restaurantsOrder.scalars;
      let groups = this.props.restaurantsMenu.groups;

      if (this.state.fetchedData && groups && this.state.isLoading == false) {
        console.log(this.state.currentTime);
        return (
          <View style={styles.fullScreen}>
            <View
              style={{
                flex: 3,
                backgroundColor: '#222',
                flexDirection: 'row',
                alingItems: 'center',
              }}
            />

            <View style={{flex: 19, backgroundColor: 'white'}}>
              <Header currentTime={this.state.currentTime} />
              <View
                style={{
                  height: '100%',
                  flex: 13,
                  flexDirection: 'row',
                  paddingRight: 10,
                }}>
                <MenuSpace
                  groups={groups}
                  currentCategories={this.state.currentCategories}
                  currentDishes={this.state.currentDishes}
                  isSelectedCategory={this.isSelectedCategory}
                  selectedGroup={this.state.selectedGroup}
                  switchGroupHandler={this.switchGroupHandler}
                  switchCategoryHandler={this.switchCategoryHandler}
                />
                <View style={styles.separatorMenuOrder} />
                <OrderSpace
                  currentItems={this.state.currentItems}
                  calculatePrice={this.calculatePrice}
                  calculateSubTotal={this.calculateSubTotal}
                  scalars={scalars}
                  generalInfo={this.state.connectionCode}
                />
              </View>
            </View>
          </View>
        );
      } else
        return (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={colors.red} />
          </View>
        );
    } else
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={colors.red} />
        </View>
      );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Floor);

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  separatorMenuOrder: {
    width: 0.5,
    backgroundColor: 'black',
    marginHorizontal: 22.5,
  },
});
