import { usePathname } from "next/navigation"

export default function Footer({isNavOpen}){
    usePathname
    return(
        <footer aria-hidden={isNavOpen} id='site-footer' aria-label="푸터" className="bg-BM-background">
            <div className="container px-4 py-1 mx-auto text-sm bg-BM-background">
                <p className="text-BM-font">배달의민족과 소소한소통이 만들었습니다.</p>
            </div>
        </footer>            
    )
}