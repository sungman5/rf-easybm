import Link from "next/link"

export default function Footer({ isNavOpen }) {
    const footerTabIndx = 3;

    return (
        <footer id='site-footer' aria-label="푸터" className="py-6 pb-[80px] lg:pb-6 bg-BM-background">
            <div className="container flex flex-col justify-center gap-1 px-4 py-1 mx-auto text-sm font-normal lg:flex-row lg:justify-between lg:font-semibold bg-BM-background">
                <div className="flex flex-col gap-1 lg:items-center lg:flex-row">
                    <Link className="mb-1 " href="mailto:team_csr@woowahan.com" type="email">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto" al="">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </Link>
                    <p className="mb-1 text-center" >
                        <Link href="mailto:team_csr@woowahan.com" type="email">사이트 이용 및 쉬운 배달앱 사용법과 관련된 의견은 메일로 알려주세요 team_csr@woowahan.com</Link>
                    </p>
                </div>

                <div className="lg:flex lg:gap-4">
                    <Link className="flex justify-center underline" href={'https://drive.google.com/file/d/1h1-M0qL5s4X02tSseshmI_SBuyPCpXyt/view'} target="_blank">
                        <span className="mr-1">쉬운 배달앱 사용법 PDF 다운로드</span>
                        <svg alt="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </Link>
                    <p tabIndex={0} className="text-center">copyright 배달의민족, 소소한소통, 2023</p>
                </div>
            </div>
        </footer>
    )
}