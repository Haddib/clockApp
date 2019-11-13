import React, {Component} from 'react';
import VerticalClockBar from './containers/verticalClockBar/verticalClockBar';
import NumberContainer from './containers/numberContainer/numberContainer';
import HorizontalClockBlock from './containers/horizontaClockBlock/horizontalClockBlock';
import ColonContainer from './containers/numberContainer/colonContainer';
import * as styles from './App.module.css';

class App extends Component {
  
  render(){
    return (
      <div className={styles.App}>
        <VerticalClockBar />
        <div className={styles.ClockBlock}>
          <HorizontalClockBlock />
          <NumberContainer digit='1'/>
          <NumberContainer digit='2'/>
          <ColonContainer/>
          <NumberContainer digit='3'/>
          <NumberContainer digit='4'/>
          <HorizontalClockBlock />
        </div>
        <VerticalClockBar/>     
      </div>
    );
  }
}

export default App;
