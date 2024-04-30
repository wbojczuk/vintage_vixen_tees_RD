"use client"
import Link from 'next/link';
import styles from './popular.module.css';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '@/app/shopify/shopContext';
import formatCurrency from '@/app/shopify/formatCurrency';

export default function Popular(){
    const {products}: {products: productType[]} = useContext(ShopContext)
    const [localProducts, setLocalProducts]: [localProducts: productType[], setLocalProducts: any] = useState([])
    useEffect(()=>{
        if(products.length > 0){
            let productsFiltered = products.filter((product)=>{
                const regex = new RegExp(`Tee Shirt`, "ig")
                if(regex.test(product.title)){
                    return true
                }else{
                    return false
                }
            })
            setLocalProducts(productsFiltered)
        }
    }, [products])
    const merchItems = localProducts.map((product, i)=>{
       if(i < 3){
        return(
            <div key={i} className={styles.item}>
                <img src={product.images[0].src} aria-hidden />
                <h4>{product.title}</h4>
                <div className={styles.price}>{formatCurrency(product.variants[0].price.amount, product.variants[0].price.currencyCode)}</div>

                <Link className='main-link main-link-outline' href={`/product/${product.handle}`}>Shop Now</Link>
            </div>
        )
       }
    })
return (
 <div className={styles.merch}>
    <h2>Popular Tees!</h2>

    <div className={styles.merchWrapper}>
        {merchItems}
    </div>

    <div className="center">
    <Link className='main-link' href={`/products`}>Shop All</Link>
    </div>
 </div>
)};