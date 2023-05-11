import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer({ isNavOpen }) {
    usePathname
    return (
        <footer aria-hidden={isNavOpen} id='site-footer' aria-label="푸터" className="py-6 bg-BM-background">
            <div className="container grid grid-rows-3 px-4 py-1 mx-auto text-sm font-normal lg:font-semibold lg:grid-cols-3 justify-items-center bg-BM-background">
                <div className="flex flex-col justify-center gap-2 lg:flex-row text-BM-font">
                    <Link href="mailto:team_csr@woowahan.com" type="email">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </Link>
                    <p><Link href="mailto:team_csr@woowahan.com" type="email">사이트 이용에 불편한 점은 메일로 알려 주세요. team_csr@woowahan.com</Link></p>
                </div>

                <Link href={'https://drive.google.com/file/d/1h1-M0qL5s4X02tSseshmI_SBuyPCpXyt/view'} target="_blank" className="text-BM-font">쉬운 배달앱 사용법 PDF 다운로드</Link>
                <p className="text-BM-font">ⓒ배달의민족, 소소한소통, 2023</p>
            </div>
        </footer>
    )
}