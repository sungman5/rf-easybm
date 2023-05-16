'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { gsap } from "gsap";
import MobileNav from "./mobileNav";

export default function Header({ isNavOpen, isContrast, setIsNavOpen }) {

    const openNav = () => {
    
        if (!isNavOpen) {
            gsap.to('#mobile-menu', { x: '100%', duration: 0.2 });
            setIsNavOpen(true);
        } else {
            gsap.to('#mobile-menu', { x: '0%', duration: 0.2 });
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        const main = document.getElementById('main')
        const nav = document.getElementById('mobile-menu')
        console.log('이펙트 안에서', isNavOpen)

        if (!isNavOpen) {
            gsap.to('#mobile-menu', { x: '100%', duration: 0.2 });
            // main.style.display = 'block'
            // nav.style.display = 'none'
            main.setAttributeNS(null, 'aria-hidden', 'true');
        } else {
            gsap.to('#mobile-menu', { x: '0%', duration: 0.2 });
            // main.style.display = 'none'
            // nav.style.display = 'block'
            main.setAttributeNS(null, 'aria-hidden', 'false');
        }
    }, [isNavOpen])


    return (
        <>
            <header id="site-header" role="banner" className="z-50 bg-BM-background">
                <div className="container flex items-center justify-between px-4 mx-auto shadow-sm h-14 bg-BM-white">
                    <Link href={'/'} >
                        <Image id="site-logo" src={isContrast === false ? '/img/easy-baemin-logo.svg' : '/img/easy-baemin-logo-w.svg'} width={158} height={20} alt="쉬운 배달앱 사용법 로고" />
                    </Link>
                    <button className="flex gap-2 font-hanna hover:text-BM-black" type="menu" id="menu-icon" onClick={openNav} aria-label="전체메뉴, 클릭하면 메뉴가 열립니다." aria-expanded={isNavOpen}>
                        전체 메뉴
                        <svg alt="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </header>
            <MobileNav isNavOpen={isNavOpen} openNav={openNav} />
        </>
    )
}