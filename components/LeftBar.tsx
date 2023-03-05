import { FC } from 'react'
import styles from '../styles/Home.module.css'
import IconButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



export const LeftBar: FC = () => {
    return (
        <div className={styles.LeftBar}>
            <Button variant="outlined">+</Button>

            <Button style={{marginTop: "2vh"}} variant="outlined">+</Button>
            {/* <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize='large'/>
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize='large' />
            </IconButton> */}
        </div>
    )
}