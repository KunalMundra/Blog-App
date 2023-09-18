import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./navbar.module.css"
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />

      </div>
      <Link className={styles.logo} href='/'>𝚁𝚘𝚊𝚖 & 𝙲𝚘𝚍𝚎</Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/' className={styles.link}>Contact</Link>
        <Link href='/' className={styles.link}>About</Link>
        <AuthLinks />
      </div>

    </div>
  )
}

export default Navbar