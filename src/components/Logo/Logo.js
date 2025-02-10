import React from 'react'

import logo from './Logo.png'
import styles from './index.module.scss'

const Logo = () => {
  return (
    <div className={styles.logoG}>
      <img src={logo} alt="logo" />
    </div>
  )
}
export default Logo
