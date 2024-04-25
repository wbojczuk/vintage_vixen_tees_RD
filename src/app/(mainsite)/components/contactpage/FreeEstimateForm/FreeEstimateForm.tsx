"use client"
import { useRef, useState } from "react"
import "./freeestimateform.css"
import MessageStatus from "../MessageStatus/MessageStatus"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{sendEmail(evt, setStatus, {
        receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
        data: Object.fromEntries(new FormData(formRef.current))
    }, formRef.current)}}>

        {/* START FIELDS */}
            
        <h2 id="estimateFormTitle">Contact Us</h2>
            <div className="input-wrapper">
                <img width={200} height={200} id="formPersonIcon" src={"/icons/person.svg"} alt="Person Icon" />
                <input required type="text" name="Name" id="nameInput" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper">
                <img width={200} height={200} id="formPhoneIcon" src={"/icons/phone.svg"} alt="Phone Icon" />
                <input required type="text" name="Phone_Number" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
                <img width={200} height={200} id="formEmailIcon" src={"/icons/email.svg"} alt="Email Icon" />
                <input required type="email" name="Email" id="emailInput" placeholder={"Email Address"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={2000} name="Details" id="messageInput" placeholder={"Your message..."}></textarea>
            </div>
            
            <div className="center">
                <a style={{color: "var(--secondary-text-color)", backgroundColor: "var(--primary-color)"}} onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-link" id="estimateFormSubmit" type="submit">Submit</a>
            </div>

        </form>
    </>
  )
}
