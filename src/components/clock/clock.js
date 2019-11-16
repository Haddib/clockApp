/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import * as styles from './clock.module.css';
import * as actions from './../../store/actionTypes';

const Clock = props => {

    const [clockState, setClockState] = useState({
        pos: null,
        hours: 0,
        minutes: 0,
        hoursDeg: 0,
        minutesDeg: 0
    });

    useEffect(() => {
        setTimeout(() => {
            let tempState = {...clockState};

            const date = new Date();
        
            switch (props.position) {
                case actions.HORIZONTAL_LINE:
                    setClockState({
                        ...tempState,
                        pos: props.position,
                        hoursDeg: 270,
                        minutesDeg: 90
                    });
                    break;

                case actions.VERTICAL_LINE:
                    setClockState({
                        ...tempState,
                        pos: props.position,
                        hoursDeg: 180,
                        minutesDeg: 0
                    });
                    break;
                
                case actions.NW_CORNER:
                    setClockState({
                        ...tempState,
                        pos: props.position,
                        hoursDeg: 180,
                        minutesDeg: 90
                    });
                    break;

                case actions.NE_CORNER:
                    setClockState({
                        ...tempState,
                        pos: props.position,
                        hoursDeg: 270,
                        minutesDeg: 180
                    });
                    break;

                case actions.SW_CORNER:
                    setClockState({
                        ...tempState,
                        pos: props.position,
                        hoursDeg: 90,
                        minutesDeg: 0
                    });
                    break;

                case actions.SE_CORNER:
                    setClockState({
                        ...tempState,
                        pos: props.position,
                        hoursDeg: 0,
                        minutesDeg: 270
                    });
                    break;

                default:

                    if(clockState.pos === actions.DEF){
                        if(tempState.hours !== date.getHours()%12){
                           tempState.hours = date.getHours()%12;
                           tempState.hoursDeg += 30;
                        }
                        if(tempState.minutes !== date.getMinutes()){
                            tempState.minutes = date.getMinutes();
                            tempState.minutesDeg += 6;
                         }
                        setClockState({
                            ...tempState
                        });
                    }    
                    else{
                        setClockState({
                            pos: actions.DEF,
                            hours: date.getHours()%12,
                            minutes: date.getMinutes(),
                            hoursDeg: (date.getHours()%12)*30,
                            minutesDeg: date.getMinutes()*6
                        });
                    }
                    break;
            }
        },1000);
    },[clockState, props.position]);

    const hourClass = !props.normalClock ? styles.NormalHourHandContainer : styles.HourHandContainer;
    const minuteClass = !props.normalClock ? styles.NormalMinuteHandContainer : styles.MinuteHandContainer;

    return(
        <div className={styles.ClockFace}>
        <div className={hourClass} style={{transform: 'rotateZ(' + clockState.hoursDeg + 'deg)'}}>
            <div className={styles.HourHand}></div>
        </div>
        <div className={minuteClass} style={{transform: 'rotateZ(' + clockState.minutesDeg + 'deg)'}}>
            <div className={styles.MinuteHand}></div>
        </div>
    </div>
    );
    
}

export default Clock;