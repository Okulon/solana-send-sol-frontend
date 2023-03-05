import { FC } from 'react'
import styles from '../styles/Home.module.css'


export const StewardViewR1: FC = () => {
    return (
        <div className={styles.mainAreaRight1}>
            <div style={{fontWeight: "bold"}}>Stake parcel</div>
            <div style={{width: "25vw", height: "38vh", backgroundColor: "yellow", marginTop: "1vh", borderRadius: "2vh"}}></div>
        </div>
    )
}