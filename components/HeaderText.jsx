import React from 'react'
import styles from '@/app/page.module.css'

const HeaderText = () => {
  return (
    <div>

    <h2 className={styles.headText}>Welcome to <span className={styles.textLogo}>Tran</span></h2>
    <h1 className={styles.headTextb}>Transfrom your daily working uints<br /> here and More...</h1>

    </div>
  )
}

export default HeaderText