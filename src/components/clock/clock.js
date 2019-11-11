/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react';
import * as styles from './clock.module.css';

class clock extends Component {

    state = {
        hours: 0,
        minutes: 0
    }

    componentWillMount(){
        const date = new Date();
        this.setState({
            hours: date.getHours(),
            minutes: date.getMinutes()
        });
    }

    componentDidMount() {
        console.log('clock did mount');
        setInterval(() => {
            console.log('clock did mount time');
            if(!this.props.minutes && !this.props.hours){
                const date = new Date();
                this.setState({
                    hours: date.getHours(),
                    minutes: date.getMinutes()
                });
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
            <div className={hourClass} style={{transform: 'rotateZ(' + this.state.hours * 30 + 'deg)'}}>
                <div className={styles.HourHand}></div>
            </div>
            <div className={minuteClass} style={{transform: 'rotateZ(' + this.state.minutes * 6 + 'deg)'}}>
                <div className={styles.MinuteHand}></div>
            </div>
        </div>
        );
    }
}

export default clock;