'use client';

// import useStore from '@/components/zustand_list';
import { gsap } from 'gsap';
/**
 * xs 375px @media (min-width: 375px) { ... }
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';




export default function Home() {
  const {isOpened, setIsOpened} = useStore();
  console.log('함수', setIsOpened)
  console.log('흡', isOpened)
  //배민맨 입장
  const enterance = () => {
    gsap.from('#bm-character', { opacity: 0, duration: 1, autoAlpha: 0 })
  }
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', enterance())
  }, [])

  // const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <>
      <div className='flex flex-col h-full'>
        <section aria-describedby='상단 영역을 차지하는 메인 영역' className='px-4 py-8 grow'>
          <h1 tabIndex={0} className='mb-4 text-lg font-bold text-center sm:text-xl md:text-3xl'>쉬운 배달앱 사용법을 소개합니다!</h1>
          <h2 tabIndex={0} className='max-w-3xl m-auto text-base leading-relaxed text-center break-keep sm:text-lg sm:leading-relaxed'>장애, 나이 상관없이 누구나 배달앱을 사용할 수 있도록 어려운 용어는 쉽게 바꾸고, 설명이 필요한 부분은 친절하게 안내했습니다. 쉬운 배달앱 사용법을 통해 발달장애인도, 시각장애인도, 어르신도 누구나 편리하게 배달로 음식과 생활용품을 주문할 수 있기를 바랍니다!</h2>
        </section>
        <section className='flex flex-col w-full'>
          <Image tabIndex={0} className='mx-auto' width={796} height={353} alt='시각장애인, 발달장애인, 노인 캐릭터' src={'/img/cover.png'} />
          <nav>
            <ul className='lg:flex'>
              <li className='flex flex-1 bg-BM-primary lg:h-60'>
                <Link aria-label='준비하기' href={'/basic/0'} className='w-full px-4 py-4 text-BM-black'>
                  <Image id='bm-character' src={'/img/basic_imgs/basic-title.png'} width={204} height={64} className='w-32 mb-2 md:w-40 lg:w-48' alt='준비하기' />
                  {/* <span className='block text-base font-bold sm:text-lg sm:leading-relaxed lg:text-4xl font-hanna lg:mb-2'>준비하기</span> */}
                  <span className='text-sm sm:text-base lg:text-lg break-keep'>앱 설치부터 회원가입까지! 배달앱을 시작해 보자.</span>
                </Link>
              </li>
              <li className='flex flex-1 bg-BM-secondary lg:h-60'>
                <Link aria-label='이용하기' href={'/usage/0'} className='w-full px-4 py-4 text-BM-black'>
                  <Image src={'/img/usage/usage-title.png'} width={204} height={64} className='w-32 mb-2 md:w-40 lg:w-48' alt='이용하기' />
                  {/* <span className='block text-base font-bold sm:text-lg sm:leading-relaxed lg:text-4xl font-hanna lg:mb-2'>이용하기</span> */}
                  <span className='text-sm sm:text-base lg:text-lg break-keep'>음식 선택부터 결제까지! 배달앱으로 주문해 보자.</span>
                </Link>
              </li>
              <li className='flex flex-1 bg-BM-tertiary lg:h-60'>
                <Link aria-label='활용하기' href={'/advanced/0'} className='w-full px-4 py-4 text-BM-black'>
                  <Image src={'/img/advanced_imgs/advanced-title.png'} width={204} height={64} className='w-32 mb-2 md:w-40 lg:w-48' alt='활용하기' />
                  {/* <span className='block text-base font-bold sm:text-lg sm:leading-relaxed lg:text-4xl font-hanna lg:mb-2'>활용하기</span> */}
                  <span className='text-sm sm:text-base lg:text-lg break-keep'>상황에 맞게 사용할 수 있는 다양한 기능을 알아보자.</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  )
}
