import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState, useImperativeHandle, forwardRef, ReactNode } from "react"
import { InlineIcon } from "@iconify/react"

interface optionProps {
    ref: any,
    links: {url: string, title: string}[],
    icon?: ReactNode,
    title: string
}

 const NavMultiOption = forwardRef((props: optionProps, servicesRef)=>{

    const linkElems = props.links.map((data, i)=>{
        return (<Link key={i} href={data.url}><li>{data.title}</li></Link>)
    })

    const listRef: any = useRef()
    const [isActive, setIsActive] = useState(false)

    useEffect(()=>{
      const isOnTouch = window.matchMedia("(max-width: 990px)").matches
      if(!isOnTouch){
        //@ts-ignore
        servicesRef!.current.classList.add(styles.dropdownActive)
      }else{
        window.addEventListener("click", (evt)=>{
          //@ts-ignore
          if(evt.target != listRef.current){
            setIsActive(false)
          }
        })
      }
    })

    function toggleActive(){
      
      if(!isActive){
        //@ts-ignore
        servicesRef!.current.classList.add(styles.dropdownActive)
      }else{
        //@ts-ignore
        servicesRef!.current.classList.remove(styles.dropdownActive)
      }
      setIsActive((old)=>!old)
    }

  return (
    //@ts-ignore
    <div ref={servicesRef} className={`${styles.dropdownLink} ${styles.navLink}`}>
              <li ref={listRef} className={`nav-noclose ${styles.dropdownList}`} onClick={toggleActive}>
              {(props.icon !== undefined) ? props.icon : <span className={styles.noIcon}></span>}
                <span style={{pointerEvents: "none"}}>{props.title}</span>
                <InlineIcon style={{pointerEvents: "none"}} icon={"mdi:menu-down"} width="50px" height="50px" />
              </li>

              <ul>
                {linkElems}
              </ul>
            </div>
  )
})

export default NavMultiOption
