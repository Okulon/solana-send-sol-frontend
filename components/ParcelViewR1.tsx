import { FC } from 'react'
import styles from '../styles/Home.module.css'


export const ParcelViewR1: FC = () => {
    return (
        <div className={styles.mainAreaRight1}>
            <div>Buy Cot</div>
            <div style={{width: "25vw", height: "38vh", backgroundColor: "green", marginTop: "1vh", borderRadius: "2vh"}}></div>
        </div>
    )
}