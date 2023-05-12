'use client';

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import { usePathname } from "next/navigation"
import Basic_dictionary from "../../../components/basic_dictionary"
import UnderstandFirstPage from "../../../components/basic_understand";
import Image from "next/image";
import { basic } from "../../../../public/lib/data";
import HTMLReactParser from "html-react-parser";
import TailOption from "@/components/tailOptionBtn";




export default function Basic_detail() {
    const pathname = usePathname();
    const get_page_id = pathname.split('/')[pathname.split('/').length - 1]
    const get_page_cat = pathname.split('/')[pathname.split('/').length - 2]

    const showPage = () => {
        if (get_page_id === '0') {
            // 배달앱 용어사전
            return <Basic_dictionary />
        } else if (get_page_id === '4') {
            // 첫 화면 이해하기
            return <UnderstandFirstPage />
        }
    }

    return (
        <>
            {basic[get_page_id].isTutorial === false ?
                <>
                    {showPage()}
                </>
                :
                <section className="flex flex-col items-center leading-relaxed break-keep ">
                    <h1 className="mb-8 text-3xl text-center lg:text-5xl font-hanna md:text-center md:text-4xl lg:mb-24">{basic[get_page_id].title}</h1>
                    <div className="">
                        {
                            basic[get_page_id].tutoContents.map((element) => {
                                return (
                                    <div className="flex flex-col justify-center mb-6 border-b lg:py-4 lg:gap-8 lg:items-center lg:flex-row" key={element.id}>
                                        <div className="mb-2 h-fit lg:flex">
                                            <p className="flex items-center justify-center w-10 h-10 mx-auto mb-3 text-xl text-center rounded-full bg-BM-primary text-BM-white font-hanna">{element.id}</p>
                                            <div className='text-lg font-medium text-center lg:p-0 lg:leading-relaxed lg:pl-4 lg:w-80 lg:text-left lg:text-3xl md:px-8 md:text-sm '>{HTMLReactParser(element.desc)}</div>
                                        </div>
                                        <Image className="w-56 mx-auto md:mx-auto md:mb-6 lg:m-0 lg:w-80" src={element.img} width={600} height={1060} alt={element.alt} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <TailOption />
                </section>
            }
        </>
    )
}