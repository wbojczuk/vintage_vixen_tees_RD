import styles from './header.module.css';
import Link from 'next/link';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>Elevate your style with our empowering black t-shirts, representing resilience, solidarity, and the beauty of diversity.</h1>

   <div className={styles.linkWrapper}>
        <Link className='main-link' href={"/products"}>View Our Collection</Link>
   </div>
 
    <img src='/img/header-bg.png' alt='Image of ' className='bg-img' />
    <div className='shader'></div>
 </header>
)};