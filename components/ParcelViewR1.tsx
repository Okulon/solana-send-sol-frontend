import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


export const ParcelViewR1: FC = () => {
    const [parcelData, setParcelData] = useState([
        [1, "0xblabla",99,1.69,"chart", 42.69, 62],
        [2, "0xbleble",98,1.69,"chart", 42.69, 14],
        [3, "0xblublu",97,1.69,"chart", 42.69, 13],
        [4, "0xblublu",97,1.69,"chart", 42.69, 12],
        [5, "0xblublu",97,1.69,"chart", 42.69, 12],
                                                ])
    return (
        <div className={styles.mainAreaRight1}>
            <div style={{fontWeight: "bold"}}>Stake parcel</div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <div style= {{width: "3vw", height: "2vh", fontSize: "2vh", color: "grey"}}>ID</div>
                    <div style= {{width: "9vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Steward</div>
                    <div style= {{width: "4vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Rating</div>
                    <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey"}}>M/M change</div>
                    <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Chart (y)</div>
                    <div style= {{width: "10vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Cash Flows COT (m)</div>
                    <div style= {{width: "10vw", height: "2vh", fontSize: "2vh", color: "grey"}}>Cash Flows USD (m)</div>
                    <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey"}}>More</div>
                </div>
                <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "2vh"}}>
                    {
                    parcelData.map(parcel =>  {
                        return (        
                            <div style={{display: "flex", flexDirection: "row", textAlign: "center", marginBottom: "4vh"}}>
                                <div style= {{width: "3vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[0]}</div>
                                <div style={{width: "9vw", height: "2vh", display: "flex", flexDirection: "row"}}>

                                <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{String(parcel[1]).slice(0,4)}...{String(parcel[1]).slice(String(parcel[1]).length-4)}</div>
                                </div>
                                <div style= {{width: "4vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[2]}%</div>
                                <div style= {{width: "7vw", height: "2vh", fontSize: "2vh", color: "grey", fontWeight: "bold"}}>{parcel[3]}%</div>

                            </div>       
                        )
                        
                        })
                        
                    }
                </div>
                
            </div>
        </div>
    )
}