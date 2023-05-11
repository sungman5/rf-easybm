'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { gsap } from "gsap";
import MobileNav from "./mobileNav";

export default function Header({ isNavOpen, isContrast, setIsNavOpen}){
    
    // 메뉴 오픈 상태

    const openNav = () => {
        const main = document.getElementById('main')
        const site_header = document.getElementById('header')
        console.log('', main)
        
        // isNavOpen === false ?     
        if (isNavOpen === false) {
            main.setAttribute('aria-hidden', true);                        
            gsap.to('#mobile-menu', { x: '0', duration: 0.2 })
            setIsNavOpen(true)
        } else {
            gsap.to('#mobile-menu', { x: '100%', duration: 0.2 })                        
            setIsNavOpen(false)
        }
    }

    return(
        <header id="site-header" role="banner" className="fixed inset-x-0 top-0 bg-BM-background">
            <div className="container flex items-center justify-between px-4 mx-auto shadow-sm h-14 bg-BM-white">
                <Link href={'/'} >
                    <Image id="site-logo" src={isContrast === false ? '/img/easy-baemin-logo.svg' : '/img/easy-baemin-logo-w.svg' } width={158} height={20} alt="쉬운 배달앱 사용법 로고"/>
                </Link>
                <button type="menu" id="menu-icon" onClick={openNav} aria-label="전체메뉴" aria-expanded={isNavOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <MobileNav isNavOpen={isNavOpen} openNav={openNav} />            
        </header>
  )
}