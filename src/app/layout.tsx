import './globals.css'
import type { Metadata } from 'next'
import "react-multi-carousel/lib/styles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { PT_Sans } from 'next/font/google'
import Footer from './(mainsite)/components/misc/Footer/Footer';
import Navbar from './(mainsite)/components/misc/Navbar/Navbar';
import Script from 'next/script';

// BUTTON STYLES - .main-button
import "./(mainsite)/components/styling_sheets/links/mainlink.css"
import AppWrapper from './shopify/AppWrapper';
import Cart from './components/ShopifyComponents/Cart/Cart';


const primaryFont = PT_Sans({ subsets: ['latin'], weight: ["400", "700"], display: "swap", variable: "--primary-font" })

export const metadata: Metadata = {
  title: 'Vintage Vixen Tees | Black Empowering Tees',
  description: 'Vintage Vixen Tees | Black Empowering Tees'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable}`}>

      {(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID != "0000000") && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script></>}

       <AppWrapper elems={<>
        <Cart/>
        <Navbar />

        {children}

        

        <Footer />
       </>}/>
        
        </body>
    </html>
  )
}
