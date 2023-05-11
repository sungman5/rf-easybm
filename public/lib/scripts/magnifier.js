import html2canvas from "html2canvas";


export default async function setMagnifier() {
    console.log("캡쳐!");

    const targetDom = document.querySelector("header");

    // 스샷 후 메인에 띄우기
    const addScreenShot = async () => {
        const newFrame = document.createElement("div");
        const closeBtn = document.createElement("button");
        const magnifier = document.createElement("div");

        const closeAction = () => {
            newFrame.remove();
        };

        const screenShot = await html2canvas(document.body);
        newFrame.id = "viewFrame";
        newFrame.classList.add(
            "fixed",
            "inset-0",
            "overflow-y-auto",
            "bg-green-100",
            "object-cover"
        );
        closeBtn.classList.add(
            "absolute",
            "top-4",
            "right-4",
            "bg-BMgray200",
            "rounded-full",
            "w-16",
            "h-16",
            "shadow-lg",
            "font-bold",
            "text-lg"
        );
        closeBtn.innerText = "닫기";
        closeBtn.addEventListener("click", closeAction);

        magnifier.className = "magnifier";
        magnifier.classList.add(
            "absolute",
            "pointer-events-none",
            "w-64",
            "h-64",
            "border",
            "border-black",
            "rounded-full",
            "bg-no-repeat",
            "hidden"
        );

        targetDom.appendChild(newFrame);
        newFrame.appendChild(screenShot);
        newFrame.appendChild(closeBtn);
        newFrame.appendChild(magnifier);

        newFrame.addEventListener("mousemove", (event) => {
            const bounds = newFrame.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;
            const scaleX = 2;
            const scaleY = 2;

            magnifier.classList.remove("hidden");
            magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
            magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
            magnifier.style.backgroundImage = `url(${screenShot.toDataURL()})`;
            magnifier.style.backgroundSize = `${newFrame.offsetWidth * scaleX}px ${newFrame.offsetHeight * scaleY}px`;
            const bgPosX = (x * scaleX) - (magnifier.offsetWidth / 2);
            const bgPosY = (y * scaleY) - (magnifier.offsetHeight / 2);
            magnifier.style.backgroundPosition = `-${bgPosX}px -${bgPosY}px`;
        });



        newFrame.addEventListener("mouseleave", () => {
            magnifier.classList.add("hidden");
        });

        console.log(screenShot);
        console.log(newFrame);
    };

    addScreenShot();
}