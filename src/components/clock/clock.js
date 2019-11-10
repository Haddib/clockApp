/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import * as styles from './clock.module.css';

const clock = props => {

    const [clockHour, setClockHour] =  useState(props.hour);
    const [clockMin, setClockMin] = useState(props.minutes);

    useEffect(() =>{
        setClockHour(props.hour);
        setClockMin(props.minutes);
    },[props.hour, props.minutes]);

    return(
        <div className={styles.ClockFace}>
            <div className={styles.HourHandContainer} style={{transform: 'rotateZ(' + clockHour*30 + 'deg)'}}>
                <div className={styles.HourHand}></div>
            </div>
            <div className={styles.MinuteHandContainer} style={{transform: 'rotateZ(' + clockMin*6 + 'deg)'}}>
                <div className={styles.MinuteHand}></div>
            </div>
        </div>
    );
}

export default clock;