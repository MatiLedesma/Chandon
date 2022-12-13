import React, { FC } from "react";
import { useEffect, useState } from "react";
import shape1 from "../svg/shape1.svg";
import shape2 from "../svg/shape2.svg";

import Start from "./start";

import Color from "./color";
import Keyboard from "./keyboard";
import Preview from "./preview"
import End from "./end"

export interface IForm {
  shape: string;
  color: string;
  message: string;
};

type Props = {
  initAPP: boolean;
  shape?: number;
  slideRight?: any;
  slideLeft?: any;
  callback: (value: boolean) => void;
}


export default function Shape({ initAPP, callback }: Props) {
  let fullWidht = document.body.clientWidth;

  
  // This state represent the selected side - 1 for left side / 2 for right side / 0 for unselected
  const [shape, setShape] = useState<number>(1);
  const [form, setForm] = useState<string>("shape1");
  const [formObj, setFormobj] = useState<IForm>({ shape: 'shape1', message: '', color: 'gold' });
  const [steps, setSteps] = useState<number>(0);
  
  const handleShape = (shape: string, shapeNumber: number) => {
    setForm(shape);
    setFormobj((state) => ({ ...state, shape: shape }));
    setShape(shapeNumber);
  }
  
  const slideLeft = () => {
    steps >= 0 && setSteps(steps - 1);
  }
  
  const slideRight = () => {
    steps <= 4 && setSteps(steps + 1);  
  }


  function Return() {
    callback &&
      callback(false);
  }


  if (initAPP === true) {
    return (
      <div id="scroll" className="container-scroll">
        <div className="main-container">
          {
            steps === 0 ? (
              <>
                <h1>ELEGÍ LA FORMA</h1>
                <div className="inside-container">
                  <button className={form === "shape1" ? "input-container__on" : "input-container__off"} onClick={() => handleShape("shape1", 1)}>
                    <img className="shape" src={shape1} alt="shape1" />
                    <input checked={form === "shape1"} value="2" className="input-radio" type="radio" />
                  </button>
                  <button className={form === "shape2" ? "input-container__on" : "input-container__off"} onClick={() => handleShape("shape2", 2)}>
                    <img className="shape" src={shape2} alt="shape2" />
                    <input checked={form === 'shape2'} value="2" className="input-radio" type="radio" />
                  </button>
                </div>
                <div className='btn-container'>
                  <button onClick={() => Return()} className='btn-back' >
                  </button>
                  <button onClick={() => slideRight()} className='btn-next' >
                  </button>
                </div>
              </>
            ) : steps === 1 ? (
              <Color shape={shape} slideLeft={slideLeft} slideRight={slideRight} callback={(value) => {
                setFormobj((state) => ({ ...state, color: value }));
              }} />
            ) : steps === 2 ? (
              <Keyboard slideLeft={slideLeft} slideRight={slideRight} callback={(value) => {
                setFormobj((state) => ({ ...state, message: value }))
              }} />

            ) : steps === 3 ? (
              <Preview slideLeft={slideLeft} slideRight={slideRight} formObject={formObj} />
            ) : steps === 4 ? (
              <End callback={(value) => callback(value)} />
            ) : null
          }
        </div>
      </div>
    );
  } else {
    return (
      <Start />
    )
  }
}





