import React, { Component } from 'react';
import * as styles from './clock.module.css';
import * as actions from './../../store/actionTypes';

class Clock extends Component {

    state ={
        pos: null,
        hours: 0,
        minutes: 0,
        hoursDeg: 0,
        minutesDeg: 0
    };

    componentDidMount(){
        const date = new Date();

        const setPosition = (pos, hDeg, mDeg) => {
            const tempState = {...this.state};
            return {
                ...tempState,
                pos: pos,
                hours: date.getHours()%12,
                minutes: date.getMinutes(),
                hoursDeg: hDeg,
                minutesDeg: mDeg
            }
        }

        setInterval(() => {

            switch (this.props.position) {
                case actions.HORIZONTAL_LINE:
                    this.setState(setPosition(this.props.position, 270, 90));
                    break;

                case actions.VERTICAL_LINE:
                    this.setState(setPosition(this.props.position, 180, 0));
                    break;
                
                case actions.NW_CORNER:
                    this.setState(setPosition(this.props.position, 180, 90));
                    break;

                case actions.NE_CORNER:
                    this.setState(setPosition(this.props.position, 270, 180));
                    break;

                case actions.SW_CORNER:
                    this.setState(setPosition(this.props.position, 90, 0));
                    break;

                case actions.SE_CORNER:
                    this.setState(setPosition(this.props.position, 0, 270));
                    break;

                default:

                    if(this.state.pos === actions.DEF){
                        //breyta þessu, reyna að nota else aðferðina, fiffa eitthvað með clasana til að rotate fary ekki yfir 360
                        let tempState = {...this.state};
                        
                        if(tempState.hours !== date.getHours()%12){
                           tempState.hours = date.getHours()%12;
                           tempState.hoursDeg += 30;
                        }
                        if(tempState.minutes !== date.getMinutes()){
                            tempState.minutes = date.getMinutes();
                            tempState.minutesDeg += 6;
                         }
                         this.setState({
                            ...tempState
                        });
                    }    
                    else{
                        this.setState({
                            pos: actions.DEF,
                            hours: date.getHours()%12,
                            minutes: date.getMinutes(),
                            hoursDeg: (date.getHours()%12)*30,
                            minutesDeg: date.getMinutes()*6
                        });
                    }
                    break;
            }
        },1000)
    };

    render(){
        const hourClass = !this.props.normalClock ? styles.NormalHourHandContainer : styles.HourHandContainer;
        const minuteClass = !this.props.normalClock ? styles.NormalMinuteHandContainer : styles.MinuteHandContainer;
    
        return(
            <div className={styles.ClockFace}>
            <div className={hourClass} style={{transform: 'rotateZ(' + this.state.hoursDeg + 'deg)'}}>
                <div className={styles.HourHand}></div>
            </div>
            <div className={minuteClass} style={{transform: 'rotateZ(' + this.state.minutesDeg + 'deg)'}}>
                <div className={styles.MinuteHand}></div>
            </div>
        </div>
        );
    }
}

export default Clock;