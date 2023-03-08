import { FC } from 'react'
import styles from '../styles/Home.module.css'


export const StewardViewR1: FC = () => {
    return (
        <div className={styles.mainAreaRight1}>
            <div style={{fontWeight: "bold"}}>Stake parcel</div>
            <div style={{marginLeft: "1.75vw", marginTop: "2vh", display: 'flex', flexDirection: "row"}}>
                <div style={{width: "10vw", marginLeft: "6vw", textAlign: "center", backgroundColor: "white", color:"black", borderRadius: "3vh", borderColor: "grey", border: '2px solid black'}}>Unstake</div>
                <div style={{width: "10vw",marginLeft: "-18vw", textAlign: "center", backgroundColor: "black", color:"white", borderRadius: "3vh", borderColor: "grey"}}>Stake</div>
            </div>
            <div style={{width: "18vw", marginTop: "2vh", textAlign: "center", backgroundColor: "white", color:"black", borderRadius: "3vh", borderColor: "grey", border: '2px solid black'}}>SELECT PARCEL</div>
            
            <div style={{marginLeft: "1.75vw", marginTop: "2vh", display: 'flex', flexDirection: "row"}}>
                <div style={{width: "3vw", height: "5vh", backgroundColor: "red"}}> </div>
                <div style={{marginLeft: "1.75vw", marginTop: "1vh", display: 'flex', flexDirection: "column", alignItems: "center"}}>
                    <div style={{fontSize: 12}}>Estimated cash flow impact</div>
                    <div style={{fontSize: 12}}>+2494 COT per month</div>
                </div>
            </div>

            <div style={{marginTop: "2vh", width: "18vw", height: "6vh", fontSize: 20, marginLeft: "0vw", textAlign: "center", alignItems: "center", backgroundColor: "white", color:"black", borderRadius: "3vh", borderColor: "grey", border: '2px solid black'}}>Stake (content depends on selection)</div>


        </div>
    )
}