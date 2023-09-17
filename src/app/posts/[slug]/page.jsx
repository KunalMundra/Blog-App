import Image from "next/image"
import styles from "./singlePage.module.css"
import Menu from "@/components/menu/Menu"
import Comments from "@/components/comments/Comments"

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImgContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}>23.05.23</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.img} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.desc}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus
                            similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima
                            consequuntur, aspernatur deleniti vero repellendus dorales.
                        </p>
                        <h2>
                            Lorem, ipsum dolor sit amet
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus
                            similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima
                            consequuntur, aspernatur deleniti vero repellendus dorales.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus
                            similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima
                            consequuntur, aspernatur deleniti vero repellendus dorales.
                        </p>
                    </div>
                    <div className={styles.comments}>
                        <Comments />
                    </div>
                </div>
                <Menu />

            </div>
        </div>
    )
}

export default SinglePage