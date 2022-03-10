import moment from 'moment';
class Chronometer {
  constructor() {
    if (Chronometer.instance == null) {
      Chronometer.instance = this;
    }
    return Chronometer.instance;
  }
  displayTime() {
    let newDate = new Date();
    let currentTime = newDate.toString();
    let weekDay=newDate.toLocaleString("default", { weekday: "long" })
    let dateTime = currentTime.split(' ').slice(0, 4);
    dateTime =weekDay+', '+ dateTime.slice(1, 2) + ' ' + dateTime.slice(2, 5).join(', ');

    let hourTime = currentTime
      .split(' ')
      .slice(4, 5)[0]
      .split(':');

    let currentDate = (hourTime.slice(0, 2).join(':') + '\b' + dateTime).split(
      '\b',
    );
    return currentDate;
  }
  getCurrentTimeline(chartType) {
    switch (chartType) {
      case 'DayChart':
        return [...Array(8).keys()]
          .map(ie =>
            moment()
              .subtract('days', ie)
              .format('MMM DD,YYYY'),
          )
          .reverse();
      case 'WeekChart':
        return [...Array(5).keys()]
          .map(ie =>
            moment()
              .subtract('weeks', ie)
              .format('MMM DD,YYYY'),
          )
          .reverse();
      case 'MonthChart':
        return [...Array(7).keys()]
          .map(ie =>
            moment()
              .subtract('months', ie)
              .format('MMM DD,YYYY'),
          )
          .reverse();
      case 'HourChart':
        return [...Array(7).keys()]
          .map(ie =>
            moment()
              .subtract('hours', ie)
              .format('HH DD'),
          )
          .reverse();
    }
  }
  shouldChangeTime() {
    let currentTime = new Date().toString();
    let hourTime = currentTime
      .split(' ')
      .slice(4, 5)[0]
      .split(':');
    if (hourTime[2] == '00') return true;
    else return false;
  }
  getC;
}
const chronometer = new Chronometer();
export default chronometer;
