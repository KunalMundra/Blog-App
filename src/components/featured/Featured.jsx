import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Kunal here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Islands In Italy: Experiencing The Beauty of The Coasts And Beaches</h2>
          <p className={styles.postDesc}>
            Italy has more than 400 islands sprinkled through the waters just off its coast.
            Some are tiny, seagull-inhabited rocky outcrops and some—like Sicily and Venice—sat
            at the crossroads of Mediterranean culture and commerce for much of history.
            Most Italian islands, however, lie somewhere between these two extremes. Home to picturesque
            fishing villages, pristine coastlines, and crystal-clear waters, these underrated gems
            have been largely untouched by modern development and offer a calmer way to experience La Bella Italia.
          </p>
          <Link href="http://localhost:3000/posts/island">
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured