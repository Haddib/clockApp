import React, {useEffect, useState} from 'react';
import * as styles from './numberContainer.module.css';
import Clock from './../../components/clock/clock';
import setRows from './../../store/numberFunctions';

const NumberContainer = props => {

    const [digit, setDigit] = useState(null);
    const [positions, setPositions] = useState({
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
    });

    useEffect(() => {
        if(digit !== props.digit){
            setDigit(props.digit);
            const tempState = setRows(props.digit);
            setPositions({...tempState});
        }
        console.log(digit);
    },[props.digit, digit]);

    return (
        <div className={styles.NumberContainer}>
            <div className={styles.FourClockRow}>
                <Clock position={positions.TopRow.first}/>
                <Clock position={positions.TopRow.second}/>
                <Clock position={positions.TopRow.third}/>
                <Clock position={positions.TopRow.fourth}/>
            </div>
            <div className={styles.FourClockRow}>
                <Clock position={positions.SecondRow.first}/>
                <Clock position={positions.SecondRow.second}/>
                <Clock position={positions.SecondRow.third}/>
                <Clock position={positions.SecondRow.fourth}/>
            </div>
            <div className={styles.FourClockRow}>
                <Clock position={positions.ThirdRow.first}/>
                <Clock position={positions.ThirdRow.second}/>
                <Clock position={positions.ThirdRow.third}/>
                <Clock position={positions.ThirdRow.fourth}/>
            </div>
            <div className={styles.FourClockRow}>
                <Clock position={positions.FourtRow.first}/>
                <Clock position={positions.FourtRow.second}/>
                <Clock position={positions.FourtRow.third}/>
                <Clock position={positions.FourtRow.fourth}/>
            </div>
            <div className={styles.FourClockRow}>
                <Clock position={positions.FifthRow.first}/>
                <Clock position={positions.FifthRow.second}/>
                <Clock position={positions.FifthRow.third}/>
                <Clock position={positions.FifthRow.fourth}/>
            </div>
            <div className={styles.FourClockRow}>
                <Clock position={positions.BottomRow.first}/>
                <Clock position={positions.BottomRow.second}/>
                <Clock position={positions.BottomRow.third}/>
                <Clock position={positions.BottomRow.fourth}/>
            </div>
        </div>
    );
}

export default NumberContainer;