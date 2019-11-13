import React from 'react'
import Clock from '../../components/clock/clock';
import * as styles from './horizontalClockBlock.module.css';

const horizontalClockBlock = () => {
    
    return(
        <div>
            <div className={styles.ClockLine}>
                <Clock/><Clock/><Clock/>
            </div>
            <div className={styles.ClockLine}>
                <Clock/><Clock/><Clock/>
            </div> 
            <div className={styles.ClockLine}>
                <Clock/><Clock/><Clock/>
            </div> 
            <div className={styles.ClockLine}>
                <Clock/><Clock/><Clock/>
            </div> 
            <div className={styles.ClockLine}>
                <Clock/><Clock/><Clock/>
            </div> 
            <div className={styles.ClockLine}>
                <Clock/><Clock/><Clock/>
            </div> 
        </div>
    );
}

export default horizontalClockBlock;