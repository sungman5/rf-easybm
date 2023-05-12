'use client';

import { MagnifierContainer, MagnifierPreview, MagnifierZoom } from "@ricarso/react-image-magnifiers";
import html2canvas from "html2canvas";
import { useCallback, useEffect, useState } from "react";
// import setMagnifier from "../../public/lib/scripts/magnifier";


export default function AccessibilityButtons({zoom, isNavOpen, isContrast, setIsContrast, setZoom}) {

//돋보기
    // async function setMagnifier() {
    //     console.log("캡쳐!");

    //     const targetDom = document.querySelector("header");

    //     // 스샷 후 메인에 띄우기
    //     const addScreenShot = async () => {
    //         const newFrame = document.createElement("div");
    //         const closeBtn = document.createElement("button");
    //         const magnifier = document.createElement("div");

    //         const closeAction = () => {
    //             newFrame.remove();
    //         };

    //         const screenShot = await html2canvas(document.body);
    //         newFrame.id = "viewFrame";
    //         newFrame.classList.add(
    //             "fixed",
    //             "inset-0",
    //             "overflow-y-auto",
    //             "bg-green-100",
    //             "object-cover"
    //         );
    //         closeBtn.classList.add(
    //             "absolute",
    //             "top-4",
    //             "right-4",
    //             "bg-BMgray200",
    //             "rounded-full",
    //             "w-16",
    //             "h-16",
    //             "shadow-lg",
    //             "font-bold",
    //             "text-lg"
    //         );
    //         closeBtn.innerText = "닫기";
    //         closeBtn.addEventListener("click", closeAction);

    //         magnifier.className = "magnifier";
    //         magnifier.classList.add(
    //             "absolute",
    //             "pointer-events-none",
    //             "w-64",
    //             "h-64",
    //             "border",
    //             "border-black",
    //             "rounded-full",
    //             "bg-no-repeat",
    //             "hidden"
    //         );

    //         targetDom.appendChild(newFrame);
    //         newFrame.appendChild(screenShot);
    //         newFrame.appendChild(closeBtn);
    //         newFrame.appendChild(magnifier);

    //         newFrame.addEventListener("mousemove", (event) => {
    //             const bounds = newFrame.getBoundingClientRect();
    //             const x = event.clientX - bounds.left;
    //             const y = event.clientY - bounds.top;
    //             const scaleX = 2;
    //             const scaleY = 2;

    //             magnifier.classList.remove("hidden");
    //             magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
    //             magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
    //             magnifier.style.backgroundImage = `url(${screenShot.toDataURL()})`;
    //             magnifier.style.backgroundSize = `${newFrame.offsetWidth * scaleX}px ${newFrame.offsetHeight * scaleY}px`;
    //             const bgPosX = (x * scaleX) - (magnifier.offsetWidth / 2);
    //             const bgPosY = (y * scaleY) - (magnifier.offsetHeight / 2);
    //             magnifier.style.backgroundPosition = `-${bgPosX}px -${bgPosY}px`;
    //         });



    //         newFrame.addEventListener("mouseleave", () => {
    //             magnifier.classList.add("hidden");
    //         });

    //         console.log(screenShot);
    //         console.log(newFrame);
    //     };

    //     addScreenShot();
    // }    


//돋보기
    function LetsMagnifier() {
        const [imageURL, setImageURL] = useState(null);

        // 웹 페이지의 스크린샷을 찍어 이미지 URL을 반환하는 함수
        async function captureScreenshot() {
            const canvas = await html2canvas(document.body);
            return canvas.toDataURL();
        }

        // 컴포넌트가 마운트될 때 스크린샷을 찍고 이미지 URL을 state에 저장
        useEffect(() => {
            captureScreenshot().then(setImageURL);
        }, []);

        // 이미지 URL이 준비되면 Magnifier 컴포넌트들을 렌더링
        return imageURL && (
            <MagnifierContainer>
                <div className="example-class">
                    <MagnifierPreview imageSrc={imageURL} />
                </div>
                <MagnifierZoom style={{ height: "400px" }} imageSrc={imageURL} />
            </MagnifierContainer>
        );
    }




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

    //zoom

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

    //돋보기 상태
    const [isMagStatus, setIsMagStatue] = useState(false);
    
    return (
        
        <section aria-hidden={isNavOpen} id="mobile-option-set" className="fixed right-0 flex flex-col shadow-md top-1/3 w-28 bg-BM-white">
            
            {/* <MagnifierContainer>
                <div className="example-class">
                    <MagnifierPreview imageSrc="./image.jpg" />
                </div>
                <MagnifierZoom style={{ height: "400px" }} imageSrc="./image.jpg" />
            </MagnifierContainer> */}
            
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
{/* 
            <button onClick={letsMagnifier} type="button" aria-label="돋보기" aria-checked={isMagStatus} role="checkbox" className="flex items-center gap-2 w-28">
                <span aria-hidden={true} className="flex items-center justify-center w-12 h-12 bg-BM-tertiary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
                <span className="flex-1 text-left">돋보기</span>
            </button>                         */}
            
        </section>
    )
}