import AboutUs from "@/app/(mainsite)/components/aboutpage/AboutUs/AboutUs"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Page",
    description: ""
}

export default function AboutPage(){
    return(
        <>
            <AboutUs />
        </>
    )
}