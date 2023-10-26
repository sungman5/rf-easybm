'use client';

import './globals.css'
import Footer from './footer'
import Header from './header'
import AccessibilityButtons from '../components/acce_options'
import { useState } from 'react'
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';



// export const metadata = {
//   title: '쉬운 배달앱 사용법',
//   description: '모두를 위해 만든 쉬운 배달앱 사용법',
// }


export default function RootLayout({ children }) {

//in&decrease font
const [isFontSize, setIsFontSize] = useState(16)
  //change color
  const [isContrast, setIsContrast] = useState(false);
  // 확대 축소 상태
  const [zoom, setZoom] = useState(1);
  //네비게이션 오픈 상태
  const [isNavOpen, setIsNavOpen] = useState(false);
  // console.log('메뉴 열렸(true)는가?', isNavOpen)
  //처음으로 기능  

  return (

    // <html style={{ zoom: zoom, }} className='h-full overflow:auto text-BM-font bg-BM-background' lang="ko">
    <html style={{ zoom: zoom, fontSize : `${isFontSize}px` }} className='text-BM-font bg-BM-background' lang="ko">
      <Head>
        <title>쉬운 배달앱 사용법</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content='모두를 위한 배달앱! 배달의민족과 소소한소통이 만든 쉬운 배달앱 사용법입니다.' />
        <meta name='keywords' content='접근성을 고려한 배달앱 설명 사이트' />
      </Head>

      <body id='site-body' className='flex flex-col min-h-screen font-Pretendard '>        
        <div id="wrapper" className='container flex flex-col flex-1 mx-auto overflow-x-hidden'>
          <Header isContrast={isContrast} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <main id='main' className='container flex flex-col flex-grow pt-[56px] mx-auto shadow-sm bg-BM-white'>
            {children}
            <Analytics />
          </main>
          <Footer isNavOpen={isNavOpen} />
        </div>
        <AccessibilityButtons isContrast={isContrast} setIsContrast={setIsContrast} isNavOpen={isNavOpen} zoom={zoom} isFontSize={isFontSize} setIsFontSize={setIsFontSize} setZoom={setZoom} />
      </body>

    </html>
  )
}
