import Image from "next/image";

export default function Manual() {
    
    return (
        <article className="flex flex-col items-center">
            <h1 className="text-6xl font-hanna">배달앱 설치하기</h1>
            <section>
                <h2 className="mb-4 text-3xl font-hanna">1. 구글 플레이스토어를 연다.</h2>
                <figure>
                    <div className="xl:w-full xl:h-[640px] bg-gradient-to-r from-slate-200 to-gray-300 rounded flex justify-center p-10">
                        <Image src={'/img/basic_imgs/b-3-1.png'} width={300} height={530} alt="대체택스트" className="rounded" />
                    </div>
                    <figcaption>캡션이 있다면 달아둔다.</figcaption>
                </figure>
            </section>
            <section>
                <h2>2. 검색창을 찾는다</h2>
                <figure>
                    <Image src={'/img/basic_imgs/b-3-1.png'} width={600} height={1060} alt="대체택스트" className="" />
                    <figcaption>캡션이 있다면 달아둔다.</figcaption>
                </figure>
            </section>
            <section>
                <h2>3. 배달의 민족을 입력하고 돋보기를 누른다.</h2>
                <figure>
                    <Image src={'/img/basic_imgs/b-3-1.png'} width={600} height={1060} alt="대체택스트" className="" />
                    <figcaption>캡션이 있다면 달아둔다.</figcaption>
                </figure>
            </section>
        </article>
    )
}