'use client';

import Image from "next/image";
import {usePathname} from "next/navigation";
import { advanced } from "../../../../public/lib/data";
import HTMLReactParser from "html-react-parser";
import TailOptionBtn from "@/components/TailOptionBtn";

export default function Advanced_detail(){
    const pathname = usePathname();
    const get_page_id = pathname.split('/')[pathname.split('/').length - 1]
    const get_page_cat = pathname.split('/')[pathname.split('/').length - 2]

    return (
        <section className="leading-relaxed">
            <h1 className="mb-4 text-2xl text-center text-BMblack 2xl:mb-20 md:text-4xl lg:text-5xl font-hanna lg:mb-8">{HTMLReactParser(advanced[get_page_id].title)}</h1>
            <div className="lg:flex lg:gap-8 lg:border-b lg:justify-center lg:pb-16 lg:mb-16">
                <Image className="lg:w-[640px] 2xl:w-[560px]" src={advanced[get_page_id].cover_img_url} width={800} height={800} alt={advanced[get_page_id].alt} />
                <div className="lg:flex lg:flex-col lg:justify-center">
                    <div className="py-4 border-b 2xl:border-0">
                        <div className="flex items-center justify-center gap-2 mb-4 2xl:justify-start">
                            <h2 className="text-3xl font-hanna md:text-5xl md:mb-4">{HTMLReactParser(advanced[get_page_id].desc.title)}</h2>
                            {
                                advanced[get_page_id].desc.icon === null ? '' : <Image className="z-0 -translate-y-3 rounded-full shadow-md" src={advanced[get_page_id].desc.icon} width={48} height={48} alt={advanced[get_page_id].desc.icon_alt} />
                            }
                        </div>

                        <ul >
                            {advanced[get_page_id].desc.body.map((element) => {
                                return (
                                    <li key={element.id} className="md:text-xl md:mb-2">
                                        <p>{HTMLReactParser(element.item)}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="py-4 mb-4 border-b 2xl:border-0">
                        <h3 className="mb-4 text-xl md:text-2xl font-hanna">{HTMLReactParser(advanced[get_page_id].tips.title)}</h3>
                        <ul>
                            {advanced[get_page_id].tips.body.map((element) => {
                                return (
                                    <li className="pl-5 mb-1 tracking-tight list-disc list-inside md:mb-3 md:text-xl -indent-5" key={element.id}>
                                        <span>{element.item}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <section className="leading-relaxed break-keep 2xl:flex 2xl:flex-col 2xl:items-center ">
                <h1 className="mb-12 text-3xl text-center lg:text-5xl font-hanna md:text-center md:text-4xl lg:mb-24">{advanced[get_page_id].title}</h1>
                <div className="md:grid md:grid-cols-[248px_248px_248px] lg:grid-cols-[248px_248px_248px_248px] xl:grid-cols-[248px_248px_248px_248px_248px]">
                    {
                        advanced[get_page_id].content.map((element) => {
                            return (
                                <div className="flex flex-col justify-center mb-6" key={element.id}>
                                    <div className="mb-2 h-fit">
                                        <p className="flex items-center justify-center w-10 h-10 mx-auto mb-3 text-xl text-center rounded-full bg-BM-primary text-BM-white font-hanna">{element.id}</p>
                                        <div className='text-lg md:px-8 font-semibold md:min-h-[88px] text-center md:text-sm  lg:text-base'>{HTMLReactParser(element.desc)}</div>
                                    </div>
                                    <Image className="w-56 mx-auto md:mx-auto md:mb-6 lg:w-80" src={element.img} width={600} height={1060} alt={element.alt} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* <div className="py-4">
                <h2 className="text-2xl text-center md:text-3xl 2xl:text-left 2xl:leading-snug 2xl:mb-8 font-hanna">{HTMLReactParser(advanced[get_page_id].tutorial_title)}</h2>
                <ul>
                {
                    advanced[get_page_id].content.map((element) => {
                        
                        return (
                            <li className="py-4 border-b 2xl:gap-8 md:text-xl md:py-8 last:border-0 2xl:flex" key={element.id}>
                            <Image className="w-56 mx-auto lg:w-80 2xl:m-0" src={element.img} width={600} height={1060} alt={element.alt} />
                            <div className="2xl:flex 2xl:gap-2">
                            <span className="flex items-center justify-center w-8 h-8 mx-auto mb-2 font-bold rounded-full text-BMwhite bg-BMprimary">{element.id}</span>
                            <p className="text-center 2xl:text-2xl 2xl:text-left">{HTMLReactParser(element.desc)}</p>
                            </div>
                            </li>
                            )
                        })
                    }
                    </ul>
                </div> */}
            <TailOptionBtn />
        </section>
    )
}