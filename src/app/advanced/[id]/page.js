'use client';

import Image from "next/image";
import {usePathname} from "next/navigation";
import { advanced } from "../../../../public/lib/data";
import HTMLReactParser from "html-react-parser";
import TailOption from "@/components/tailOptionBtn";
import Link from "next/link";


export default function Advanced_detail(){
    const pathname = usePathname();
    const get_page_id = pathname.split('/')[pathname.split('/').length - 1]
    const get_page_cat = pathname.split('/')[pathname.split('/').length - 2]

    return (
        <section className="leading-relaxed">
            <h1 tabIndex={0} className="mb-4 text-2xl text-center text-BMblack 2xl:mb-20 md:text-4xl lg:text-5xl font-hanna lg:mb-8">{HTMLReactParser(advanced[get_page_id].title)}</h1>
            <div className="mb-16 lg:flex lg:gap-8 lg:border-b lg:justify-center lg:pb-16 lg:mb-24">
                <Image tabIndex={0} className="lg:w-[640px] 2xl:w-[560px]" src={advanced[get_page_id].cover_img_url} width={800} height={800} alt={advanced[get_page_id].alt} />
                <div className="lg:flex lg:flex-col lg:justify-center">
                    <div className="py-4 border-b 2xl:border-0">
                        <div className="flex items-center justify-center gap-2 mb-4 2xl:justify-start">
                            <h2 tabIndex={0} className="text-3xl font-hanna md:text-5xl md:mb-4">{HTMLReactParser(advanced[get_page_id].desc.title)}</h2>
                            {
                                advanced[get_page_id].desc.icon === null ? '' : <Image className="z-0 -translate-y-3 rounded-full shadow-md" src={advanced[get_page_id].desc.icon} width={48} height={48} alt={advanced[get_page_id].desc.icon_alt} />
                            }
                        </div>

                        <ul >
                            {advanced[get_page_id].desc.body.map((element) => {
                                return (
                                    <li key={element.id} className="md:text-xl md:mb-2">
                                        <p tabIndex={0} >{HTMLReactParser(element.item)}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="py-4 mb-4 border-b 2xl:border-0">
                        <h3 tabIndex={0} className="mb-4 text-xl md:text-2xl font-hanna">{HTMLReactParser(advanced[get_page_id].tips.title)}</h3>
                        <ul>
                            {advanced[get_page_id].tips.body.map((element) => {
                                return (
                                    <li tabIndex={0} className="pl-5 mb-1 tracking-tight list-disc list-inside md:mb-3 md:text-xl -indent-5" key={element.id}>
                                        <span>{element.item}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <section className="leading-relaxed break-keep 2xl:flex 2xl:flex-col 2xl:items-center ">
                <h1 tabIndex={0} className="mb-12 text-2xl text-center lg:text-5xl font-hanna md:text-center md:text-4xl lg:mb-16">{advanced[get_page_id].tutorial_title}</h1>
                <div className="">
                    {
                        advanced[get_page_id].content.map((element) => {
                            return (
                                <div className="flex flex-col justify-center mb-6 border-b lg:py-4 lg:gap-8 lg:items-start lg:flex-row" key={element.id}>
                                    <div className="mb-2 h-fit lg:flex lg:pt-4 lg:gap-4">
                                        <p tabIndex={0} className="flex items-center justify-center w-6 h-6 mx-auto mt-1 mb-3 text-lg text-center rounded-full bg-BM-primary text-BM-white">{element.id}</p>
                                        <div className='text-lg font-medium text-center lg:p-0 lg:leading-relaxed lg:w-80 lg:text-left lg:text-xl md:px-8 md:text-sm '><div tabIndex={0}>{HTMLReactParser(element.desc)}</div></div>
                                    </div>
                                    <Image tabIndex={0} className="w-56 mx-auto md:mx-auto md:mb-6 lg:m-0 lg:w-80" src={element.img} width={600} height={1060} alt={element.alt} />
                                </div>
                            )
                        })
                    }
                    <div className="flex justify-between w-full">
                        <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={`/${get_page_id === '0' ? 'usage' : 'advanced'}/${get_page_id === '0' ? '2' : parseInt(get_page_id) - 1}`}>👈 이전으로</Link>
                        {get_page_id === '7' ? '' : <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={`/advanced/${parseInt(get_page_id) + 1}`}>다음으로 👉</Link>}
                    </div>
                </div>
            </section>    
        </section>
    )
}