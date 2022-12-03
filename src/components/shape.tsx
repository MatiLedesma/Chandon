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
  callback?: (value: boolean) => void;
}


export default function Shape({ initAPP, callback }: Props) {
  let fullWidht = document.body.clientWidth / 1.25;

  const slideLeft = () => {
    var container: any = document.getElementById('scroll')
    container.scrollLeft = container.scrollLeft - fullWidht;
    console.log('scroll left')
  }

  const slideRight = () => {
    var container: any = document.getElementById('scroll')
    container.scrollLeft = container.scrollLeft + fullWidht;
    console.log('scroll right')
  }

  // This state represent the selected side - 1 for left side / 2 for right side / 0 for unselected
  const [shape, setShape] = useState<number>(0);
  const [form, setForm] = useState<string>("shape1");
  const [formObj, setFormobj] = useState<IForm>({ shape: '', message: '', color: '' });

  const handleShape = (shape: string, shapeNumber: number) => {
    setForm(shape);
    setFormobj((state) => ({ ...state, shape: shape }));
    setShape(shapeNumber);
  }

  function Return() {
    callback &&
      callback(false);
  }


  if (initAPP === true) {
    return (
      <div id="scroll" className="container-scroll">
        <div className="main-container">
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
        </div>
        <div className="main-container">
          <Color shape={shape} slideLeft={slideLeft} slideRight={slideRight} callback={(value) => {
            setFormobj((state) => ({...state, color: value}));
          }} />
        </div>
        <div className="main-container">
          <Keyboard slideLeft={slideLeft} slideRight={slideRight} callback={(value) => {
            setFormobj((state) => ({...state, message: value}))
          }} />
        </div>
        <div className="main-container">
          <Preview slideLeft={slideLeft} slideRight={slideRight}  formObject={formObj} />
        </div>
        <div className="main-container">
          <End />
        </div>
      </div>
    );
  } else {
    return (
      <Start />
    )
  }
}





