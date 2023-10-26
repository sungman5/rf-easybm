'use client';

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import { usePathname } from "next/navigation";
import TailOption from "./tailOptionBtn";
import Link from "next/link";

export default function Basic_dictionary() {

    const pathname = usePathname();
    const get_page_id = pathname.split('/')[pathname.split('/').length - 1]
    const get_page_cat = pathname.split('/')[pathname.split('/').length - 2]

    return (
        <article className="flex flex-col items-center h-full mb-4 leading-relaxed">
            <h1 tabIndex={0} className="mb-4 text-2xl font-hanna md:text-3xl lg:text-5xl lg:mb-10">배달앱 용어 사전</h1>
            <ul className="mb-8">
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl font-hanna md:text-2xl text-BM-primary">배달팁</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">음식을 시킬 때 내야 하는 배달비. 음식값에 더해져서 한 번에 결제된다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} aria-label="예시" className="text-base text-BMgray500">“피자가 2만 원, 배달팁이 2천 원이니까 모두 2만 2천 원이네.”</p>
                    </div>

                </li>
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl md:text-2xl font-hanna text-BM-primary">최소주문금액</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">배달시킬 때 꼭 채워야 하는 주문 금액. 가게마다 최소주문금액이 다르다. 최소주문금액만큼은 주문해야 배달시킬 수 있다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} aria-label="예시" className="text-base text-BMgray500">“최소주문금액이 8천 원이니까 8천 원 이상은 주문해야겠다.”</p>
                    </div>
                </li>
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl md:text-2xl font-hanna text-BM-primary">찜</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">마음에 드는 가게를 골라 놓는 것. 찜 하면 마음에 드는 가게를 빨리 찾을 수 있어서 편하다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“이 집 맛있네. 다음에 배달시키게 찜 해야겠다.”</p>
                    </div>
                </li>
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl font-hanna md:text-2xl text-BM-primary">리뷰</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">가게에서 음식을 시켜 본 다음 나의 느낌이나 생각을 적는 것. 음식이 맛있었는지 자유롭게 적을 수 있다. 사진을 함께 올릴 수 있다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“리뷰가 좋은데? 여기서 시켜 먹어야겠다.”</p>
                    </div>
                </li>
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">별점</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">가게의 음식을 먹어 보고 만족한 만큼 점수를 주는 것. 1점부터 5점까지 줄 수 있다. 별점이 높은 가게는 고객이 만족한 가게라는 뜻이다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“별점이 4.8점이면 엄청 높네! 여기 맛집인가 봐.”</p>
                    </div>
                </li>
                {/* <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">배민페이</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">배달의민족 앱에서 계좌나 카드 정보를 연결하는 결제 서비스. 한 번 연결해두면 다른 결제 방법보다 쉽고 빠르게 결제할 수 있다.</p>
                    <p className="text-base text-BMgray500">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;배민페이 등록하니까 결제할 때마다 정보를 입력하지 않아도 돼서 편해.&rdquo;</p>
                </li> */}
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">배민1</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">일반 배달보다 빠르게 배달하는 서비스. ‘배민원’이라고 읽는다. 한집배달, 알뜰배달 2가지 종류가 있다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“배민1으로 주문했더니 배달이 엄청 빨리 왔네.”</p>
                    </div>
                </li>
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">한집배달</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">한 번에 한 집만 배달하는 서비스. 여러 집에 가지 않고 우리 집으로 바로 음식을 배달해 준다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“배고프니까 한집배달로 빨리 받아 봐야지!”</p>
                    </div>
                </li>
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">알뜰배달</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">음식을 주문한 집들 중에서 우리 집과 가까운 집들을 모아 배달하는 서비스. 배달팁이 싼 편이다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“알뜰배달로 주문해서 배달팁을 조금 아껴 볼까?”</p>
                    </div>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">소스</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">음식을 더 맛있게 먹기 위해 찍어 먹거나 뿌려 먹는 것.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“순살치킨을 양념 소스에 찍어 먹으면 더 맛있어!”</p>
                    </div>
                </li>
                <li className="py-4 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">옵션</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">음식을 더 맛있게 먹기 위해 주문할 때 추가하거나 선택하는 것. 재료를 추가하거나 맛을 바꿀 수 있다. 소스, 토핑, 사이드 메뉴 등이 옵션이다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“옵션으로 치즈 토핑을 추가해서 치즈 닭갈비를 먹어야지.”</p>
                    </div>
                </li>
                <li className="py-4 mb-8 border-b">
                    <h3 tabIndex={0} className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">사이드 메뉴</h3>
                    <p tabIndex={0} className="md:leading-relaxed md:text-lg md:mb-2">식사 메뉴와 같이 먹으면 좋은 음식. 식사 메뉴보다 양이 적은 편이다. 햄버거 세트의 감자튀김, 짜장면의 군만두가 사이드 메뉴다.</p>
                    <div className="flex font-medium text-BM-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        <p tabIndex={0} className="text-base text-BMgray500">“피자를 시킬 때 사이드 메뉴로 스파게티를 시키면 좋아.”</p>
                    </div>
                </li>
                {/* <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">닉네임</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">배달의민족 앱에서 사용하는 내 별명. 꼭 진짜 이름을 쓰지 않아도 된다.<br /> 리뷰를 쓸 때 표시된다.</p>
                    <p className="text-base text-BMgray500">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp;&ldquo;재밌는 닉네임으로 좋은 리뷰를 달면 사장님이 답글을 써주시겠지?&rdquo;</p>
                </li>
                <li className="py-4">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary">랜덤</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">정하지 않고 아무 것이나 뽑는 것. 어떤 것이 뽑힐지 알 수 없다.</p>
                    <p className="text-base text-BMgray500">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp;&ldquo;리뷰를 써준 분들에게 무료 음료수를 랜덤으로 드립니다.&rdquo;
                    </p>
                </li> */}
            
            
            <div className="flex justify-between w-full">
                <p></p>
                <Link className="px-3 py-2 text-sm text-white rounded-full shadow-sm bg-BM-primary" href={'/basic/1'}>다음으로 👉</Link>
            </div>
            </ul>
        </article>
    )
}