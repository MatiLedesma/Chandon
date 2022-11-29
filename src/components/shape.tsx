import React from "react";
import { useEffect, useState } from "react";
import shape1 from "../svg/shape1.svg";
import shape2 from "../svg/shape2.svg";

export default function shape() {
  // This state represent the selected side - 1 for left side / 2 for right side / 0 for unselected
  const [shape, setShape] = useState<number>(0);

  return (
   <div className="main-container">
      <h3>ELEGÍ LA FORMA</h3>
        <div className="inside-container">
            <button className="input-container">
                    <img className="shape" src={shape1} alt="image" />
                    <input className="input-radio" type="radio" />
            </button>
            <button className="input-contariner">
                    <img className="shape" src={shape2} alt="image" />
                    <input className="input-radio" type="radio" />
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





