/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react';
import * as styles from './clock.module.css';
import * as actions from './../../store/actionTypes';

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
            let tempState = {...this.state};

            if(!this.props.position){
                const date = new Date();
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
                switch (this.props.position) {
                    case actions.HORIZONTAL_LINE:
                        this.setState({
                            ...tempState,
                            hoursDeg: 270,
                            minutesDeg: 90
                        });
                        break;

                    case actions.VERTICAL_LINE:
                        this.setState({
                            ...tempState,
                            hoursDeg: 180,
                            minutesDeg: 0
                        });
                        break;
                
                    case actions.NW_CORNER:
                        this.setState({
                            ...tempState,
                            hoursDeg: 180,
                            minutesDeg: 90
                        });
                        break;

                    case actions.NE_CORNER:
                        this.setState({
                            ...tempState,
                            hoursDeg: 270,
                            minutesDeg: 180
                        });
                        break;

                    case actions.SW_CORNER:
                        this.setState({
                            ...tempState,
                            hoursDeg: 90,
                            minutesDeg: 0
                        });
                        break;

                    case actions.SE_CORNER:
                        this.setState({
                            ...tempState,
                            hoursDeg: 0,
                            minutesDeg: 270
                        });
                        break;

                    default:
                        const date = new Date();
                        this.setState({
                            hours: date.getHours()%12,
                            minutes: date.getMinutes(),
                            hoursDeg: (date.getHours()%12)*30,
                            minutesDeg: date.getMinutes()*6
                        });
                        break;
                }
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