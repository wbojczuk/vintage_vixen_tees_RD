"use client"

import Link from 'next/link';
import styles from './custom.module.css';

export default function Custom(){
return (
 <div className={styles.custom}>
    <h2>Custom Designs!</h2>

    <p>Want something custom made? We love custom work. Contact us and we’ll do our best to make that happen for you!</p>

    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Contact Us!</Link>
    </div>
    <div style={{backgroundColor: "rgba(0,0,0,0.5)"}} className="shader"></div>
    <img src="/img/custom.png" alt="Black Girl Smiling" className="bg-img" />
 </div>
)};