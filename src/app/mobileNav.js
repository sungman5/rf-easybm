'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({isNavOpen, openNav}){

    const scrollToTop = () => {
        console.log('클릭!')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    const pathname = usePathname();    
    const get_page_id = pathname.split('/')[pathname.split('/').length - 1]
    const get_page_cat = pathname.split('/')[pathname.split('/').length - 2]
    return(
        <nav aria-hidden={!isNavOpen} id="mobile-menu" className="fixed inset-0 z-50 flex flex-col px-4 py-4 overflow-y-auto translate-x-full bg-BM-white">
            <div className="flex justify-between pb-4 border-b border-b-BM-line">
                <h1 id="mobile-menu-header" className="text-xl text-BM-font font-hanna" aria-label="전체 메뉴">메뉴</h1>
                <button role="button" onClick={openNav} aria-label="닫기 버튼" aria-expanded={isNavOpen} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="py-4 border-b border-b-BM-line lg:text-center">
                <ul>
                    <li><Link href={'/'} className="mb-2 text-xl text-BM-primary font-hanna" onClick={openNav} aria-current="page">첫 화면으로</Link></li>
                </ul>
            </div>
            <div className="py-4 border-b border-b-BM-line lg:text-center lg:text-lg">
                <h2 className="mb-2 text-xl text-BM-primary font-hanna">준비하기</h2>
                <ul>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/basic/0' ? "block px-2 rounded py-1 font-medium bg-BM-background text-BM-font" : "block px-2 rounded py-1 font-medium text-BM-font"} href={'basic/0'}>배달앱 용어사전</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/basic/1' ? "block px-2 rounded py-1 font-medium bg-BM-background text-BM-font" : "block px-2 rounded py-1 font-medium text-BM-font"} href={'basic/1'}>배달앱 설치하기</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/basic/2' ? "block px-2 rounded py-1 font-medium bg-BM-background text-BM-font" : "block px-2 rounded py-1 font-medium text-BM-font"} href={'basic/2'}>주소 설정하기</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/basic/3' ? "block px-2 rounded py-1 font-medium bg-BM-background text-BM-font" : "block px-2 rounded py-1 font-medium text-BM-font"} href={'basic/3'}>회원가입 하기</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/basic/4' ? "block px-2 rounded py-1 font-medium bg-BM-background text-BM-font" : "block px-2 rounded py-1 font-medium text-BM-font"} href={'basic/4'}>첫 화면 살펴보기</Link></li>
                </ul>
            </div>
            <div className="py-4 border-b border-b-BM-line lg:text-center lg:text-lg">
                <h2 className="mb-2 text-xl text-BM-secondary font-hanna">이용하기</h2>
                <ul>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/usage/0' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'usage/0'}>주문할 곳 고르기</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/usage/1' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'usage/1'}>메뉴 담기</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/usage/2' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'usage/2'}>결제하기</Link></li>
                </ul>
            </div>
            <div className="py-4 mb-8 border-b border-b-BM-line lg:text-center lg:text-lg">
                <h2 className="mb-2 text-xl text-BM-tertiary font-hanna">활용하기</h2>
                <ul>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/advanced/0' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'advanced/0'}>음식을 빨리 배달 받고 싶어!</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/advanced/1' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'advanced/1'}>배달팁이 싼 곳에서 주문하고 싶어</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/advanced/2' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'advanced/2'}>음식을 포장해서 먹고 싶어!</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/advanced/3' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'advanced/3'}>음식을 조금만 주문하고 싶어!</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/advanced/4' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'advanced/4'}>예전에 먹은 음식을 또 주문하고 싶어!</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/advanced/5' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'advanced/5'}>싫어하는 음식은 빼 달라고 하고 싶어!</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/advanced/6' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'advanced/6'}>마트에서 파는 물건도 배달받고 싶어!</Link></li>
                    <li className="lg:py-2"><Link onClick={openNav} className={pathname === '/advanced/7' ? 'block px-2 rounded py-1 font-medium bg-BM-background text-BM-font' : "px-2 rounded block py-1 font-medium text-BM-font"} href={'advanced/7'}>할인받아서 음식을 주문하고 싶어!</Link></li>
                </ul>
            </div>
            {/* <button className="w-32 py-2 mx-auto rounded shadow-md scroll-smooth bg-BM-primary lg:mx-auto text-BM-white" onClick={scrollToTop}>맨 위로</button> */}
        </nav>
    )
}