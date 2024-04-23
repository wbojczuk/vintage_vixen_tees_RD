"use client"
import ShopProvider from "./shopContext"

export default function AppWrapper(props: {elems: any}) {
  return (
    <ShopProvider>
        {props.elems}
    </ShopProvider>
  )
}
