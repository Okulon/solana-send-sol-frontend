import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';

export const ParcelView: FC = () => {
    const [parcelID, setP] = useState(0);
    const [parcels, setParcels] = useState(0);
    const [parcelData, setParcelData] = useState(
        [1, "0xblabla",99,1.69,"chart", 42.69, 62]
                                                )


    return (
        <div className={styles.mainAreaLeft}>
            <div style={{display: "flex", flexDirection: "row", marginTop: "5vh",marginBottom: "5vh"}}>
                <div style={{fontWeight: "bold"}}>Parcel ID {parcelData[0]}</div>
                <div style={{width: "30vw"}}> </div>
                <Button style={{marginRight: "1vw"}} variant="outlined">+ Make offer</Button>
                <Button variant="outlined">- Report inactive steward</Button>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{width: "15vw", height: "20vh", backgroundColor: "green"}}></div>
                
                <div className='infoBoxes0' style={{display: "flex", flexDirection: "column", marginBottom: "6vh", width: "13vw", height: "20vh", borderRadius: "3vh", marginLeft: "3vw", backgroundColor: "cyan"}}>
                    <div style={{fontWeight: "bold", marginLeft: "1vw"}}>Market data</div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Owner</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Last price</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Rating</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Rating</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Tree cover</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Production</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                    </div>

                </div>

                <div className='infoBoxes' style={{display: "flex", flexDirection: "column", marginBottom: "6vh",  marginLeft: "3vw", width: "13vw", height: "20vh", borderRadius: "3vh", backgroundColor: "cyan"}}>
                    <div style={{fontWeight: "bold", marginLeft: "1vw"}}>Parcel totals</div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Parcels owned</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Total value</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Average rating</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Rating</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1vh"}}>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw", width: "6vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Tree cover</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "1vw"}}>
                                <div style={{fontSize: "15px", color: "grey"}}>Total size</div>
                                <div style={{fontSize: "15px", fontWeight: "bold"}}>{parcels}</div>
                        </div>
                    </div>

                </div>
            </div>

            <div style={{display: "flex", flexDirection: "row"}}> 
                <div style={{display: "flex", flexDirection: "column", width: "36vw", height: "44vh",  backgroundColor: "red"}}> 

                </div>
                <div style={{display: "flex", flexDirection: "column", width: "16vw", height: "44vh", marginLeft: "4vw", backgroundColor: "red"}}> 

                </div>
            </div>

        </div>

    )
}