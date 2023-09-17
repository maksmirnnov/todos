import { FC } from 'react'
import styles from './Button.module.css'

interface IButton {
    children: string
    severity?: 'DONE' | 'ERROR'
}

export const Button: FC<IButton> = (props) => <button className={styles.btn} {...props}>{props.children}</button>
