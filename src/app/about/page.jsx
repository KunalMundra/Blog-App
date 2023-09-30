import Image from 'next/image'
import styles from './about.module.css'
import React from 'react'

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/Passport_size_photo.png" alt="" width={230} height={230} />
      </div>
      <div className={styles.content}>
        <p>
          Hi, I'm Kunal Mundra, a tech enthusiast and a B.Tech student at MIT-WPU, Pune,
          majoring in Electronics and Communication Engineering. My passion lies in web development,
          particularly in the MERN stack, and I have a strong grasp of Data Structures and Algorithms (DSA).
        </p>
        <br></br>
        <p>
          Beyond the screen, I'm an avid traveler. Exploring new places,
          cultures, and cuisines is my way of rejuvenating. My creative mindset
          allows me to approach problems from unconventional angles, often leading to unique solutions.
        </p> <br></br>
        <p>
          I'm committed to striking a balance between my personal and professional life.
          Continual learning and growth drive me, and I aspire to make a positive impact
          wherever I go. In a rapidly evolving tech world, I aim to stay ahead of the curve and
          contribute innovative solutions.
        </p> <br></br>
        <p>
          Join me on this exciting journey, as I combine my love for technology
          with my zest for exploration, creating a dynamic and impactful path forward.
        </p>
      </div>
    </div>
  )
}

export default about