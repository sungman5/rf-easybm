import Link from "next/link";

export default function TailOption(){

    const scrollToTop =()=>{
        // console.log('클릭!')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    // return(
    //     <div className="flex flex-col gap-2 items-left lg:items-center">
    //         <button onClick={scrollToTop} className="w-32 h-10 rounded shadow-md scroll-smooth bg-BM-primary text-BM-white">맨 위로</button>
    //         <Link href={'/'} className="flex items-center justify-center w-32 h-10 rounded shadow-md bg-BM-primary text-BM-white">메인 화면으로</Link>            
    //     </div>
    // )
    return(
        <div className="flex justify-center gap-2 mb-2 font-hanna items-left lg:items-center">
            <button onClick={scrollToTop} className="scroll-smooth after:content-['|']">맨 위로&nbsp;</button>
            <Link href={'/'}>메인 화면으로</Link>            
        </div>
    )
}