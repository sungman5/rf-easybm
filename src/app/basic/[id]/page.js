'use client';

import { usePathname } from "next/navigation"
import Basic_dictionary from "../../../components/basic_dictionary"
import UnderstandFirstPage from "../../../components/basic_understand";
import Image from "next/image";
import { basic } from "../../../../public/lib/data";
import HTMLReactParser from "html-react-parser";



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
                <section className="leading-relaxed">
                    <h1 className="mb-4 text-2xl text-center lg:text-5xl font-hanna md:text-left md:text-3xl lg:mb-8">{basic[get_page_id].title}</h1>
                    {
                        basic[get_page_id].tutoContents.map((element) => {
                            return (
                                <div className="flex flex-col justify-center" key={element.id}>
                                    <div className=''>
                                        <p className="text-xl text-center text-BM-primary font-hanna">{element.id}.</p>
                                        <div className='font-semibold text-center'>{HTMLReactParser(element.desc)}</div>
                                    </div>
                                    <Image className="w-56 mx-auto md:m-0 lg:w-80" src={element.img} width={600} height={1060} alt={element.alt} />
                                </div>
                            )
                        })
                    }


                </section>

            }
        </>
    )
}