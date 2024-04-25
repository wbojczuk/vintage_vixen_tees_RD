"use client"
import Link from "next/link"
import styles from "./aboutus.module.css"

export default function AboutUs() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/aboutus.png" width={360} height={600} alt="Image of black woman" />
        </div>
        

        <div className={styles.content}>
            <h2>About Us </h2>

            <p>We're more than just a t-shirt shop – we're a black-owned business on a mission to spread positivity and pride through fashion. Every design is crafted with love and purpose, celebrating black culture, history, and resilience. When you shop with us, you're not just buying a shirt – you're supporting a community, lifting up voices, and making a difference. Join the movement for empowerment and representation, one stylish tee at a time!
            </p>
            <div className={styles.linkWrapper}>
              <Link className='main-link' href='/products'>Shop Now</Link>
            </div>
        </div>
    </section>
  )
}
