export const basic = [
    {
        id: 0,
        isTutorial: false,
        title: '배달앱 용어사전'
    },
    {
        id: 1,
        isTutorial: true,
        title: '배달앱 설치하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>구글 플레이스토어를 연다</p>',
                img: '/img/basic_imgs/b-3-1.png',
                alt: '스마트폰 바탕화면에 구글 플레이스토어 앱 아이콘이 있다.',
            },
            {
                id: '2',
                desc: '<p>검색창을 찾는다.</p>',
                img: '/img/basic_imgs/b-3-2.png',
                alt: '구글 플레이스토어 첫 화면, 화면 가장 위에 있는 검색창이 강조되어 있다.',
            },
            {
                id: '3',
                desc: '<p><strong className="font-hanna">배달의민족</strong>을 입력하고 돋보기를 누른다.</p>',
                img: '/img/basic_imgs/b-3-3.png',
                alt: '구글 플레이스토어 화면이다. 검색창에 배달의민족이 입력되어 있고, 키보드 위의 검색을 뜻하는 돋보기가 강조되어 있다.',
            },
            {
                id: '4',
                desc: '<p><strong>설치</strong>를 누른다.</p>',
                img: '/img/basic_imgs/b-3-4.png',
                alt: '플레이스토어 배달의민족 앱 상세 정보 화면이다. 상단 오른쪽에 설치 버튼이 있고 강조되어 있다.',
            },
            {
                id: '5',
                desc: '<p>설치가 끝나면 <strong className="font-hanna">배달의민족</strong>을 사용할 수 있다.</p>',
                img: '/img/basic_imgs/b-3-5.png',
                alt: '스마트폰 바탕화면이다. 배달의민족 앱이 설치되어 배달의민족 아이콘이 나타나 있다.',
            },
        ]
    },

    {
        id: 2,
        isTutorial: true,
        title: '주소 설정하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>배달의민족 앱을 연다.</p>',
                img: '/img/basic_imgs/b-4-1.png',
                alt: '스마트폰 바탕화면이다. 배달의민족 아이콘이 강조되어 있다.',
            },
            {
                id: '2',
                desc: '<p>동의하는 내용에 체크하고 <strong>시작하기</strong>를 누른다.</p><p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200"><strong>필수</strong>에 꼭 체크해야 앱을 이용할 수 있다. <strong>선택</strong>은 원하면 체크한다.</p>',
                img: '/img/basic_imgs/b-4-2.png',
                alt: '스마트폰 화면에 배달의민족을 처음 실행한 화면이다. 배달의민족 앱 이용약관 동의를 확인하는 페이지다. 위치 기반 서비스 약관 동의는 <strong>필수</strong>, 마케팅 정보 앱 푸시 알림 수신 동의는 선택 동의 항목이다. 위치 기반 서비스 약관 동의는 배달받기 위해 나의 위치 정보를 확인하는 것이다. 마케팅 정보 앱 푸시 알림 수신 동의는 배달앱의 더 많은 정보를 알림으로 알려주는 것이다.',
            },
            {
                id: '3',
                desc: '<p>배달받을 주소를 검색한다.</p><p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200"><strong>`서울시 중구 소소로 123, 101호`</strong>면, <strong>`소소로 123`</strong>만 입력한다.</p>',
                img: '/img/basic_imgs/b-4-3.png',
                alt: '배달받을 주소를 입력하는 화면이다. 검색창에 문래북로116을 입력해서 검색하고 있다.',
            },
            {
                id: '4',
                desc: '<p>상세 주소를 입력하고 <strong>완료</strong>를 누른다.</p>',
                img: '/img/basic_imgs/b-4-4.png',
                alt: '상세 주소를 입력하는 화면이다. 트리플렉스 1504호라고 입력하고 있다.',
            },
            {
                id: '5',
                desc: '<p>배달받을 주소가 설정되었다. 음식을 주문하면 내가 정한 주소로 배달받을 수 있다.</p>',
                img: '/img/basic_imgs/b-4-5.png',
                alt: '배달의민족 첫 화면이다. 맨 위에 주소를 나타내는 창이 강조되어 있고, 방금 입력한 주소인 서울 문래북로 116이라고 쓰여 있다.',
            },
        ]
    },
    {
        id: 3,
        isTutorial: true,
        title: '회원가입 하기',
        tutoContents: [
            {
                id: '1',
                desc: '<p>배달의민족 첫 화면에서 <strong className="font-hanna text-BM-primary">My배민(마이 배민)을</strong> 누른다.</p>',
                img: '/img/basic_imgs/b-5-1.png',
                alt: '배달의민족 첫 화면이다. 맨 위 오른쪽에 웃고 있는 마이 배민 아이콘이 강조되어 있다. 손가락 모양의 아이콘이 마이 배민 아이콘을 가리키고 있다.',
            },
            {
                id: '2',
                desc: '<p>로그인해주세요를 누른다.</p>',
                img: '/img/basic_imgs/b-5-2.png',
                alt: '마이 배민 페이지 화면이다. 위쪽에 로그인해주세요 버튼이 강조되어 있다. 손가락 모양의 아이콘이 로그인해주세요 버튼을 가리키고 있다.',
            },
            {
                id: '3',
                desc: '<p><strong>이메일 회원가입</strong>을 누른다.</p>',
                img: '/img/basic_imgs/b-5-3.png',
                alt: '배달의민족에서 로그인하는 화면이다. 맨 아래 중앙에 아이디 찾기, 이메일 회원가입 버튼이 있고 손가락 모양의 아이콘이 이메일 회원가입을 가리키고 있다.',
            },
            {
                id: '4',
                desc: `<p className="mb-2">동의하는 내용에 체크하고 <strong>시작하기</strong>를 누른다.</p><p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200">*필수에 꼭 체크해야 앱을 이용할 수 있다. 선택은 원하면 체크한다.</p>`,
                img: '/img/basic_imgs/b-5-4.png',
                alt: '회원가입 첫 페이지에 회원가입을 위한 약관이 나타난 화면이다. 필수 배달의민족 이용약관 동의, 필수 전자금융거래 이용약관 동의, 필수 개인정보 수집 이용 동의, 선택 개인정보 수집 이용 동의, 선택 마케팅정보 메일, SMS 수신동의, 선택 개인정보 제3자 제공 동의가 순서대로 있다. 화면 맨 아래에 시작하기 버튼이 있고 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '5',
                desc: `<p><strong>휴대폰 인증하기</strong>를 누른다.</p>`,
                img: '/img/basic_imgs/b-5-5.png',
                alt: '인증번호 요청이 온 화면이다.',
            },
            {
                id: '6',
                desc: '<p>나의 정보를 입력하고 <strong>인증번호 요청</strong>을 누른다.</p> <p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200">인증번호: 실제로 사용하는 전화인지 확인하는 숫자. 문자로 받는다.</p>',
                img: '/img/basic_imgs/b-5-6.png',
                alt: '회원가입을 위한 본인인증 화면이다. 화면 맨 아래에 휴대폰 인증하기 버튼이 있고 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '7',
                desc: '<p>문자로 온 인증번호 6자리를 입력하고 <strong>확인</strong>을 누른다.</p>',
                img: '/img/basic_imgs/b-5-7.png',
                alt: '본인인증 화면이다. 이름, 내국인/외국인, 생년월일, 성별, 휴대전화 번호를 쓰는 빈칸이 있고, 가장 아래에 인증번호 요청 버튼이 있다. 손가락 모양의 아이콘이 인증번호 요청 버튼을 가리키고 있다. 화면 오른쪽 아래 메시지함에서는 인증번호를 알려주는 새로운 메시지가 와 있다.',
            },
            {
                id: '8',
                desc: `<p>이메일 주소를 입력하고 <strong>중복확인</strong>을 누른다.</p> 
                <p className="text-sm font-medium text-center text-BM-gray200 lg:text-left">회원가입을 하려면 이메일 주소가 있어야 한다.</p>`,
                img: '/img/basic_imgs/b-5-8.png',
                alt: '메시지함에 도착한 인증번호 6자리가 입력되어 있고, 손가락 모양의 아이콘이 확인 버튼을 가리키고 있다.',
            },
            {
                id: '9',
                desc: '<p>닉네임, 비밀번호, 생년월일을 입력하고 <strong>완료</strong>를 누른다.</p> <p className="text-sm font-medium">비밀번호는 10자보다 길게 만든다. 영어, 숫자, 특수문자 중 2가지 종류를 섞는다.</p>',
                img: '/img/basic_imgs/b-5-9.png',
                alt: '회원가입 화면이다. 아이디로 사용할 이메일 주소를 입력하는 칸에 이메일이 입력되어 있다. 이메일 주소 오른쪽에는 중복확인 버튼이 있고 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
        ],
    },
    {
        id: 4,
        isTutorial: false,
        title: '첫 화면 이해하기'
    },
]

export const usage = [
    {
        id: 0,
        title: '주문할 곳 고르기',
        content: [
            {
                id: '1',
                desc: '화면 맨 위에 있는 주소 설정을 눌러서 배달받을 주소를 확인한다.',
                img: '/img/usage/rg-1-1.png',
                alt: '배달의민족 첫 화면, 맨 위 왼쪽에 영등포구 문래북로 116 주소가 강조되어 있고 손가락 모양의 아이콘이 주소를 가리키고 있다.',
            },
            {
                id: '2',
                desc: '<strong>검색창</strong>을 누른다.',
                img: '/img/usage/rg-1-2.png',
                alt: '배달의민족 첫 화면, 위쪽의 배달의민족 검색창이 강조되어 있고 손가락 모양의 아이콘이 검색창을 가리키고 있다.',
            },
            {
                id: '3',
                desc: '검색창에 원하는 음식이나 가게를 검색한다.',
                img: '/img/usage/rg-1-3.png',
                alt: '배달의민족 검색창에 샌드위치를 검색하고 있다.',
            },
            {
                id: '4',
                desc: '<strong>배달</strong>을 누르고 마음에 드는 가게를 선택한다.',
                img: '/img/usage/rg-1-4.png',
                alt: '검색 결과에서 가장 위에 있는 가게 우아한 샌드위치가 강조되어 있다. 손가락 모양의 아이콘이 우아한 샌드위치를 가리키고 있다,',
            },
        ],
    },
    {
        id: 1,
        title: '메뉴 담기',
        content: [
            {
                id: '1',
                desc: '<p>메뉴를 확인한다. 손가락으로 화면을 아래로 내리면 메뉴를 전부 볼 수 있다.</p>',
                img: '/img/usage/rg-2-1.png',
                alt: '가게 상세 정보 페이지, 우아한 샌드위치의 가게 정보가 표시되어 있다. ',
            },
            {
                id: '2',
                desc: '<p>원하는 메뉴를 선택한다.</p>',
                img: '/img/usage/rg-2-2.png',
                alt: '가게 상세 정보 페이지, 인기 메뉴 항목이 표시되어 있다. BLT 샌드위치 메뉴가 강조되어 있고, 손가락 모양의 아이콘이 가리키고 있다.',
            },
            {
                id: '3',
                desc: '<p>무엇을 시킬지 선택하고, 몇 개 시킬지 수량을 정한 후 <strong>담기</strong>를 누른다. </p> <p class="caption lg:text-left">맛, 소스, 토핑 등 옵션을 선택할 수 있다.</p>',
                img: '/img/usage/rg-2-3.png',
                alt: 'BLT 샌드위치를 선택하고, 추가 옵션으로 코우슬로 샐러드, 콘 스프를 추가한 화면이 나타나 있다. 21,000원 담기 버튼이 강조되어 있고, 손가락 모양이 가리키고 있다.',
            },
            {
                id: '4',
                desc: '<p><strong>장바구니에 메뉴를 추가했습니다</strong>라는 메시지가 나오고, <strong>장바구니 보기</strong>에 숫자가 생긴다.</p> <p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200">선택한 수량만큼 <strong>장바구니 보기</strong>에 숫자로 표시된다.</p>',
                img: '/img/usage/rg-2-4.png',
                alt: '장바구니에 메뉴를 추가했습니다 라는 알림이 화면에 표시되어 있다. 화면 맨 밑 장바구니 보기 버튼이 강조되어 있다.',
            },
        ],
    },
    {
        id: 2,
        title: '결제하기',
        content: [
            {
                id: '1',
                desc: '<strong>장바구니 보기</strong>를 누른다.',
                img: '/img/usage/rg-3-1.png',
                alt: '배달의민족 앱 화면에서 가게의 메뉴를 담은 화면이다. 화면 가장 밑에 장바구니 보기 22,000원 버튼이 강조되어 있다. 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '2',
                desc: '주문하려는 메뉴, 수량, 가격이 맞는지 확인하고 <strong>배달 주문하기</strong>를 누른다.',
                img: '/img/usage/rg-3-2.png',
                alt: '배달의민족 장바구니 화면이다. 화면 가장 밑에 배달 주문하기 22,000원 버튼이 강조되어 있다. 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '3',
                desc: '배달받을 주소와 전화번호를 꼼꼼하게 확인한다.',
                img: '/img/usage/rg-3-3.png',
                alt: '배달의민족 주문하기 화면이다. 우리집으로 설정된 배달받을 주소, 전화번호가 강조되어 있다. ',
            },
            {
                id: '4',
                desc: '화면 맨 아래로 내려간다. 결제수단에서 <strong>신용/체크카드</strong>를 선택하고 <strong>결제하기</strong>를 누른다.',
                img: '/img/usage/rg-3-4.png',
                alt: '배달의민족 주문하기에서 결제수단을 선택하는 화면이다. 결제수단으로 신용/체크카드가 설정되어 있다. 화면 맨 아래에 22,000원 결제하기 버튼이 강조되어 있고, 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '5',
                desc: '결제수단이 신용/체크카드인지 확인하고 <strong>본인 확인 후 결제하기</strong>를 누른다. <p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200">첫 주문이라면 본인 확인이 필요하다.</p>',
                img: '/img/usage/rg-3-5.png',
                alt: '배달의민족 결제하기 화면이다. 화면 가장 아래에 본인 확인 후 결제하기 버튼이 강조되어 있고, 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '6',
                desc: '<strong>휴대폰 인증하기</strong>를 누른다.',
                img: '/img/usage/rg-3-6.png',
                alt: '본인인증 단계 화면이다. 정확하고 안전한 거래를 위해 본인인증을 요청하고 있다. 화면 맨 아래에 휴대폰 인증하기 버튼이 강조되어 있고 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '7',
                desc: '사용하고 있는 휴대폰의 통신사를 선택한다.',
                img: '/img/usage/rg-3-7.png',
                alt: '휴대폰 본인인증 화면이다. 에스케이티, 케이티, 엘지 유플러스, 알뜰폰 등의 통신사를 선택하는 화면이다.',
            },
            {
                id: '8',
                desc: '나의 정보를 입력하고 <strong>인증번호 요청</strong>을 누른다.',
                img: '/img/usage/rg-3-8.png',
                alt: '휴대폰 본인인증 화면에서 이름, 내국인/외국인, 생년월일, 성별, 휴대전화 번호를 입력하는 칸이 강조되어 있다. 손가락 모양의 아이콘이 인증번호 요청 버튼을 가리키고 있다.',
            },
            {
                id: '9',
                desc: '문자로 온 인증번호 4자리를 입력하고 <strong>확인</strong>을 누른다.',
                img: '/img/usage/rg-3-9.png',
                alt: '휴대폰 본인인증 화면이다. 화면 오른쪽 아래 메시지함에서는 인증번호를 알려주는 새로운 메시지가 와 있다. 메시지함에 도착한 인증번호 4자리가 입력되어 있고, 손가락 모양의 아이콘이 확인 버튼을 가리키고 있다.',
            },
            {
                id: '10',
                desc: `<svg aria-label="체크버튼" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 text-BM-primary">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span>를 모두 눌러 동의하고 <strong>다음</strong>을 누른다.</span>`,
                img: '/img/usage/rg-3-10.png',
                alt: '본인인증 화면에서 약관 동의하는 화면이 나타나 있다. 서비스 이용약관 동의, 개인정보 수집 및 이용, 취급위탁 동의, 고유식별정보 처리 동의, 통신사 이용약관 동의 약관이 있고 모두 동의에 체크되어 있다. 화면 맨 아래에 다음 버튼이 있고 손가락 모양의 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: '11',
                desc: '<strong>완료</strong>를 누른다.',
                img: '/img/usage/rg-3-11.png',
                alt: '본인인증이 완료된 화면이다. 본인 확인이 되었습니다 라고 안내한다. 화면 맨 아래에 완료 버튼이 강조되어 있고, 손가락 모양의 아이콘이 버튼을 강조하고 있다.',
            },
            {
                id: '12',
                desc: '주문 금액과 배달팁이 맞는지 확인하고 <strong>결제하기</strong>를 누른다. <p className="caption lg:text-base lg:text-left">주문 후 취소하려면 어렵고 복잡하다. 주문은 신중하게!</p>',
                img: '/img/usage/rg-3-12.png',
                alt: '배달의민족 주문하기 화면으로 돌아왔다. 결제금액, 주문금액, 배달팁 부분이 강조되어 있고 화면 맨 아래에 22,000원 결제하기 버튼도 강조되어 있다. 손가락 모양의 아이콘이 22,000원 결제하기 버튼을 가리키고 있다.',
            },
            {
                id: '13',
                desc: '이용약관 동의에 <strong>전체동의</strong>를 체크한 후, 결제에 사용할 카드를 선택한다.',
                img: '/img/usage/rg-3-13.png',
                alt: '배달의민족 카드 결제 화면이다. 이용약관에 동의하는 항목이 있으며 전체동의에 체크가 되어 있다. 그 아래에는 신한, 현대 등 결제할 카드를 선택하는 화면이 있다.',
            },
            {
                id: '14',
                desc: '결제가 끝나면 <strong>주문 진행 중이에요</strong> 메시지와 배달 시간이 뜬다.',
                img: '/img/usage/rg-3-14.png',
                alt: '결제가 끝나면 주문 진행 중이에요 메시지와 배달 시간이 뜬다.',
            },
        ],
        moreInfo: ``,
    },
];

export const advanced = [
    {
        id: 0,
        title: '음식을 빨리 배달받고 싶어!',
        cover_img_url: '/img/advanced_imgs/adv_id_0.jpg',
        alt: '두 명의 사람이 식탁에 앉아 배고파한다. 또 다른 사람이 급한 표정으로 배달앱을 보며 빨리 배달 오는 메뉴가 있는지 찾아보고 있다. ',
        desc:
        {
            title: '배민1',
            icon: null,
            icon_alt: '배민1 아이콘',
            body: [
                { id: 1, item: '배민1(배민원)은 빠른 배달입니다.' },
                { id: 2, item: '한 번에 한 집만 바로 배달합니다.' },
                { id: 3, item: '음식을 빨리 배달받아 먹고 싶을 때 배민1을 사용해 보세요.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해 봐요!',
            body: [
                { id: 1, item: '친구들이 놀러왔는데 음식이 없어서 빨리 배달을 시켜야 할 때' },
                { id: 2, item: '배가 너무 고파서 빨리 오는 음식을 먹고 싶을 때' },
            ]
        },
        tutorial_title: '배민1 이렇게 사용하세요!',
        content: [
            {
                id: 1,
                img: '/img/advanced_imgs/adv_id_0_1.png',
                desc: `배달의민족 첫 화면에서 <strong>배민1</strong>을 누른다.`,
                alt: '배달의민족의 첫 화면이다. 손가락 모양의 아이콘이 배민원 버튼을 가리키고 있다.',
            },
            {
                id: 2,
                img: '/img/advanced_imgs/adv_id_0_2.png',
                desc: `검색을 누르고 원하는 음식이나 가게 이름을 <strong>검색</strong>한다.`,
                alt: '화면에 족발, 보쌈, 돈가스, 고기, 피자 등의 다양한 음식 모양 아이콘이 있다. 화면 왼쪽 하단에 있는 검색 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/img/advanced_imgs/adv_id_0_3.png',
                desc: `마음에 드는 가게를 선택해서 메뉴를 주문한다.`,
                alt: '화면에 여러 종류의 치킨 가게가 나와 있다.',
            },
        ]

    },
    {
        id: 1,
        title: '배달팁이 싼 곳에서 주문하고 싶어!',
        cover_img_url: '/img/advanced_imgs/adv_id_1.jpg',
        alt: '한 사람이 스마트폰 화면으로 배달앱을 보면서 배달팁이 무료인 가게를 보고 좋아한다.',
        desc:
        {
            title: '배달팁 낮은 순',
            icon: null,
            icon_alt: '',
            body: [
                { id: 1, item: '배달팁 낮은 순은 배달팁이 싼 순서대로 검색 결과를 볼 수 있는 기능입니다.' },
                { id: 2, item: '배달팁이 무료인 곳부터 볼 수 있습니다.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해 봐요!',
            body: [
                { id: 1, item: '배달팁을 아끼고 싶을 때' },
            ]
        },
        tutorial_title: '배달팁 낮은 순 이렇게 사용하세요!',
        content: [
            {
                id: 1,
                img: '/img/advanced_imgs/adv_id_1_1.png',
                desc: `배달의민족 첫 화면에서 먹고 싶은 음식을 검색한다.`,
                alt: '배달의민족의 첫 화면이다. 상단의 검색창에 샌드위치라고 검색하고 있다.',
            },
            {
                id: 2,
                img: '/img/advanced_imgs/adv_id_1_2.png',
                desc: `검색 결과에서 <strong>배달</strong>을 누르고, <strong>기본순</strong>을 누른다.`,
                alt: '샌드위치로 검색한 결과 화면이다. 배달 버튼과 기본순 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/img/advanced_imgs/adv_id_1_3.png',
                desc: `<strong>배달팁 낮은 순</strong>을 누르면 배달팁이 낮은 가게부터 볼 수 있다.`,
                alt: '기본순 버튼을 누른 결과 화면이다. 배달 빠른 순, 배달팁 낮은 순, 주문 많은 순, 별점 높은 순, 가까운 순, 찜 많은 순의 항목이 있고 손가락 모양 아이콘이 배달팁 낮은 순을 가리키고 있다.',
            },
            {
                id: 4,
                img: '/img/advanced_imgs/adv_id_1_4.png',
                desc: `마음에 드는 가게를 선택해서 메뉴를 주문한다.`,
                alt: '화면에 배달팁 낮은 순으로 정렬된 가게 정보가 담겨 있다.',
            },
        ]

    },
    {
        id: 2,
        title: '음식을 포장해서 먹고 싶어!',
        cover_img_url: '/img/advanced_imgs/adv_id_2.png',
        alt: '왼쪽에 스마트폰 화면이 크게 있다. 화면 속에는 지도 위에 음식 모양의 아이콘이 있다. 오른쪽에 한 사람이 포장하기 위해 피자 가게로 걸어가고 있다.',
        desc:
        {
            title: '포장',
            icon: null,
            icon_alt: '포장 아이콘',
            body: [
                { id: 1, item: '<strong>포장</strong>은 주문한 음식을 직접 가지러 가는 것입니다.' },
                { id: 2, item: '집 근처 포장할 수 있는 가게를 찾을 수 있습니다.' },
                { id: 3, item: '포장 주문하면 배달팁이 없습니다.' },
                { id: 4, item: '가까운 가게는 배달 대신 포장 주문해 보세요.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해 봐요!',
            body: [
                { id: 1, item: '집 근처의 포장할 수 있는 가게가 궁금할 때' },
                { id: 2, item: '집으로 돌아가는 길에 음식을 포장하고 싶을 때' },
            ]
        },
        tutorial_title: '포장 이렇게 사용하세요!',
        content: [
            {
                id: 1,
                img: '/img/advanced_imgs/adv_id_2_1.png',
                desc: `<p>배달의민족 첫 화면에서 <strong>포장</strong>을 누른다.</p>`,
                alt: '배달의민족의 첫 화면이다. 손가락 모양의 아이콘이 포장 버튼을 가리키고 있다.',
            },
            {
                id: 2,
                img: '/img/advanced_imgs/adv_id_2_2.png',
                desc: `<p>지도 위에 포장할 수 있는 가까운 가게가 음식 모양으로 표시된다.</p>`,
                alt: '지도 위에 음식 모양 아이콘이 표시되어 있다.'
            },
            {
                id: 3,
                img: '/img/advanced_imgs/adv_id_2_3.png',
                desc: `<p>음식 모양을 누르면 가게 정보가 나온다.</p>`,
                alt: '손가락 모양의 아이콘이 음식 모양 아이콘을 가리키고 있다.',
            },
            {
                id: 4,
                img: '/img/advanced_imgs/adv_id_2_4.png',
                desc: `<p>지도에서 다른 가게를 더 볼 수 있다. 마음에 드는 곳을 선택해서 메뉴를 주문한다. </p><p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200">목록보기를 누르면 가게 이름과 음식 사진이 나온다.</p>`,
                alt: '지도 위에 여러 가지 음식 모양의 아이콘이 표시되어 있다. 손가락 모양 아이콘이 목록보기 버튼을 가리키고 있다.',
            },
        ]

    },
    {
        id: 3,
        title: '음식을 조금만 주문하고 싶어!',
        cover_img_url: '/img/advanced_imgs/adv_id_3.jpg',
        alt: '한 사람이 TV에서 음식을 먹는 장면을 보며 배달앱을 켜서 1인분의 음식을 주문하려고 하고 있다.',
        desc:
        {
            title: '1인분',
            icon: '/img/advanced_imgs/adv_icon_single.png',
            icon_alt: '1인분 아이콘',
            body: [
                { id: 1, item: '1인분의 음식을 주문할 수 있는 기능입니다.' },
                { id: 2, item: '최소주문금액이 적어서 음식을 조금만 시켜도 배달해 줍니다.' },
                // { id: 3, item: '1인분만 먹고 싶을 때 사용해보세요.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해 봐요!',
            body: [
                { id: 1, item: '혼자서 음식을 시켜 먹어야 할 때' },
                // { id: 2, item: '시켜먹는 음식의 양이 너무 많을 때' },
                { id: 2, item: '1인분, 한 그릇의 음식을 먹고 싶을 때' },
            ]
        },
        tutorial_title: '1인분 이렇게 사용하세요!',
        content: [
            {
                id: 1,
                img: '/img/advanced_imgs/adv_id_3_1.png',
                desc: `배달의민족 첫 화면에서 먹고 싶은 음식을 검색한다.`,
                alt: '배달의민족의 첫 화면이다. 상단의 검색창에 샌드위치라고 검색하고 있다.',
            },
            {
                id: 2,
                img: '/img/advanced_imgs/adv_id_3_2.png',
                desc: `검색 결과에서 <strong>배달</strong>을 누르고, <strong>1인분</strong>을 누르면 1인분만 배달하는 가게가 나온다.`,
                alt: '샌드위치로 검색한 결과 화면이다. 배달 버튼과 1인분 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/img/advanced_imgs/adv_id_3_3.png',
                desc: `마음에 드는 가게를 선택해서 메뉴를 주문한다.`,
                alt: '화면에 1인분 주문 가능한 가게 정보들만 담겨 있다.',
            },
        ]

    },
    {
        id: 4,
        title: '예전에 먹은 음식을 또 주문하고 싶어!',
        cover_img_url: '/img/advanced_imgs/adv_id_4.jpg',
        alt: '한 사람이 예전에 친구와 먹었던 치킨맛을 떠올리고 있다. 배달앱의 주문 내역을 보며 예전에 주문했던 치킨집 이름과 메뉴를 확인하고 있다.',
        desc:
        {
            title: '주문 내역',
            icon: null,
            icon_alt: '',
            body: [
                { id: 1, item: '주문 내역을 보면 예전에 주문했던 곳을 확인할 수 있습니다.' },
                { id: 2, item: '언제 어떤 가게에서 어떤 음식을 주문했는지 볼 수 있습니다.' },
                { id: 3, item: '주문 내역을 보고 똑같은 메뉴를 주문할 수도 있습니다.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해 봐요!',
            body: [
                { id: 1, item: '예전에 먹었던 음식이 맛있어서 또 주문하고 싶을 때' },
                { id: 2, item: '주문했던 가게의 정보, 음식 가격을 알고 싶을 때' },
                { id: 3, item: '주문했던 음식의 리뷰를 쓰고 싶을 때' },
            ]
        },
        tutorial_title: '주문 내역 이렇게 사용하세요!',
        content: [
            {
                id: 1,
                img: '/img/advanced_imgs/adv_id_4_1.png',
                desc: `<p>배달의민족 첫 화면에서 My배민<span aria-hidden="true">(마이배민)</span>을 누른다.</p>`,
                alt: '배달의민족의 첫 화면이다. 손가락 모양의 아이콘이 오른쪽 상단에 있는 마이배민 아이콘을 가리키고 있다. 마이배민 아이콘은 입맛 다시는 얼굴 모양이다.',
            },
            {
                id: 2,
                img: '/img/advanced_imgs/adv_id_4_2.png',
                desc: `<strong>주문 내역</strong>을 누른다.`,
                alt: '마이배민 화면이다. 손가락 모양 아이콘이 주문 내역 버튼을 가리키고 있다.'
            },
            {
                id: 3,
                img: '/img/advanced_imgs/adv_id_4_3.png',
                desc: `예전에 주문했던 가게와 메뉴 이름이 나온다. <strong>같은 메뉴 담기</strong>를 누르면 예전에 먹었던 메뉴가 장바구니에 담긴다.`,
                alt: '주문 내역이 소개되어 있다. 가게명과 음식명이 담겨 있다.',
            },
        ]

    },
    {
        id: 5,
        title: '싫어하는 음식은 빼 달라고 하고 싶어!',
        cover_img_url: '/img/advanced_imgs/adv_id_5.jpg',
        alt: '고객이 배달앱으로 주문하면서 땅콩 빼달라고 요청한다. 요리사는 요청사항을 보고 땅콩을 빼고 요리한다.',
        desc:
        {
            title: '가게 사장님께',
            icon: null,
            icon_alt: '',
            body: [
                { id: 1, item: '가게 사장님께 메시지를 보내서 원하는 것을 말하면 사장님이 메시지를 보고 부탁을 들어줍니다.' },
                { id: 2, item: '필요한 것이 있다면 주문하기 전에 가게 사장님께 부탁해보세요.' },                
            ]
        },
        tips:
        {
            title: '이럴 때 사용해 봐요!',
            body: [
                { id: 1, item: '알레르기가 있는 재료를 빼달라고 할 때' },
                { id: 2, item: '싫어하는 재료를 빼달라고 할 때' },                

            ]
        },
        tutorial_title: '가게 사장님께 이렇게 사용하세요!',
        content: [
            {
                id: 1,
                img: '/img/advanced_imgs/adv_id_5_1.png',
                desc: `주문하고 싶은 가게에서 먹고 싶은 메뉴를 정한 후 <strong>담기</strong>를 누른다.`,
                alt: '배달앱 화면에 샌드위치 가게명과 메뉴 정보가 담겨 있다.',
            },
            {
                id: 2,
                img: '/img/advanced_imgs/adv_id_5_2.png',
                desc: `장바구니에 담긴 음식을 확인하고 <strong>배달 주문하기</strong>를 누른다.`,
                alt: '장바구니 버튼을 누른 화면이다. 배달 주문하기 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/img/advanced_imgs/adv_id_5_3.png',
                desc: `아래로 내리면 <strong>가게 사장님께</strong>가 있다. 회색 빈칸에 부탁할 것을 적고 결제한다.`,
                alt: '가게 사장님께 칸이 강조되어 있다. 칸 안에는 샌드위치에 오이 빼주세요라고 적혀 있다.',
            },
        ]

    },
    {
        id: 6,
        title: '마트에서 파는 물건도 배달받고 싶어!',
        cover_img_url: '/img/advanced_imgs/adv_id_6.jpg',
        alt: '싱크대에 설거지할 그릇과 접시가 가득 쌓여 있는데 세제가 떨어져서 배달의민족 비마트를 켜서 세제를 검색하고 있다.',
        desc:
        {
            title: 'B마트',
            icon: null,
            icon_alt: 'B마트 아이콘',
            body: [
                { id: 1, item: '<p>B마트<span aria-hidden="true">(비마트)</span>는 마트에서 파는 물건을 배달해주는 서비스입니다.</p>' },
                { id: 2, item: '<p>음식 재료, 세제, 화장지 등 급하게 필요한 물건을 주문하고 배달 음식처럼 빠르게 받을 수 있습니다.</p><p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200">사는 곳에 따라서 B마트를 사용할 수 없는 곳도 있습니다.</p>' },                
            ]
        },
        tips:
        {
            title: '이럴 때 사용해 봐요!',
            body: [
                { id: 1, item: '요리에 필요한 재료를 빠르게 배달받고 싶을 때' },
                { id: 2, item: '세제, 화장지 등 생활용품이 급하게 필요할 때' },
                { id: 3, item: '과자, 음료수, 컵라면을 사러 나가기 귀찮을 때' },
            ]
        },
        tutorial_title: 'B마트 이렇게 사용하세요!',
        content: [
            {
                id: 1,
                img: '/img/advanced_imgs/adv_id_6_1.png',
                desc: `<p>배달의민족 첫 화면에서 <strong>B마트<span aria-hidden="true">(비마트)</span></strong>를 누른다.</p>`,
                alt: '배달의민족의 첫 화면이다. 손가락 모양의 아이콘이 비마트 버튼을 가리키고 있다.',
            },
            {
                id: 2,
                img: '/img/advanced_imgs/adv_id_6_2.png',
                desc: `<p><strong>검색</strong>을 눌러서 필요한 물건을 검색한다.</p>`,
                alt: '비마트 화면이다. 신상품, 인기제품, 신선제품, 밀키트, 우유, 건강, 분식, 아이스크림, 화장지, 빵, 과자, 세제, 뷰티, 음료 아이콘이 담겨 있으며, 손가락 모양의 아이콘이 검색 버튼을 가리키고 있다.'
            },
            {
                id: 3,
                img: '/img/advanced_imgs/adv_id_6_3.png',
                desc: `<p>사고 싶은 물건을 선택한다.</p>`,
                alt: '검색창에 세제를 검색하고 있다. 다양한 세제의 정보가 담겨 있다.',
            },
            {
                id: 4,
                img: '/img/advanced_imgs/adv_id_6_4.png',
                desc: `<p><strong>구매하기</strong>를 누르고 수량을 정한 후 장바구니에 담는다.</p><p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200">담은 물건 수량만큼 장바구니에 숫자로 표시된다.</p>`,
                alt: '검색한 세제의 상세 정보가 있는 페이지. 하단에 구매하기 버튼이 있고, 손가락 아이콘이 버튼을 가리키고 있다.',
            },
            {
                id: 5,
                img: '/img/advanced_imgs/adv_id_6_5.png',
                desc: `<p><strong>배달 주문하기</strong>를 눌러서 결제하고 주문한다.</p><p className="caption lg:text-left lg:text-lg lg:font-normal lg:text-BM-gray200">B마트의 최소주문금액은 1만 원이다. 1만 원 넘게 주문해야 한다.</p>`,
                alt: '화면 상단에 총 금액이 나와있고, 하단에 배달 주문하기 버튼이 있다. 그 위에 손가락이 올려져 버튼을 가리키고 있다.',
            },
        ]

    },
    {
        id: 7,
        title: '할인받아서 음식을 주문하고 싶어!',
        cover_img_url: '/img/advanced_imgs/adv_id_7.jpg',
        alt: '',
        desc:
        {
            title: '쿠폰',
            icon: null,
            body: [
                { id: 1, item: '쿠폰이 있으면 주문할 때 할인받을 수 있습니다.' },
                { id: 2, item: '쿠폰을 주는 가게를 확인하고 주문해보세요.' },
                { id: 3, item: '쿠폰을 사용하면 음식을 더 싸게 먹을 수 있답니다.' },
            ]
        },
        tips:
        {
            title: '이럴 때 사용해 봐요!',
            body:
                [
                    { id: 1, item: '돈을 아끼고 싶을 때' },
                    { id: 2, item: '좋아하는 가게의 음식을 싸게 먹고 싶을 때' },
                ]
        },
        tutorial_title: '쿠폰 이렇게 사용하세요!',
        content: [
            {
                id: 1,
                img: '/img/advanced_imgs/adv_id_7_1.png',
                desc: `배달의민족 첫 화면에서 먹고 싶은 음식을 검색한다.`,
                alt: '한 사람이 배달의민족 앱을 켜고 쿠폰을 받는 이벤트 페이지에 접속하고 있다. 배달의민족의 첫 화면이다. 상단의 검색창에 샌드위치라고 검색하고 있다.',
            },
            {
                id: 2,
                img: '/img/advanced_imgs/adv_id_7_2.png',
                desc: `검색 결과에서 배달을 누르고, ‘쿠폰’을 누르면 쿠폰을 주는 가게를 볼 수 있다.`,
                alt: '샌드위치로 검색한 결과 화면이다. 배달 버튼과 쿠폰 버튼이 강조되어 있다.'
            },
            {
                id: 3,
                img: '/img/advanced_imgs/adv_id_7_3.png',
                desc: `마음에 드는 가게를 선택한다.`,
                alt: '화면에 쿠폰을 받을 수 있는 가게 정보들만 담겨 있다.',
            },
            {
                id: 4,
                img: '/img/advanced_imgs/adv_id_7_4.png',
                desc: `쿠폰 받기를 눌러서 필요한 쿠폰을 받고 음식을 주문한다.`,
                alt: '가게 정보 화면에서 최대 8000원 쿠폰 받기 버튼이 강조되어 있다. 손가락 모양 아이콘이 쿠폰 받기 버튼을 가리키고 있다.',
            },
            {
                id: 5,
                img: '/img/advanced_imgs/adv_id_7_5.png',
                desc: `결제하기 전에 할인쿠폰을 눌러서 쿠폰을 사용한다.`,
                alt: '배달의민족 주문하기 화면이다. 화면 아래쪽에 할인쿠폰 버튼이 있고 손가락 모양 아이콘이 할인쿠폰 버튼을 가리키고 있다.',
            },
        ]

    },
]
