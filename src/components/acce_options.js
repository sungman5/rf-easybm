'use client';

import html2canvas from "html2canvas";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
// import setMagnifier from "../../public/lib/scripts/magnifier";

export default function AccessibilityButtons({ zoom, isNavOpen, isContrast, setIsContrast, setZoom, setIsFontSize, isFontSize }) {

    //줌
    const increaseZoom = () => {
        setZoom((prevZoom) => prevZoom + 0.1);
        setIsFontSize(isFontSize + 2)
    };

    const decreaseZoom = () => {
        setZoom((prevZoom) => prevZoom - 0.1);
        setIsFontSize(isFontSize - 2)
    };
    
    const zoomInit = () => {
        setZoom(1);
        setIsFontSize(16)
    }


    //고대비
    const handleContrast = useCallback(() => {
        if (isContrast === false) {
            //색상을 변경한다
            document.documentElement.style.setProperty('--BM-primary', 'cyan')
            document.documentElement.style.setProperty('--BM-secondary', '#ffff00')
            document.documentElement.style.setProperty('--BM-line', '#1aebff')
            document.documentElement.style.setProperty('--BM-tertiary', '#3ff23f')
            // document.documentElement.style.setProperty('--BM-black', '#ffffff')
            document.documentElement.style.setProperty('--BM-font', '#ffffff')
            document.documentElement.style.setProperty('--BM-white', '#000000')
            document.documentElement.style.setProperty('--BM-background', '#000000')
            setIsContrast(true)
        } else {
            document.documentElement.style.setProperty('--BM-primary', '#23b8c0')
            document.documentElement.style.setProperty('--BM-secondary', '#6dba44')
            document.documentElement.style.setProperty('--BM-line', '#f1f5f9')
            document.documentElement.style.setProperty('--BM-tertiary', '#fdd118')
            // document.documentElement.style.setProperty('--BM-black', '#414141')
            document.documentElement.style.setProperty('--BM-white', '#ffffff')
            document.documentElement.style.setProperty('--BM-font', '#414141')
            document.documentElement.style.setProperty('--BM-background', '#f9fafb')
            setIsContrast(false)
        }
    }, [isContrast, setIsContrast])

    /******* 0. 사전 셋팅 ***************/
    const [screenShot, setScreenShot] = useState(null); // 생성된 이미지 주소 저장
    const [activeMag, setIsActiveMag] = useState(false); //돋보기 활성 상태

    /** 1. 함수 시작 : 화면 스크린 샷 */
    async function captureScreenshot() {
        // 돋보기 시 원래 화면 스크롤 금지
        setIsActiveMag(true);
        // document.body.style.overflow = 'hidden'; // Disable scroll on body

        setIsActiveMag(true)
        console.log('캡쳐를 시작합니다.')
        const canvas = await html2canvas(document.body);
        console.log('주소를 생성합니다.')
        const dataUrl = canvas.toDataURL();
        console.log('URL is here. ::', dataUrl);

        console.log('생성된 주소를 screenShot에 할당합니다.')
        await setScreenShot(dataUrl);

    }

    /** 2. 생성된 주소를 useEffect를 이용해 확인하고, 즉시 돔 생성*/
    useEffect(() => {
        console.log('돋보기 활성화?', activeMag)
        if (activeMag) {
            console.log('할당 결과', screenShot)
            magnify("myimage", 3);
        }
    }, [screenShot, activeMag])


    function magnify(imgID, zoom) {
        let backDrop, magniContainer, myImage
        var img, glass, w, h, bw;
        img = document.getElementById(imgID);
        const place = document.getElementById('mobile-option-set')
        /** create magnifier frame */
        backDrop = document.createElement('div');
        magniContainer = document.createElement('div');
        myImage = document.createElement('img');

        console.log('스크린샷 주소 상태를 확인합니다.', screenShot)

        backDrop.setAttribute('id', 'backdrop');
        magniContainer.setAttribute('id', 'img-magnifier-container');
        myImage.setAttribute('id', 'myimage');
        myImage.setAttribute('width', '100%');
        myImage.setAttribute('height', '100%');
        myImage.setAttribute('alt', '');
        myImage.setAttribute('src', screenShot);

        magniContainer.classList.add(
            'fixed',
            'inset-0',
            'z-[99999]',
        )

        place.append(backDrop);
        backDrop.append(magniContainer);
        magniContainer.append(myImage);

        // myImage.appendChild(magniContainer);
        // magniContainer.appendChild(backDrop);
        // backDrop.appendChild(document.body)       


        /*create magnifier glass:*/
        glass = document.createElement("DIV");
        glass.setAttribute("id", "img-magnifier-glass");
        glass.classList.add(
            'absolute',
            'border-4',
            'border-black',
            'rounded-full',
            'w-80',
            'h-80',
            'cursor-none',
            'z-[9999]'
        )

        /*insert magnifier glass:*/
        myImage.parentElement.insertBefore(glass, myImage);

        /*set background properties for the magnifier glass:*/
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

        /*setup magnifier once image is loaded*/
        myImage.onload = function () {
            glass.style.backgroundImage = "url('" + myImage.src + "')";
            glass.style.backgroundRepeat = "no-repeat";
            glass.style.backgroundSize = (myImage.width * zoom) + "px " + (myImage.height * zoom) + "px";
            glass.style.backgroundColor = "#fff"; // or any color you prefer
        }

        // 스크롤
        magniContainer.style.overflowY = 'auto'; // Enable scroll on magnifier


        /*execute a function when someone moves the magnifier glass over the image:*/
        glass.addEventListener("mousemove", moveMagnifier);
        myImage.addEventListener("mousemove", moveMagnifier);

        glass.addEventListener("click", removeMagnifier);
        myImage.addEventListener("click", removeMagnifier);

        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        myImage.addEventListener("touchmove", moveMagnifier);

        function removeMagnifier(e) {
            e.preventDefault();
            // Remove magnifier glass from the DOM
            glass.remove();
            let everyFrame = document.querySelectorAll('#backdrop');
            for (let i = 0; i < everyFrame.length; i++) {
                everyFrame[i].remove();
            }
            // Set activeMag state to false
            setIsActiveMag(false);
            // 스크롤
            // document.body.style.overflow = 'auto'; // Enable scroll on body
        }

        function moveMagnifier(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;
            /*prevent the magnifier glass from being positioned outside the image:*/
            if (x > myImage.width - (w / zoom)) { x = myImage.width - (w / zoom); }
            if (x < w / zoom) { x = w / zoom; }
            if (y > myImage.height - (h / zoom)) { y = myImage.height - (h / zoom); }
            if (y < h / zoom) { y = h / zoom; }
            /*set the position of the magnifier glass:*/
            glass.style.left = (x - w) + "px";
            glass.style.top = (y - h) + "px";
            /*display what the magnifier glass "sees":*/
            glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }
        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = myImage.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        }
    }

    return (
        <>
            <section id="mobile-option-set" className="fixed lg:border-t-0 border-t border-t-BM-white lg:border-top-0 bottom-0 right-0 lg:bottom-auto lg:left-auto left-0 lg:right-0  flex lg:flex-col shadow-md lg:top-1/3 z-[9999]lg:w-28 bg-BM-white">
                <button onClick={increaseZoom} aria-label="화면 확대" type="button" className="items-center flex-1 gap-2 lg:flex lg:w-28">
                    <span className="flex items-center justify-center w-full h-12 lg:w-12 bg-BM-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span className="flex-1 text-left">크게</span>
                </button>

                <button onClick={zoomInit} type="button" aria-label="화면크기 초기화" className="items-center flex-1 gap-2 lg:flex lg:w-28">
                    <span className="flex items-center justify-center w-full h-12 lg:w-12 bg-BM-tertiary">{parseInt(zoom * 100)}</span>
                    <span className="flex-1 text-left">초기화</span>
                </button>

                <button onClick={decreaseZoom} type="button" aria-label="화면 축소" className="items-center flex-1 gap-2 lg:flex lg:w-28">
                    <span className="flex items-center justify-center w-full h-12 lg:w-12 bg-BM-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span className="flex-1 text-left">작게</span>
                </button>
                <button onClick={handleContrast} role="checkbox" aria-checked={isContrast} type="button" aria-label="고대비" className="items-center flex-1 gap-2 lg:flex lg:w-28">
                    <span className="flex items-center justify-center w-full h-12 lg:w-12 bg-BM-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </span>
                    <span className="flex-1 text-left">고대비</span>
                </button>

                <button onClick={captureScreenshot} type="button" aria-label="돋보기" className="items-center flex-1 hidden gap-2 lg:flex lg:w-28">
                    <span className="flex items-center justify-center w-full h-12 lg:w-12 bg-BM-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <span className="flex-1 text-left">돋보기</span>
                </button>

            </section>
        </>
    )
}