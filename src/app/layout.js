'use client';

import './globals.css'
import Footer from './footer'
import Header from './header'
import AccessibilityButtons from '../components/acce_options'
import { useState } from 'react'
import Head from 'next/head';


// export const metadata = {
//   title: '쉬운 배달앱 사용법',
//   description: '모두를 위해 만든 쉬운 배달앱 사용법',
// }

export default function RootLayout({ children }) {


  //change color

  const [zoom, setZoom] = useState(1);  
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <html style={{ zoom: zoom }} className='text-BM-font bg-BM-white' lang="ko">
      <Head>
        <title>쉬운 배달앱 사용법</title>
      </Head>
      <body id='site-body' className='h-screen font-Pretendard'> 
        <div id="wrapper" className='flex flex-col h-full'>
          <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <main aria-hidden={isNavOpen} id='main' className='container flex-1 mx-auto'>
            {children}
          </main>
          <Footer isNavOpen={isNavOpen} />
          <AccessibilityButtons isNavOpen={isNavOpen} zoom={zoom} setZoom={setZoom} />
        </div>
      </body>
    </html>
  )
}
