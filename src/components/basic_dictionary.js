'use client';

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import { usePathname } from "next/navigation";

export default function Basic_dictionary() {

    const pathname = usePathname();
    const get_page_id = pathname.split('/')[pathname.split('/').length - 1]
    const get_page_cat = pathname.split('/')[pathname.split('/').length - 2]

    return (
        <article className="h-full leading-relaxed">
            <h1 className="mb-4 text-2xl font-hanna md:text-3xl lg:text-5xl lg:mb-10">배달앱 용어사전</h1>
            <ul>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna md:text-2xl text-BM-primary">배달팁</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">고객이 내는 배달비. 음식값에 더해져서 한 번에 결제된다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp;&ldquo;피자가 2만 원, 배달팁이 2천 원이니까 모두 2만 2천 원이네.&rdquo;
                    </p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl md:text-2xl font-hanna text-BM-primary">최소주문금액</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">배달시킬 때 꼭 채워야 하는 주문금액. 가게마다 최소주문금액이 다르다. 최소주문금액보다 많이 주문해야 배달시킬 수 있다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;최소주문금액이 8천 원이니까 만 원 정도 주문해야겠다.&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl md:text-2xl font-hanna text-BM-primary">찜</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">마음에 드는 가게를 골라놓는 것. 마음에 드는 가게를 빨리 찾을 수 있어서 편하다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;이 집 맛있네. 다음에 배달시키게 찜해야겠다.&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna md:text-2xl text-BM-primary">리뷰</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">가게에서 음식을 시켜본 다음 나의 느낌이나 생각을 적는 것. 음식이 맛있었는지, 직원이 친절했는지 자유롭게 적을 수 있다. 사진을 함께 올릴 수 있다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;리뷰가 좋은데? 여기서 시켜 먹어야겠다.&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">별점</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">가게의 음식을 먹어보고 만족한 만큼 별로 점수를 주는 것. 1점부터 5점까지 줄 수 있다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;별점이 4.8점이면 엄청 높네! 여기 맛집인가 봐.&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">배민페이</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">배달의민족 앱에서 계좌나 카드 정보를 연결하는 결제 서비스. 한 번 연결해두면 다른 결제 방법보다 쉽고 빠르게 결제할 수 있다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;배민페이 등록하니까 결제할 때마다 정보를 입력하지 않아도 돼서 편해.&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">배민1</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">일반배달보다 빠르게 배달하는 서비스. 한집배달, 알뜰배달 2가지 종류가 있다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;배민1으로 주문했더니 배달이 엄청 빨리 왔네.&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">한집배달</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">한 번에 한 집만 배달하는 것. 여러 집을 들르지 않고 우리 집으로 바로 음식을 배달해준다.</p><p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;배고프니까 한집배달로 빨리 받아 봐야지!&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">알뜰배달</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">우리 집 주변의 가까운 여러 개의 집들을 모아 배달하는 것. 배달팁이 싸다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;알뜰배달로 주문해서 배달팁을 조금 아껴볼까?&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">소스</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">음식을 더 맛있게 먹기 위해 찍어 먹거나 뿌려 먹는 것.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;순살치킨을 양념 소스에 찍어 먹으면 더 맛있어!&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">토핑</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">음식을 더 맛있게 먹기 위해 추가하는 음식 재료. 치즈, 고기, 과일 등의 토핑이 있다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;닭갈비에 치즈 토핑을 추가해서 치즈 닭갈비를 먹어야지.&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">사이드 메뉴</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">주로 시키는 음식 말고 곁들여 먹는 적은 양의 음식.<br /> 햄버거 세트의 감자튀김, 짜장면의 군만두가 사이드 메뉴다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>&nbsp;&ldquo;피자를 시킬 때 사이드 메뉴로 스파게티를 시키면 좋아.&rdquo;</p>
                </li>
                <li className="py-4 border-b">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary md:text-2xl">닉네임</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">배달의민족 앱에서 사용하는 내 별명. 꼭 진짜 이름을 쓰지 않아도 된다.<br /> 리뷰를 쓸 때 표시된다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp;&ldquo;재밌는 닉네임으로 좋은 리뷰를 달면 사장님이 답글을 써주시겠지?&rdquo;</p>
                </li>
                <li className="py-4">
                    <h3 className="mb-2 text-xl font-hanna text-BM-primary">랜덤</h3>
                    <p className="md:leading-relaxed md:text-lg md:mb-2">정하지 않고 아무 것이나 뽑는 것. 어떤 것이 뽑힐지 알 수 없다.</p>
                    <p className="text-base text-BMgray500">
                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BMtertiary">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp;&ldquo;리뷰를 써준 분들에게 무료 음료수를 랜덤으로 드립니다.&rdquo;
                    </p>
                </li>
            </ul>
        </article>
    )
}