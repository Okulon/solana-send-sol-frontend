import { FC } from 'react'
import styles from '../styles/Home.module.css'


export const ParcelViewR1: FC = () => {
    return (
        <div className={styles.mainAreaRight1Full}>
            <div style={{fontWeight: "bold"}}>History</div>
            <div style={{width: "25vw", height: "30vh", backgroundColor: "green", marginTop: "1vh", marginBottom: "10vh", borderRadius: "2vh"}}>

            </div>
            
            <div style={{fontWeight: "bold"}}>Price development</div>
            <div style={{width: "25vw", height: "32vh", backgroundColor: "green", marginTop: "1vh", borderRadius: "2vh"}}>

            </div>
        </div>
    )
}