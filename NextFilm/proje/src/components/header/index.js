import Link from 'next/link';
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo} >
          <FaPlayCircle/>NETFILMS
        </Link>
        <nav className={styles.navigationMenu} >
          <Link className={styles.navigationMenu} href="/" >Movies</Link>
          <Link className={styles.navigationMenu} href="/" >Series</Link>
          <Link className={styles.navigationMenu} href="/" >Kids</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

