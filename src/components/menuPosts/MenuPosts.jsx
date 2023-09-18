import React from 'react'
import styles from "./menuPosts.module.css"
import Image from 'next/image'
import Link from 'next/link'

const MenuPosts = ({ withImage }) => {
    return (
        <div>
            <div className={styles.items}>
                <Link href="http://localhost:3000/posts/tour-mehrangarh-fort" className={styles.item}>
                    {withImage && (<div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className={styles.postTitle}>Tour Mehrangarh Fort </h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>Kunal Mundra</span>
                            <span className={styles.date}> - 19.09.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="http://localhost:3000/posts/punjabi-cuisine" className={styles.item}>
                    {withImage && (<div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>Food</span>
                        <h3 className={styles.postTitle}>Punjabi Cuisine</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>Kunal Mundra</span>
                            <span className={styles.date}> - 01.01.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="http://localhost:3000/posts/comfort-denim-the-best-stretch-jeans-brands-for-men" className={styles.item}>
                    {withImage && (<div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                        <h3 className={styles.postTitle}>Comfort Denim: The Best Stretch Jeans Brands For Men</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>Kunal Mundra</span>
                            <span className={styles.date}> - 19.04.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="http://localhost:3000/posts/art-and-culture-of-india" className={styles.item}>
                    {withImage && (<div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                        <h3 className={styles.postTitle}>Art and Culture of India.</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>Kunal Mundra</span>
                            <span className={styles.date}> - 01.01.2023</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MenuPosts