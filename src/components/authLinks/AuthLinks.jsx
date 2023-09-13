"use client"

import React, { useState } from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
  const { status } = useSession();

  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "unauthenticated" ? (<Link href="/login" className={styles.link}>Login</Link>)
        :
        (<>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>)}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={() => signIn("google")}>Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <Link href="/" onClick={signOut}>Logout</Link>
            </>)}
        </div>
      )}
    </>
  )
}

export default AuthLinks