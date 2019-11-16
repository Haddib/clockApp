import React, {useState, useEffect} from 'react';
import VerticalClockBar from './containers/verticalClockBar/verticalClockBar';
import NumberContainer from './containers/numberContainer/numberContainer';
import HorizontalClockBlock from './containers/horizontaClockBlock/horizontalClockBlock';
import ColonContainer from './containers/numberContainer/colonContainer';
import * as styles from './App.module.css';

const App = () => {
  
  const [numbers, setNumbers] = useState({
    hours: null,
    hours2: null,
    minutes: null,
    minutes2: null
  });

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      const newState = {
        hours: Math.floor(date.getHours()/10),
        hours2: date.getHours()%10,
        minutes: Math.floor(date.getMinutes()/10),
        minutes2: date.getMinutes()%10
      }
      if(numbers !== newState){
        setNumbers({...newState});
      }
    },1000)
  },[numbers]);

  return (
    <div className={styles.App}>
      <VerticalClockBar />
      <div className={styles.ClockBlock}>
        <HorizontalClockBlock />
        <NumberContainer digit={numbers.hours}/>
        <NumberContainer digit={numbers.hours2}/>
        <ColonContainer/>
        <NumberContainer digit={numbers.minutes}/>
        <NumberContainer digit={numbers.minutes2}/>
        <HorizontalClockBlock />
      </div>
      <VerticalClockBar/>     
    </div>
  );
}

export default App;
