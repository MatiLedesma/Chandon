import React from "react";
import { useState } from "react";
import shape1White from "../svg/shape1_white.svg";
import shape2White from "../svg/shape2_white.svg";
import shape1Gold from "../svg/shape1_gold.svg";
import shape2Gold from "../svg/shape2_gold.svg";

type Props = {
  initAPP?: boolean;
  shape: number;
  slideRight: any;
  slideLeft: any;
  callback: (value: string) => void;
}



export default function Color({ shape, slideRight, slideLeft, callback }: Props) {
  const [color, setColor] = useState<string>("gold");

  const handleChangeColor = (color: string) => {
    setColor(color);
    callback(color);
  };

  return (
    <div className="main-container">
      <h1>ELEGÍ EL COLOR</h1>
      <div className="inside-container">
        <button className={color === "gold" ? "input-container__on" : "input-container__off"} onClick={() => handleChangeColor('gold')}>
          <img className="shape" src={shape === 1 ? shape1Gold : shape2Gold} alt="gold" />
          <input checked={color === "gold"} value="2" className="input-radio" type="radio" />
        </button>
        <button className={color === "white" ? "input-container__on" : "input-container__off"} onClick={() => handleChangeColor('white')}>
          <img className="shape" src={shape === 1 ? shape1White : shape2White} alt="white" />
          <input checked={color === 'white'} value="2" className="input-radio" type="radio" />
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

