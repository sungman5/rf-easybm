import Link from "next/link";

export default function TailOption(){

    const scrollToTop =()=>{
        console.log('클릭!')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return(
        <div className="flex flex-col gap-2 items-left lg:items-center">
            <button onClick={scrollToTop} role="link" className="w-32 h-10 rounded shadow-md scroll-smooth bg-BM-primary text-BM-white">맨 위로</button>
            <Link href={'/'} role="link" className="flex items-center justify-center w-32 h-10 rounded shadow-md bg-BM-primary text-BM-white">메인 화면으로</Link>            
        </div>
    )
}