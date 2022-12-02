import React, { FC } from "react";
import { useEffect, useState } from "react";
import shape1White from "../svg/shape1_white.svg";
import shape2White from "../svg/shape2_white.svg";
import shape1Gold from "../svg/shape1_gold.svg";
import shape2Gold from "../svg/shape2_gold.svg";

type Props= {
  initAPP: boolean;
  shape: number;
  slideRight: any;
  slideLeft: any;
}



export default function Color({shape, slideRight, slideLeft} : Props) {


  
  // This state represent the selected side - 1 for left side / 2 for right side / 0 for unselected

  const [opc1, setOpc1] = useState<boolean>(false)
  const [opc2, setOpc2] = useState<boolean>(false)


  function opc1true() {
    setOpc2(false)
    setOpc1(!opc1)
  }

  function opc2true() {
    setOpc2(!opc2)
    setOpc1(false)
  }

  return (
   <div className="main-container">
      <h1>ELEGÍ EL COLOR</h1>
        <div className="inside-container">
            <button className={opc1 ? "input-container__on" : "input-container__off"} onClick={() => opc1true()}>
                    <img className="shape" src={shape === 1 ? shape1Gold : shape2Gold } alt="image" />
                    <input checked={opc1}  value="2" className="input-radio" type="radio" />
            </button>
            <button className={opc2 ? "input-container__on" : "input-container__off"} onClick={() => opc2true()}>
                    <img className="shape" src={shape === 1 ? shape1White : shape2White } alt="image" />
                    <input checked={opc2}  value="2" className="input-radio" type="radio" />
            </button>
        </div>
        <div className='btn-container'>
            <button onClick={() => slideLeft()} className='btn-back' >
            </button>
            <button onClick={() => slideRight()} className='btn-next' >
            </button>
        </div>
    </div>
  );
}

