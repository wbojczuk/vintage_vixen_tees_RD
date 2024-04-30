"use client"

import styles from "./productlistings.module.css"
import ProductCard from "../ProductCard/ProductCard"
import Loading from "../Loading/Loading"
import { useEffect, useState, useContext } from "react"
import { ShopContext } from "@/app/shopify/shopContext"
import gsap from "gsap"

export default function ProductListings() {

    const [currentCollection, setCurrentCollection] = useState("Tee Shirt")
    const {products}: {products: productType[]} = useContext(ShopContext)
    const [localProducts, setLocalProducts]: [localProducts: productType[], setLocalProducts: any] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const productCardElems = localProducts.map((product, i)=>{
        return <ProductCard key={i} product={product} />
    })

    useEffect(()=>{
        if(products.length > 0){
            let productsFiltered = products.filter((product)=>{
                const regex = new RegExp(`${currentCollection}`, "ig")
                if(regex.test(product.title)){
                    return true
                }else{
                    return false
                }
            })

            setLocalProducts(productsFiltered)
        }
    }, [products, currentCollection])

    useEffect(()=>{
        if(localProducts.length > 0){
            
            setIsLoading(false)
            const observer = new IntersectionObserver((elems)=>{
                const elemArray: HTMLElement[] = []
                elems.forEach((elem)=>{
                    if(elem.isIntersecting){
                        elemArray.push(elem.target as HTMLElement)
                        observer.unobserve(elem.target)
                    }
                })
                if(elemArray.length > 0){
                    animateElems(elemArray)
                }
            })

            document.querySelectorAll(`.${styles.listings} a`).forEach((elem)=>{
                observer.observe(elem)
            })
        }
    }, [localProducts])

    function animateElems(elems: HTMLElement[]){
        gsap.to(elems, {
            y: 0,
            opacity: 1,
            ease: "power2inOut",
            duration: 0.4,
            stagger: 0.05
        })
    }

  return (
    <>
    <h2 className={styles.listingHeading}>{currentCollection}s</h2>
    <div className={styles.collections}>
        <button className="main-link" onClick={()=>{setCurrentCollection("Tee Shirt")}}>Tee Shirts</button>
        <button className="main-link" onClick={()=>{setCurrentCollection("Tank Top")}}>Tank Tops</button>
        <button className="main-link" onClick={()=>{setCurrentCollection("Hoodie")}}>Hoodies</button>
        <button className="main-link" onClick={()=>{setCurrentCollection("Tote Bag")}}>Tote Bags</button>
    </div>
    <section className={styles.listings}>
        
        {isLoading && <Loading />}
        {productCardElems}
    </section>
    </>
  )
}
