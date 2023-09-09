import React from 'react'
import styles from "./menuPosts.module.css"
import Image from 'next/image'
import Link from 'next/link'

const MenuPosts = ({ withImage }) => {
    return (
        <div>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    {withImage && (<div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className={styles.postTitle}>Lorem Ipsum has been the standard dummy text ever.</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}> - 29.04.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && (<div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>Food</span>
                        <h3 className={styles.postTitle}>Lorem Ipsum has been the standard dummy text ever.</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}> - 29.04.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && (<div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                        <h3 className={styles.postTitle}>Lorem Ipsum has been the standard dummy text ever.</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}> - 29.04.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && (<div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                        <h3 className={styles.postTitle}>Lorem Ipsum has been the standard dummy text ever.</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}> - 29.04.2023</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MenuPosts