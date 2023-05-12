import Image from "next/image";

export default function Usage_1_Options() {
    return (
        <section className="py-8 mb-12 leading-relaxed">
            <h3 className="mb-4 text-xl text-center xl:text-3xl xl:text-left lg:text-2xl font-hanna">옵션 선택하기</h3>
            <p className="mb-2 text-center xl:text-left lg:text-xl">선택한 음식의 맛을 고르거나 소스 등을 골라서 내 입맛에 맞게 주문할 수 있다.</p>
            <p className="mb-8 text-center xl:text-left lg:text-xl">옵션을 선택하면 돈을 더 내야 할 수도 있다. 옵션이 없는 가게도 있다.</p>
            <Image className="mb-6 xl:w-full lg:w-[640px]" width={1200} height={521} src="/img/usage/rg-2-option.jpg" alt="1.'맛을 골라요.' 로제떡볶이의 맛을 선택하는 화면이다. 순한맛, 보통맛, 매운맛을 선택할 수 있고 순한맛에 체크가 되어 있다. 2.'소스를 골라요.' 프리미엄 피자 세트의 소스를 선택하는 화면이다. 갈릭디핑 소스, 핫소스, 머스타드 소스를 선택할 수 있고 갈릭디핑 소스에 체크되어 있다. 3. '사이드 메뉴를 골라요.' 쟁반짜장의 사이드 메뉴를 선택하는 화면이다. 군만두, 공기밥이 있다." />
            {/* <p className="text-center xl:text-left lg:text-xl"><strong className="block font-hanna text-BMprimary lg:text-2xl lg:mb-2">사이드 메뉴</strong>식사 메뉴와 같이 먹으면 좋은 음식. <br className="lg:hidden"/>식사 메뉴보다 양이 적은 편이다.</p> */}
        </section >

    )
}

