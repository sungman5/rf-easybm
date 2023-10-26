/** @format */

"use client";

import Image from "next/image";
import TailOption from "./tailOptionBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UnderstandFirstPage() {
  const pathname = usePathname();
  const get_page_id = pathname.split("/")[pathname.split("/").length - 1];
  const get_page_cat = pathname.split("/")[pathname.split("/").length - 2];

  return (
    <section className="flex flex-col items-center h-full leading-relaxed ">
      <h1 tabIndex={0} className="mb-4 text-2xl md:text-3xl lg:text-5xl font-hanna lg:mb-16">
        첫 화면 살펴보기
      </h1>
      <Image
        tabIndex={0}
        width={335}
        height={591}
        className="mb-5  max-w-[344px] rounded-xl"
        src="/img/basic_imgs/first-page.png"
        alt="배달의민족 첫 화면이다. 가장 왼쪽 상단에 영등포구 문래북로 116, 주소가 있다. 화면 가장 오른쪽 상단에 사각형 네 개 아이콘 전체 서비스, 종 모양의 아이콘은 알림센터, 웃고 있는 얼굴은 마이 배민, 돋보기 빈칸은 검색이다. 그 아래 차례로 배민원 아이콘, 빠른 배달, 배달 아이콘, 배달, 포장 아이콘, 포장 비마트 아이콘이 강조되어 있다."
          />
          <div className="mb-8 text-[#888888]">*첫 화면은 지역마다 다를 수 있습니다.</div>
      <ul className="lg:mb-8">
        <li className="py-3 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            1. 주소
          </p>
          <p tabIndex={0}>배달받을 곳을 주문할 때 정할 수 있다. 우리 집, 회사 등 자주 사용하는 주소를 따로 저장할 수 있다.</p>
        </li>
        <li className="py-3 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            2. 서비스 전체보기
          </p>
          <p tabIndex={0}>배달의민족 앱에서 이용할 수 있는 모든 서비스를 볼 수 있다.</p>
        </li>
        <li className="py-3 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            3. 알림센터
          </p>
          <p tabIndex={0}>여러 가지 알림을 확인할 수 있다. 빨간 점이 있다면 새로운 알림이 도착했다는 뜻이다.</p>
        </li>
        <li className="py-3 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            4. 검색
          </p>
          <p tabIndex={0}>원하는 메뉴나 가게를 검색해 바로 찾을 수 있다.</p>
        </li>
        <li className="py-3 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            5. 배달
          </p>
          <p tabIndex={0}>일반 배달을 주문할 수 있다.</p>
        </li>
        <li className="py-3 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            6. B마트(비마트)
          </p>
          <p tabIndex={0}>마트에서 파는 생활용품을 음식처럼 주문하고 배달받을 수 있다.</p>
        </li>
        <li className="py-3 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            7. 알뜰/한집배달
          </p>
          <p tabIndex={0}>일반 배달보다 빠르게 받을 수 있다.</p>
        </li>
        <li className="py-3 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            8. 포장
          </p>
          <p tabIndex={0}>주문한 음식을 직접 가지러 가는 것이다. 배달팁이 들지 않는다.</p>
        </li>
        <li className="py-3 mb-8 border-b md:text-lg">
          <p tabIndex={0} className="mb-1 text-lg md:py-2 md:text-2xl font-hanna text-BMprimary">
            9. My배민(마이 배민)
          </p>
          <p tabIndex={0}>내가 찜한 가게, 내 주문 내역, 내 쿠폰 등 나와 관련된 정보를 볼 수 있다.</p>
        </li>

        
        <div className="flex justify-between w-full">
          {/* <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={`/basic/3`}>👈 이전으로</Link>
                    <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={`/basic/4`}>다음으로 👉</Link> */}
          <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={`/basic/${parseInt(get_page_id) - 1}`}>
            👈 이전으로
          </Link>
          <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={`/basic/${parseInt(get_page_id) + 1}`}>
            다음으로 👉
          </Link>
        </div>
      </ul>
    </section>
  );
}
