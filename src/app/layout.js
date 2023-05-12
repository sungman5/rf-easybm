'use client';

import './globals.css'
import Footer from './footer'
import Header from './header'
import AccessibilityButtons from '../components/acce_options'
import { useState } from 'react'
import Head from 'next/head';
import { GlassMagnifier } from '@ricarso/react-image-magnifiers';
import Image from 'next/image';


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
    
    <html style={{ zoom: zoom, }} className='text-BM-font bg-BM-background' lang="ko">
      <Head>
        <title>쉬운 배달앱 사용법</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content='모두를 위한 배달앱! 배달의민족과 소소한소통이 만든 쉬운 배달앱 사용법입니다.' />
        <meta name='keywords' content='접근성을 고려한 배달앱 설명 사이트' />
      </Head>
      <body id='site-body' className='h-screen font-Pretendard '>  

        <div id="wrapper" className='flex flex-col h-full'>
          <Header isContrast={isContrast} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <main aria-hidden={isNavOpen} id='main' className='container flex-1 mx-auto shadow-sm bg-BM-white'>            
            {children}
          </main>
          <Footer isNavOpen={isNavOpen} />
        </div>
        <AccessibilityButtons isContrast={isContrast} setIsContrast={setIsContrast} isNavOpen={isNavOpen} zoom={zoom} setZoom={setZoom} />
      </body>
      
    </html>
  )
}
