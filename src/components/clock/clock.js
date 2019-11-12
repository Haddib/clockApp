/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react';
import * as styles from './clock.module.css';

class Clock extends Component {

    state = {
        hours: 0,
        minutes: 0,
        hoursDeg: 0,
        minutesDeg: 0
    }

    componentWillMount(){
        const date = new Date();
        this.setState({
            hours: date.getHours()%12,
            minutes: date.getMinutes(),
            hoursDeg: (date.getHours()%12)*30,
            minutesDeg: date.getMinutes()*6
        });
    }

    componentDidMount() {
        setInterval(() => {
            if(!this.props.minutes && !this.props.hours){
                const date = new Date();
                let tempState = {...this.state};
                if(tempState.hours !== date.getHours()%12){
                   tempState.hours = date.getHours()%12;
                   tempState.hoursDeg += 30;
                }
                if(tempState.minutes !== date.getMinutes()){
                    tempState.minutes = date.getMinutes();
                    tempState.minutesDeg += 6;
                 }
                this.setState({...tempState});
            }
            else{
                //TODO custom position
            }
        },1000);
    }

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