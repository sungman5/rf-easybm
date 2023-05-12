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
  const [isContrast, setIsContrast] = useState(false); 
  // 확대 축소 상태
  const [zoom, setZoom] = useState(1);  
  //네비게이션 오픈 상태
  const [isNavOpen, setIsNavOpen] = useState(false);
  //처음으로 기능

  return (
    // <html style={{
    //   transform: `scale(${zoom})`,
    //   transformOrigin: '0 0',
    //   overflow: 'auto',
    //   width: `${100 / zoom}%`,
    //   height: `${100 / zoom}%`,  }} className='text-BM-font bg-BM-background' lang="ko">
    <html style={{ zoom: zoom }} className='text-BM-font bg-BM-background' lang="ko">
      <Head>
        <title>쉬운 배달앱 사용법</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body id='site-body' className='h-screen font-Pretendard '> 
        <div id="wrapper" className='flex flex-col h-full pt-[56px]'>
          <Header isContrast={isContrast} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <main aria-hidden={isNavOpen} id='main' className='container flex-1 mx-auto shadow-sm bg-BM-white'>
            {children}
          </main>
          <Footer isNavOpen={isNavOpen} />
          <AccessibilityButtons isContrast={isContrast} setIsContrast={setIsContrast} isNavOpen={isNavOpen} zoom={zoom} setZoom={setZoom} />
        </div>
      </body>
    </html>
  )
}
