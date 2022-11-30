import React from "react";
import { useEffect, useState } from "react";
import shape1 from "../svg/shape1.svg";
import shape2 from "../svg/shape2.svg";

export default function shape() {

  
  // This state represent the selected side - 1 for left side / 2 for right side / 0 for unselected
  const [shape, setShape] = useState<number>(0);
  const [opc1, setOpc1] = useState<boolean>(false)
  const [opc2, setOpc2] = useState<boolean>(false)

  return (
   <div className="main-container">
      <h3>ELEGÍ LA FORMA</h3>
        <div className="inside-container">
            <button className={opc1 ? "input-container__on" : "input-container__off"} onClick={() => setOpc1(!opc1)}>
                    <img className="shape" src={shape1} alt="image" />
                    <input checked={opc1} onChange={() => setOpc1(!opc1)} value="2" className="input-radio" type="radio" />
            </button>
            <button className={opc2 ? "input-container__on" : "input-container__off"} onClick={() => setOpc2(!opc2)}>
                    <img className="shape" src={shape2} alt="image" />
                    <input checked={opc2} onChange={() => setOpc2(!opc2)} value="2" className="input-radio" type="radio" />
            </button>
        </div>
        
        <div className='btn-container'>
            <button className='btn-back' >
            </button>
            <button className='btn-next' >
            </button>
        </div>
    </div>
  );
}





