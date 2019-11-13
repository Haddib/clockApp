import React from 'react';
import * as styles from './colonContainer.module.css';
import Clock from './../../components/clock/clock';
import * as actions from './../../store/actionTypes';

const colonContainer = () => {
    return (
        <div className={styles.ColonContainer}>
            <div className={styles.TwoClockRow}>
                <Clock/>
                <Clock/>
            </div>
            <div className={styles.TwoClockRow}>
                <Clock position={actions.NW_CORNER}/>
                <Clock position={actions.NE_CORNER}/>
            </div>
            <div className={styles.TwoClockRow}>
                <Clock position={actions.SW_CORNER}/>
                <Clock position={actions.SE_CORNER}/>
            </div>
            <div className={styles.TwoClockRow}>
                <Clock position={actions.NW_CORNER}/>
                <Clock position={actions.NE_CORNER}/>
            </div>
            <div className={styles.TwoClockRow}>
                <Clock position={actions.SW_CORNER}/>
                <Clock position={actions.SE_CORNER}/>
            </div>
            <div className={styles.TwoClockRow}>
                <Clock/>
                <Clock/>
            </div>
        </div>
    )
}

export default colonContainer;