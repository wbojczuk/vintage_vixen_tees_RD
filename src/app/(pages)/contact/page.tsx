import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Page",
    description: ""
}

export default function ContactPage(){
    return(
        <>
            <ContactInfo />
        </>
    )
}