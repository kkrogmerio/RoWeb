import moment from 'moment'
class Chronometer{
    constructor(){
        if(Chronometer.instance==null){
            Chronometer.instance=this
        }
        return Chronometer.instance;
    }
    displayTime() {
        let currentTime = new Date().toString();
        console.log(currentTime);
        let dateTime = currentTime.split(' ').slice(0, 4);
        dateTime =
          dateTime.slice(0, 2).join(',') + ' ' + dateTime.slice(2, 5).join(',');
        console.log(dateTime);
        let hourTime = currentTime
          .split(' ')
          .slice(4, 5)[0]
          .split(':');
    
        let currentDate = (hourTime.slice(0, 2).join(':') + '\b' + dateTime).split(
          '\b',
        );
       return currentDate;
     
      }
      getCurrentWeekTimeline() {
        return [...Array(7).keys()].map(ie=>moment().subtract('days', ie).format('MMM DD'))
        
      }
    shouldChangeTime(){
      let currentTime = new Date().toString();
      let hourTime = currentTime
        .split(' ')
        .slice(4, 5)[0]
        .split(':');
      if (hourTime[2] == '00') return true;
      else return false;
    }
    getC
}
const chronometer=new Chronometer();
export default chronometer;