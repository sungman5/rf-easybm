'use client';

import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import { usage } from "../../../../public/lib/data";
import { usePathname } from "next/navigation";
import Usage_0_filter from "@/components/usage_filter";
import Usage_1_Options from "@/components/usage_selectOption";
import Link from "next/link";

export default function Usage_detail() {
    const pathname = usePathname();
    const get_page_id = pathname.split('/')[pathname.split('/').length - 1]
    // console.log(pathname)

    const showUsagePage = () => {
        if (get_page_id === '0') {
            return <Usage_0_filter />
        } else if (get_page_id === '1') {
            return <Usage_1_Options />
        }
    }

    return (
        <section className="flex flex-col items-center leading-relaxed break-keep ">
            <h1 tabIndex={0} className="mb-12 text-3xl text-center lg:text-5xl font-hanna md:text-center md:text-4xl lg:mb-24">{usage[get_page_id].title}</h1>
            <div className="">
                {
                    usage[get_page_id].content.map((element) => {
                        return (
                            <div className="flex flex-col justify-center mb-6 border-b lg:py-4 lg:gap-8 lg:items-start lg:flex-row" key={element.id}>
                                <div className="mb-2 h-fit lg:flex lg:pt-4 lg:gap-4">
                                    <p tabIndex={0} className="flex items-center justify-center w-6 h-6 mx-auto mt-1 mb-3 text-lg text-center rounded-full bg-BM-primary text-BM-white">{element.id}</p>
                                    <div tabIndex={0} className='text-lg font-medium text-center lg:p-0 lg:leading-relaxed lg:w-80 lg:text-left lg:text-xl md:px-8 md:text-sm '>{HTMLReactParser(element.desc)}</div>
                                </div>
                                <Image tabIndex={0} className="w-56 mx-auto md:mx-auto md:mb-6 lg:m-0 lg:w-80" src={element.img} width={600} height={1060} alt={element.alt} />
                            </div>
                        )
                    })
                }
                {
                    showUsagePage()
                }
                <div className="flex justify-between w-full">
                    <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={`/${get_page_id === '0' ? 'basic' : 'usage'}/${get_page_id === '0' ? '4' : parseInt(get_page_id) - 1}`}>👈 이전으로</Link>
                    <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={get_page_id === '2' ? `/advanced/0` : `/usage/${parseInt(get_page_id) + 1}`}>다음으로 👉</Link>
                </div>
            </div>
        </section>
    )
}