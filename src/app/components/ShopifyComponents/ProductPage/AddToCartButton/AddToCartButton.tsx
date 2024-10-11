"use client"
import { useContext, useRef, useState } from "react"
import { ShopContext } from "@/app/shopify/shopContext"
import styles from "./addtocartbutton.module.css"
import Loading from "../../Loading/Loading"


export default function AddToCartButton(props:{qtyAvail: qtyAvail, variantID: string, qty: number, available: boolean, currentSize: string, currentColor: string}) {
  
  const buttonRef: any = useRef()
    const {createCheckout, addItemToCheckout, openCart, checkout}: {createCheckout: any, addItemToCheckout: any, openCart: any, checkout: cartType}  = useContext(ShopContext)
    const [addingState, setAddingState] = useState(false)
    const adding: any = useRef()
    adding.current = false;

    async function buttonHandler(evt: any){
      if(props.currentColor != "unselected"){
        if(props.currentSize != "unselected"){
          if(!adding.current){
            setAddingState(true)
            adding.current = true;
            let isAvail = true
            let qtyAvail = 0

            if(props.qtyAvail.variants !== undefined){
              props.qtyAvail.variants.forEach((variant,i)=>{
                if((variant.id == props.variantID) && !(variant.availableForSale && variant.quantityAvailable <= 0) && (variant.quantityAvailable < props.qty)){
                  qtyAvail = variant.quantityAvailable
                  isAvail = false
                }
                checkout.lineItems.forEach((item, i)=>{
                  if((item.variant.id == variant.id) && ((item.quantity + props.qty) > qtyAvail) && !(variant.availableForSale && variant.quantityAvailable == 0)){
                    
                    isAvail = false
                  }
                })
              })
            }else{
              createCheckout();
              console.log("created new chekout")
            }

            

           

            if(!isAvail){
              alert("That Amount Is Not Available.")
              adding.current = false;
              setAddingState(false)
            }else{
            await addItemToCheckout(props.variantID, props.qty)
            adding.current = false;
            setAddingState(false)
            openCart()
            }
          }
        }else{
          alert("Select a size")
        }
      }else{
        alert("Select a color")
      }
    }

  return (
    <div className={styles.buttonWrapper}>
      {(addingState) && <Loading style={{position: "absolute"}} />}
      <button ref={buttonRef} className={`${styles.button} ${(addingState) ? styles.adding : ""} ${(props.available) ? "" : styles.soldOut}`} onClick={(props.available) ? buttonHandler : ()=>{}}>{(props.available) ? (addingState) ? "Adding" : "Add to cart" : "Sold out"}</button>
    </div>
  )
}
