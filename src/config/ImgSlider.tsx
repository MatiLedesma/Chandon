import { useEffect } from "react"
import { images } from "./images"

const ImgSlider = () => {
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        (async () => {
            const clipped = document.querySelector(".clipped");
            const slider = document.getElementById("slider");

            if (!slider) return;

            slider.style.width = clipped?.clientWidth + "px";
            slider.style.height = clipped?.clientHeight + "px";
            slider.style.transition = "all .2s ease-in";
            slider.style.position = "relative";
            slider.style.left = "0";

            for (let i = 1; i <= slider.children.length + 1; i++) {
                if (!clipped) return;

                await wait(2500);
                slider.style.left = `-${clipped?.clientWidth * i}px`;
                if (i === slider.children.length) {
                    i = 1;
                    slider.style.left = `0px`;
                    await wait(2500);
                }
            }
        })();
    }, []);

    return (
        <div className="d-flex" id="slider">
            {
                images.map((value, index) => {
                    return <img src={value} key={index} className="images slider_imgs" id={"img" + index} alt="chandon image_slider" />
                })
            }
        </div>
    );
}

export default ImgSlider;