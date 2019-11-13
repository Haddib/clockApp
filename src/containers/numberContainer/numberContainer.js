import React, {Component} from 'react';
import * as styles from './numberContainer.module.css';
import Clock from './../../components/clock/clock';
import setRows from './../../store/numberFunctions';

class NumberContainer extends Component {

    state = {
        TopRow: {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        }, 
        SecondRow: {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        },
        ThirdRow: {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        },
        FourtRow: {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        },
        FifthRow: {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        },
        BottomRow: {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        }
    }

    componentDidMount(){
        setInterval(() => {
            let date = new Date();
            let number = null;
            switch (this.props.digit) {
                case '1': number = Math.floor(date.getHours()/10); 
                    break;
                case '2': number = date.getHours()%10; 
                    break;
                case '3': number = Math.floor(date.getMinutes()/10); 
                    break;
                case '4': number = date.getMinutes()%10; 
                    break;    
                default:
                    break;
            }
            const tempState = setRows(number);
            this.setState({...tempState});
        },1000)
    }

    render(){
        return (
            <div className={styles.NumberContainer}>
                <div className={styles.FourClockRow}>
                    <Clock position={this.state.TopRow.first}/>
                    <Clock position={this.state.TopRow.second}/>
                    <Clock position={this.state.TopRow.third}/>
                    <Clock position={this.state.TopRow.fourth}/>
                </div>
                <div className={styles.FourClockRow}>
                    <Clock position={this.state.SecondRow.first}/>
                    <Clock position={this.state.SecondRow.second}/>
                    <Clock position={this.state.SecondRow.third}/>
                    <Clock position={this.state.SecondRow.fourth}/>
                </div>
                <div className={styles.FourClockRow}>
                    <Clock position={this.state.ThirdRow.first}/>
                    <Clock position={this.state.ThirdRow.second}/>
                    <Clock position={this.state.ThirdRow.third}/>
                    <Clock position={this.state.ThirdRow.fourth}/>
                </div>
                <div className={styles.FourClockRow}>
                    <Clock position={this.state.FourtRow.first}/>
                    <Clock position={this.state.FourtRow.second}/>
                    <Clock position={this.state.FourtRow.third}/>
                    <Clock position={this.state.FourtRow.fourth}/>
                </div>
                <div className={styles.FourClockRow}>
                    <Clock position={this.state.FifthRow.first}/>
                    <Clock position={this.state.FifthRow.second}/>
                    <Clock position={this.state.FifthRow.third}/>
                    <Clock position={this.state.FifthRow.fourth}/>
                </div>
                <div className={styles.FourClockRow}>
                    <Clock position={this.state.BottomRow.first}/>
                    <Clock position={this.state.BottomRow.second}/>
                    <Clock position={this.state.BottomRow.third}/>
                    <Clock position={this.state.BottomRow.fourth}/>
                </div>
            </div>
        );
    }
}

export default NumberContainer;