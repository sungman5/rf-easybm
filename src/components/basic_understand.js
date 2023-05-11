'use client';

import Image from "next/image";


export default function UnderstandFirstPage(){
    return (
        <section className="h-full leading-relaxed">
            <h1 className="mb-4 text-2xl md:text-3xl lg:text-5xl font-hanna lg:mb-16">첫 화면 이해하기</h1>
            <Image width={335} height={591} className="mb-5 shadow-lg rounded-xl" src="/img/basic_imgs/first-page.jpg" alt="배달의민족 첫 화면이다. 가장 왼쪽 상단에 영등포구 문래북로 116, 주소가 있다. 화면 가장 오른쪽 상단에 사각형 네 개 아이콘 전체 서비스, 종 모양의 아이콘은 알림센터, 웃고 있는 얼굴은 마이 배민, 돋보기 빈칸은 검색이다. 그 아래 차례로 배민원 아이콘, 빠른 배달, 배달 아이콘, 배달, 포장 아이콘, 포장 비마트 아이콘이 강조되어 있다." />
            <ul>
                <li className="py-3 border-b md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">1. 주소 정하기</p>
                    <p>배달 받을 곳을 주문할 때 정할 수 있다. 주소를 우리집, 회사 등의 이름으로 정하면 편하다.</p>
                </li>
                <li className="py-3 border-b md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">2. 서비스 전체보기</p>
                    <p>배달의민족 앱에서 이용할 수 있는 모든 서비스를 볼 수 있다.</p>
                </li>
                <li className="py-3 border-b md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">3. 알림센터</p>
                    <p>여러 가지 알림을 확인할 수 있다. 빨간점이 떴다면 새로운 알림이 도착했다는 뜻이다.</p>
                </li>
                <li className="py-3 border-b md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">4. My배민</p>
                    <p>내가 찜한 가게, 내 주문내역 등 나와 관련된 정보를 볼 수 있다.</p>
                </li>
                <li className="py-3 border-b md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">5. 검색하기</p>
                    <p>원하는 메뉴나 가게를 검색해 바로 찾을 수 있다.</p>
                </li>
                <li className="py-3 border-b md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">6. 빠른 배달시키기</p>
                    <p>오른쪽의 배달보다 빠르게 받을 수 있다.</p>
                    <p className="text-sm font-medium text-BMgray400">
                        지역에 따라 배민1과 배달의 위치가 다르며 배민1이 안 보일 수 있다.
                    </p>
                </li>
                <li className="py-3 border-b md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">7. 배달시키기</p>
                </li>
                <li className="py-3 border-b md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">8. 포장 주문하기</p>
                    <p>직접 가지러 가서 배달팁을 아낄 수 있다.</p>
                </li>
                <li className="py-3 md:text-lg">
                    <p className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">9. B마트(비마트)</p>
                    <p>마트에서 파는 물건도 음식처럼 주문하고 배달받을 수 있다.</p>
                </li>
            </ul>
        </section>
    )
}