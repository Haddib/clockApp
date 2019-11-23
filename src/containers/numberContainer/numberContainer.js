import React, {Component} from 'react';
import * as styles from './numberContainer.module.css';
import Clock from './../../components/clock/clock';
import setRows from './../../store/numberFunctions';

class NumberContainer extends Component {

    state = {
        number: null,
        TopRow: {
            first: null,
            second: null,
            third: null,
            fourth: null
        }, 
        SecondRow: {
            first: null,
            second: null,
            third: null,
            fourth: null
        },
        ThirdRow: {
            first: null,
            second: null,
            third: null,
            fourth: null
        },
        FourtRow: {
            first: null,
            second: null,
            third: null,
            fourth: null
        },
        FifthRow: {
            first: null,
            second: null,
            third: null,
            fourth: null
        },
        BottomRow: {
            first: null,
            second: null,
            third: null,
            fourth: null
        }
    };

    componentDidMount(){
        setInterval(() => {
            const date = new Date();
            let number = 0;
            
            switch (this.props.digit) {
                case '1':
                    number = Math.floor(date.getHours()/10);
                    break;

                case '2':
                    number = date.getHours()%10;
                    break;

                case '3':
                    number = Math.floor(date.getMinutes()/10);
                    break;

                case '4':
                    number = date.getMinutes()%10;
                    break;
            
                default:
                    break;
            }
        
            if(number !== this.state.number){
                const tempState = setRows(number);
                this.setState({...tempState, number: number});
            }
        },1000)
    };

    render(){

const setRow = row => {
    return (
        <div className={styles.FourClockRow}>
            <Clock position={row.first}/>
            <Clock position={row.second}/>
            <Clock position={row.third}/>
            <Clock position={row.fourth}/>
        </div>
    )
}

        return (
            <div className={styles.NumberContainer}>
                {setRow(this.state.TopRow)}
                {setRow(this.state.SecondRow)}
                {setRow(this.state.ThirdRow)}
                {setRow(this.state.FourtRow)}
                {setRow(this.state.FifthRow)}
                {setRow(this.state.BottomRow)}
            </div>
        );
    }
}

export default NumberContainer;