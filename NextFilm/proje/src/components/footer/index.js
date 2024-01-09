import React from 'react'
import Link from "next/link";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with 🧡 by&nbsp;
      <Link href="https://www.instagram.com/web_girll20/" target="_blank">
        Gülsüm AKYEL
      </Link>
    </footer>
  )
}

export default Footer