import { useEffect } from "react"
import { images } from "./images"

const ImgSlider = () => {
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        (async () => {
            const clipped = document.querySelector(".clipped");
            const slider = document.getElementById("slider");
            if (slider) {
                slider.style.width = clipped?.clientWidth + "px";
                slider.style.height = clipped?.clientHeight + "px";
                slider.style.transition = "all .2s ease-in";
                slider.style.position = "relative";
                slider.style.left = "0";

                //adjust image size
                for (let i = 0; i < slider.children.length; i++) {
                    const image = document.getElementById(slider.children[i].id);
                    if (image) {
                        image.style.width = clipped?.clientWidth + "px";
                        image.style.height = clipped?.clientHeight + "px";
                        image.style.objectFit = "cover";
                    }
                }

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

                //slider

            }
        })();
    }, [])

    return (
        <div className="d-flex" id="slider">
            {
                images.map((value, index) => {
                    return <img src={value} key={index} className="images" id={"img" + index} alt="chandon image slider" />
                })
            }
        </div>
    );
}

export default ImgSlider;