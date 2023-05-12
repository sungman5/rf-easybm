'use client';

import html2canvas from "html2canvas";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
// import setMagnifier from "../../public/lib/scripts/magnifier";

export default function AccessibilityButtons({ zoom, isNavOpen, isContrast, setIsContrast, setZoom }) {

    //줌
    const increaseZoom = () => {
        setZoom((prevZoom) => prevZoom + 0.1);
    };

    const decreaseZoom = () => {
        setZoom((prevZoom) => prevZoom - 0.1);
    };

    const zoomInit = () => {
        setZoom(1);
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

    const [screenShot, setScreenShot] = useState(null);

    async function captureScreenshot() {
        const canvas = await html2canvas(document.body);
        const dataUrl = canvas.toDataURL();
        console.log('URL is here. ::', dataUrl);

        setScreenShot(dataUrl);
        magnify("myimage", 3);
    }

    function magnify(imgID, zoom) {
        var img, glass, w, h, bw;
        img = document.getElementById(imgID);

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
        img.parentElement.insertBefore(glass, img);

        /*set background properties for the magnifier glass:*/
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

        /*setup magnifier once image is loaded*/
        img.onload = function () {
            glass.style.backgroundImage = "url('" + img.src + "')";
            glass.style.backgroundRepeat = "no-repeat";
            glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
            glass.style.backgroundColor = "#fff"; // or any color you prefer
        }

        const magniArea = document.getElementById('magni-area')

        /*execute a function when someone moves the magnifier glass over the image:*/
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);

        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);

        glass.addEventListener("click", function () {
            magniArea.style.display = "none";
        });

        function moveMagnifier(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;
            /*prevent the magnifier glass from being positioned outside the image:*/
            if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
            if (x < w / zoom) { x = w / zoom; }
            if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
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
            a = img.getBoundingClientRect();
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
            <section aria-hidden={isNavOpen} id="mobile-option-set" className="fixed right-0 flex flex-col shadow-md top-1/3 z-[9999] w-28 bg-BM-white">
                <button onClick={increaseZoom} aria-label="화면 확대" type="button" className="flex items-center gap-2 w-28">
                    <span aria-hidden={true} className="flex items-center justify-center w-12 h-12 bg-BM-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span className="flex-1 text-left">크게</span>
                </button>

                <button onClick={zoomInit} type="button" aria-label="화면크기 초기화" className="flex items-center gap-2 w-28">
                    <span aria-hidden={true} className="flex items-center justify-center w-12 h-12 bg-BM-tertiary">{parseInt(zoom * 100)}</span>
                    <span className="flex-1 text-left">초기화</span>
                </button>

                <button onClick={decreaseZoom} type="button" aria-label="화면 축소" className="flex items-center gap-2 w-28">
                    <span aria-hidden={true} className="flex items-center justify-center w-12 h-12 bg-BM-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <span className="flex-1 text-left">작게</span>
                </button>
                <button onClick={handleContrast} role="checkbox" aria-checked={isContrast} type="button" aria-label="고대비" className="flex items-center gap-2 w-28">
                    <span aria-hidden={true} className="flex items-center justify-center w-12 h-12 bg-BM-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </span>
                    <span className="flex-1 text-left">고대비</span>
                </button>

                <button onClick={captureScreenshot} type="button" aria-label="돋보기" className="flex items-center gap-2 w-28">
                    <span aria-hidden={true} className="flex items-center justify-center w-12 h-12 bg-BM-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <span className="flex-1 text-left">돋보기</span>
                </button>

            </section>
            <>

                <div id="magni-area">
                    <div id="img-magnifier-container" class="fixed inset-0">
                        <img id="myimage" src={screenShot} width="100%" height="100%" alt="돋보기" />
                    </div>
                </div>
            </>

        </>
    )
}