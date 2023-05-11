'use client';

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
import React, { useEffect } from 'react';

export default function Home() {

    //배민맨 입장
  const enterance = () => {
    gsap.from('#bm-character', { opacity: 0, duration: 1, autoAlpha: 0 })
  }
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', enterance())
  }, [])

  return (
    <>
      <div className='flex flex-col h-full'>
        <section aria-describedby='상단 영역을 차지하는 메인 영역' className='p-4 grow'>
          <h1 className='mb-2 text-lg font-bold'>쉬운배달앱 사용법 소개</h1>          
          <p className='text-base leading-relaxed break-keep'>장애, 나이 상관없이 누구나 배달앱을 사용할 수 있도록 어려운 용어는 쉽게 바꾸고, 설명이 필요한 부분은 친절하게 안내했습니다. 쉬운 배달앱 사용법을 통해 발달장애인도, 시각장애인도, 어르신도 누구나 편리하게 배달로 음식과 생활용품을 주문할 수 있기를 바랍니다!</p>
        </section>
        <section className='flex flex-col w-full'>
          <Image className='mx-auto' width={796} height={353} alt='시각장애인, 발달장애인, 노인 캐릭터' src={'/img/cover.png'} />
          <nav>
            <ul>
              <li className='flex bg-BM-primary'>
                <Link aria-label='준비하기' href={'/basic/0'} className='px-4 py-4 text-BM-black'>
                  <span className='block text-base font-bold'>준비하기</span>
                  <span className='text-sm'>앱 설치부터 회원가입까지! 배달앱을 시작해 보자.</span>
                </Link>
              </li>
              <li className='flex bg-BM-secondary'>
                <Link aria-label='이용하기' href={'/usage/0'} className='px-4 py-4 text-BM-black'>
                  <span className='block text-base font-bold'>이용하기</span>
                  <span className='text-sm'>음식 선택부터 결제까지! 배달앱으로 주문해 보자.</span>
                </Link>
              </li>
              <li className='flex bg-BM-tertiary'>
                <Link aria-label='활용하기' href={'/advanced/0'} className='px-4 py-4 text-BM-black'>
                  <span className='block text-base font-bold'>활용하기</span>
                  <span className='text-sm'>상황에 맞게 사용할 수 있는 다양한 기능을 알아보자.</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  )
}
