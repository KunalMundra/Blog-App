import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Kunal's Blog" width={40} height={40} />
          <h1 className={styles.logoText}>𝚁𝚘𝚊𝚖 & 𝙲𝚘𝚍𝚎</h1>
        </div>
        <p className={styles.desc}>
        A blog website for sharing travel adventures, culinary discoveries, 
        fashion insights, cultural explorations, and coding expertise. Dive into captivating travel 
        narratives, savor food tales, stay stylish, and delve into the world of tech with insightful 
        coding blogs. It's your portal to diverse and enriching experiences.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={`/blog?cat=style`}>Style</Link>
          <Link href={`/blog?cat=fashion`}>Fashion</Link>
          <Link href={`/blog?cat=coding`}>Coding</Link>
          <Link href={`/blog?cat=travel`}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;