import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import Button from '@mui/material/Button';

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <div style={{width: "6vw"}}>
                <Image src="/soliageLogoPlaceholder.png" height={"20vh"} width={"20vw"} />
            </div>
            <span>Soliage</span>
            <div className="filler" style={{width: "60vw", height: "2vh"}}>
            </div>
            <WalletMultiButton />
            <Button style={{marginLeft: "1vw"}} variant="outlined">+</Button>
            <Button style={{marginLeft: "1vw"}} variant="outlined">+</Button>
            <Button style={{marginLeft: "1vw"}} variant="outlined">+</Button>
        </div>
    )
}