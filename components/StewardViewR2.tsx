import { FC } from 'react'
import styles from '../styles/Home.module.css'


export const StewardViewR2: FC = () => {
    return (
        <div className={styles.mainAreaRight2}>
            <div style={{fontWeight: "bold"}}>Claim rewards</div>
            <div style={{width: "25vw", height: "28vh", backgroundColor: "red", marginTop: "1vh", borderRadius: "2vh"}}></div>
        </div>
    )
}