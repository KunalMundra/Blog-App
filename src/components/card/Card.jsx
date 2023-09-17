import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({key, item}) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>09.09.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h2>{item.title}</h2>
                </Link>
                <p className={styles.desc}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book....
                </p>
                <Link href="/" className={styles.link}>Read More.</Link>
            </div>
        </div>
    )
}

export default Card