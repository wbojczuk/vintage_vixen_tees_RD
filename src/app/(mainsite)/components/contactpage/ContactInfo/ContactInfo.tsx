import styles from "./contactinfo.module.css"
import FreeEstimateForm from "../FreeEstimateForm/FreeEstimateForm"

export default function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
        <div className={styles.textContent}>
          <h2>We would love to hear from you!</h2>
          <p>Whether it's questions about a custom order, or you just want to reach out, we're always looking forward to hearing from you!</p>

          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`} className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path fill="#fff" d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m-6.117-18.07c-5.813-5.79-9.516-13.172-5.133-17.555c.258-.258.539-.515.797-.773c1.336-1.266 2.625-1.195 3.773.422l3.047 4.336c1.031 1.5.773 2.343-.328 3.515l-.961 1.055c-.351.328-.21.773-.047 1.055c.446.843 1.711 2.343 3.07 3.703c1.407 1.406 2.836 2.601 3.727 3.093c.328.188.797.235 1.102-.046l1.007-.961c1.125-1.102 2.04-1.383 3.493-.352a318.803 318.803 0 0 0 4.43 3.094c1.476 1.078 1.827 2.414.327 3.773c-.257.258-.492.54-.75.797c-4.382 4.36-11.742.656-17.554-5.156"></path></svg>
            <span>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</span>
          </a>
          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className={styles.contactItem}>
          <svg fill="#fff" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"/></svg>
            <span>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
          </a>
        </div>
        <div className={styles.formContent}>
            <FreeEstimateForm />
        </div>
    </section>
  )
}
