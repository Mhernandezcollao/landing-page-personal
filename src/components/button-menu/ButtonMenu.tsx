import React from 'react'
import styles from './button-menu.module.css'

export const ButtonMenu = () => {
  return (
    <input type="checkbox" role="button" aria-label="Display the menu" className={styles.menu}/>
  )
}
