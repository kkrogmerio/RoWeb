export const trafficChartDumy = {
  HourChart: [22, 36, 41, 31, 39, 44, 33],
  DayChart: [22, 36, 20, 35, 40, 60, 80, 99],
  WeekChart: [22, 22, 33, 11, 32],
  MonthChart: [14, 14, 21, 30, 42, 27, 18],
};
export const loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, nisl vel sollicitudin ultricies, est purus dictum orci, nec pretium ipsum ex eu lorem. "
export const getDishesDummyData =()=> [
  {'Dish': 'Veg Wrap', 'Price': 30.0, 'Orders per day': 32,'menuImage':require('../assets/icons/menuItem.jpeg')},
  {'Dish': 'Mega Sandwitch', 'Price': 25.75, 'Orders per day': 27,'menuImage':require('../assets/icons/menuItem.jpeg')},
  {'Dish': 'Coco Mocktail', 'Price': 15.0, 'Orders per day': 25,'menuImage':require('../assets/icons/menuItem.jpeg')},
  {
    'Dish': 'Lemon Pie',
    'Price': 35.5,
    'Orders per day': 19,'menuImage':require('../assets/icons/menuItem.jpeg')
  }, {
    'Dish': 'Lemon Pie',
    'Price': 35.5,
    'Orders per day': 19,'menuImage':require('../assets/icons/menuItem.jpeg')
  }, {
    'Dish': 'Lemon Pie',
    'Price': 35.5,
    'Orders per day': 19,'menuImage':require('../assets/icons/menuItem.jpeg')
  }
];
export const getWaitersDummyData = () => [
  {
    profilePic: require('../assets/icons/user2.png'),
    name: 'Person 1',
    performance: 42,
  },
  {
    profilePic: require('../assets/icons/user2.png'),
    name: 'Person 2',
    performance: 32,
  },
  {
    profilePic: require('../assets/icons/user2.png'),
    name: 'Person 3',
    performance: 67,
  },
];
export const bezierChartType = {
  HourChart: {
    xAxisCount: 6,
    calibrateChartFormula: x => x * 83,
  },
  DayChart: {
    xAxisCount: 7,
    calibrateChartFormula: x => x * 70,
  },
  WeekChart: {xAxisCount: 4, calibrateChartFormula: x => x * 120},
  MonthChart: {
    xAxisCount: 6,
    calibrateChartFormula: x => x * 83,
  },
};
export const barChartType = {
  HourChart: {
    calibrateChartFormula: x => (x - 1) * 75,
  },
  DayChart: {
    calibrateChartFormula: x => (x - 1) * 70,
  },
  WeekChart: {
    calibrateChartFormula: x => (x - 1) * 108 + 20,
  },
  MonthChart: {
    calibrateChartFormula: x => (x - 1) * 75 + 18,
  },
};
export function getCurrentTimelineChartDummyData(timeline) {
  return trafficChartDumy[timeline];
}
export function bezierChartConfig() {
  return {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,

    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
}
