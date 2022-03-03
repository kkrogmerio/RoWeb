import React from 'react';
import {connect} from 'react-redux';
import {GET_RESTAURANT_MENU} from '../redux/restaurants';
import {GET_RESTAURANTS_ORDER} from '../redux/restaurants';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import Header from '../components/UI/Header';
import colors from '../constants/colors';
import MenuSpace from '../components/Floor/Menu/MenuSpace';
import OrderSpace from '../components/Floor/Order/OrderSpace';
import chronometer from '../signletons/Chronometer';
import SearchBar from '../components/UI/SearchBar';
import SectionSeparator from '../components/UI/SectionSeparator';
import BezierLineChart from '../components/Admin/Customers/BezierLineChart';
const mapStateToProps = state => {
  return {
    restaurantMenu: state.restaurants.restaurantMenu,
    restaurantsOrder: state.restaurants.restaurantsOrder,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getrestaurantMenu: () => {
      dispatch({type: GET_RESTAURANT_MENU});
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

      searchDishName: '',
    };

    this.switchGroupHandler = this.switchGroupHandler.bind(this);
    this.switchCategoryHandler = this.switchCategoryHandler.bind(this);
    this.isSelectedCategory = this.isSelectedCategory.bind(this);

    this.searchDishHandler = this.searchDishHandler.bind(this);
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
    if (newProps.restaurantMenu && newProps.restaurantsOrder) {
      let groups = newProps.restaurantMenu.groups;
      let dishes = newProps.restaurantMenu.dishes;
      let categories = newProps.restaurantMenu.categories;

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
  searchDishHandler(inputValue) {
    let dishes = this.props.restaurantMenu.dishes;

    let onSelectedCategoryDishes = dishes.filter(ie =>
      ie.categoryIds.includes(this.state.selectedCategory),
    );

    const filteredSearchedDishes = onSelectedCategoryDishes.filter(ie =>
      ie.name.startsWith(inputValue),
    );

    this.setState({
      searchDishName: inputValue,
      currentDishes: filteredSearchedDishes,
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
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
    let dishes = this.props.restaurantMenu.dishes;
    let categories = this.props.restaurantMenu.categories;

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
    let dishes = this.props.restaurantMenu.dishes;

    let filteredDishes = dishes.filter(ie =>
      ie.categoryIds.includes(categoryId),
    );

    this.setState({
      selectedCategory: categoryId,
      currentDishes: filteredDishes,
    });
  }

  componentDidMount() {
    this.setState({isLoading: true});
    setTimeout(() => {}, 1000);
    try {
      this.props.getRestaurantsOrder();
      this.props.getrestaurantMenu();
    } catch (e) {
      this.setState({isLoading: false});
      this.setState({isError: true});
    }
    this.setState({isLoading: false});
  }
  render() {
   
    if (
      this.props.restaurantMenu &&
      this.props.restaurantsOrder &&
      this.state.isLoading == false
    ) {
      let scalars = this.props.restaurantsOrder.scalars;
      let groups = this.props.restaurantMenu.groups;

      if (this.state.fetchedData && groups && this.state.isLoading == false) {
        return (
          <View style={styles.fullScreen}>
            <View style={{flex: 19, backgroundColor: 'white'}}>
              <Header floor={1} currentTime={this.state.currentTime}>
                <SearchBar
                  searchDishHandler={this.searchDishHandler}
                  searchDishName={this.state.searchDishName}
                />
              </Header>
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
                <SectionSeparator />
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
export default (FloorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Floor));
// export default Floor;
const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  separatorMenuOrder: {},
});
