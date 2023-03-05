import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { OverviewArea } from './OverviewArea'
import { OverviewAreaR1 } from './OverviewAreaR1'
import { OverviewAreaR2 } from './OverviewAreaR2'
import { useState } from 'react'
import { StewardView } from './StewardView'
import { StewardViewR1 } from './StewardViewR1'
import { StewardViewR2 } from './StewardViewR2'
import { ParcelViewR1 } from './ParcelViewR1'
import { ParcelView } from './ParcelView'

export const MainArea: FC = () => {
    const [view, setView] = useState("parcel");
    const renderMainView = () => {
        if (view == "main") {
          return <OverviewArea></OverviewArea>;
        } else if (view == "steward") {
          return <StewardView></StewardView>
        } else if (view == "parcel") {
            return <ParcelView></ParcelView>
        }
    }
    const renderR1 = () => {
        if (view == "main") {
            return <OverviewAreaR1></OverviewAreaR1>
        } else if (view == "steward") {
            return <StewardViewR1></StewardViewR1>
        } else if (view == "parcel"){
            return <ParcelViewR1></ParcelViewR1>
        }
    }
    const renderR2 = () => {
        if (view == "main") {
            return <OverviewAreaR2></OverviewAreaR2>
        } else if (view == "steward") {
            return <StewardViewR2></StewardViewR2>
        } else if (view == "parcel"){
            return;
        }
    }
    return (
            <div className={styles.mainArea}>
                {renderMainView()}
                <div className={styles.mainAreaSeparatorHorizontal}> </div>
                <div className={styles.mainAreaRight}> 
                    {renderR1()}
                    <div className={styles.mainAreaSeparatorVertical}> </div>
                    {renderR2()}
                </div>
            </div>
    )
}