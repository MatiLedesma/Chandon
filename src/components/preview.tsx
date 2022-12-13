import { IForm } from "./shape";
import shape1White from "../svg/shape1_white.svg";
import shape2White from "../svg/shape2_white.svg";
import shape1Gold from "../svg/shape1_gold.svg";
import shape2Gold from "../svg/shape2_gold.svg";
import { useEffect } from "react";

type Props = {
  initAPP?: boolean;
  shape?: number;
  slideRight: any;
  slideLeft: any;
  formObject: IForm;
}

export default function Preview({ slideRight, slideLeft, formObject }: Props) {

  useEffect(() => {
    
  }, []);
  return (
    <>
      <h1>Vista previa</h1>
      <div className="inside-container">
        <div id="node" className={formObject.color === "gold" ? "base white_background" : "base gold_background"}>
          <div className="dot"></div>
          <img className="shape" src={formObject.shape === "shape1" && formObject.color === "gold"
            ? shape1Gold : formObject.shape === "shape1" && formObject.color === "white" ? shape1White : formObject.shape === "shape2" && formObject.color === "gold"
              ? shape2Gold : formObject.color === "white" ? shape2White : ""
          } alt="shape alt" />
          <p id="textpng" className="base-text content">{formObject.message}</p>
        </div>
      </div>
      <div className='btn-container'>
        <button onClick={() => slideLeft()} className='btn-back' >
        </button>
        <button onClick={() => {
          slideRight();
          (async () => {
            console.log(formObject)
            if (formObject.message) {
              const res = await fetch("http://localhost:8080/svg", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ "message": formObject.message })
              })

              console.log(await res.text());
            }
          })();
        }} className='btn-next' >
        </button>
      </div>
    </>
  );
}
