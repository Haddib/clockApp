import React from 'react'
import Clock from '../../components/clock/clock';
import * as styles from './verticalClockBar.module.css';

const verticalClockBar = () => {
    
    return(
        <div>
            <div className={styles.ClockLine}>
                <Clock/><Clock/><Clock/><Clock/><Clock/><Clock/>
                <Clock/><Clock/><Clock/><Clock/><Clock/><Clock/>
                <Clock/><Clock/><Clock/><Clock/><Clock/><Clock/>
                <Clock/><Clock/><Clock/><Clock/><Clock/><Clock/>
            </div>
            <div className={styles.ClockLine}>
                <Clock/><Clock/><Clock/><Clock/><Clock/><Clock/>
                <Clock/><Clock/><Clock/><Clock/><Clock/><Clock/>
                <Clock/><Clock/><Clock/><Clock/><Clock/><Clock/>
                <Clock/><Clock/><Clock/><Clock/><Clock/><Clock/>
            </div> 
        </div>
    );
}

export default verticalClockBar;