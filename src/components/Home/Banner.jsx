import React from 'react'
import styles from "./Banner.module.css"
export default function Banner() {
  return (
    <div className={styles.ban_Container}>
        <div className={styles.firstHalf}></div>
        <div className={styles.secondHalf}></div>
    </div>
  )
}
