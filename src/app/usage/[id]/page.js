'use client';

import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import { usage } from "../../../../public/lib/data";
import { usePathname } from "next/navigation";
import Usage_0_filter from "@/components/usage_filter";
import Usage_1_Options from "@/components/usage_selectOption";


export default function Usage_detail() {
    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]
    console.log(pathname)

    const showUsagePage = () => {
        if (pageId === '0') {
            return <Usage_0_filter />
        } else if (pageId === '1') {
            return <Usage_1_Options />
        }
    }

    return (
        <section className="leading-relaxed">
            <h1 className="mb-4 text-2xl text-center lg:text-5xl font-hanna md:text-3xl md:text-left text-BMblack">{usage[pageId].title}</h1>
            <ul>
                {
                    usage[pageId].content.map((element) => {
                        return (
                            <li className="py-5 border-b md:flex md:gap-4 " key={element.id}>
                                <Image className="w-56 mx-auto md:m-0 lg:w-80" src={element.img} width={600} height={1060} alt={element.alt} />
                                <div className="md:translate-y-4 md:flex md:gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 font-bold rounded-full text-BMwhite bg-BMprimary">
                                        {element.id}
                                    </div>
                                    <p className="text-center md:text-left md:text-2xl md:items-start md:leading-normal md:justify-start">{HTMLReactParser(element.desc)}</p>

                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {console.log(showUsagePage())}
            {

                showUsagePage()
            }
        </section>
    )
}