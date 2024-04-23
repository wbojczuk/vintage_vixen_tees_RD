"use client"
import Link from "next/link"
import styles from "./owned.module.css"

export default function Owned() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/owned-bg.png" width={360} height={600} alt="People Praising Image" />
        </div>
        

        <div className={styles.content}>
            <h2>Black Owned and Ran</h2>

            <p>Vintage Vixen Tees isn't just a clothing brand; it's a testament to black entrepreneurship and resilience. With each purchase, you support a business rooted in passion, creativity, and the celebration of black culture.
            </p>
            <div className={styles.linkWrapper}>
              <Link className='main-link' href='/products'>Shop Now</Link>
            </div>
        </div>
    </section>
  )
}
