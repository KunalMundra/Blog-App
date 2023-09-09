import React from 'react'
import Link from 'next/link'
import styles from "./menuCategories.module.css"

const MenuCategories = () => {
    return (
        <div>
            <div className={styles.categoryList}>
                <Link href="/blog?=cat=style" className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>fashion</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>food</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>travel</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>culture</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>coding</Link>

            </div>
        </div>
    )
}

export default MenuCategories