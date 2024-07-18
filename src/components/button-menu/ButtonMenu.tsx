import React from 'react'
import styles from './button-menu.module.css'

interface Props {
  isOpen: boolean,
  handleChange: () => void
}

export const ButtonMenu = ({isOpen, handleChange}: Props) => {
  return (
    <input type="checkbox" role="button" aria-label="Display the menu" className={styles.menu} checked={isOpen} onChange={handleChange}/>
  )
}
