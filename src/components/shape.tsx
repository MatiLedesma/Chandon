import React, { FC } from "react";
import { useEffect, useState } from "react";
import shape1 from "../svg/shape1.svg";
import shape2 from "../svg/shape2.svg";

import Start from "./start";

import Color from "./color";
import Keyboard from "./keyboard";
import Preview from "./preview"
import End from "./end"





export default function Shape({initAPP} : Props) {

  type Props= {
    initAPP: boolean;
    shape: number;
    slideRight: FC;
    slideLeft: FC;
  }
  
  let fullWidht = document.body.clientWidth / 1.25;

  console.log('full width' + fullWidht)

  const slideLeft = () =>{
    var container:any = document.getElementById('scroll')
    container.scrollLeft = container.scrollLeft - fullWidht;
    console.log('scroll left')
  }

  const slideRight = () =>{
    var container:any = document.getElementById('scroll')
    container.scrollLeft = container.scrollLeft + fullWidht;
    console.log('scroll right')
  }


  
  // This state represent the selected side - 1 for left side / 2 for right side / 0 for unselected
  const [shape, setShape] = useState<number>(0);
  const [opc1, setOpc1] = useState<boolean>(false)
  const [opc2, setOpc2] = useState<boolean>(false)


  // useEffect(() => {
  //   if (opc1 === true) {
  //     setOpc2(false)
  //     console.log('opc1' + opc1)
  //     console.log('opc2' + opc2)
  //   }

  //   if (opc2 === true) {
  //     setOpc1(false)
  //     console.log('opc2' + opc2)
  //     console.log('opc1' + opc1)
  //   }
  // }, [opc1, opc2])

  function opc1true() {
    setOpc2(false)
    setOpc1(!opc1)
    setShape(1)
  }

  

  function opc2true() {
    setOpc2(!opc2)
    setOpc1(false)
    setShape(2)
  }

  function Return() {
    window.location.reload();
  }


    if (initAPP === true) {
      return (
        <div id="scroll" className="container-scroll">
         <div className="main-container">
           <h1>ELEGÍ LA FORMA</h1>
             <div className="inside-container">
                 <button className={opc1 ? "input-container__on" : "input-container__off"} onClick={() => opc1true()}>
                         <img className="shape" src={shape1} alt="image" />
                         <input checked={opc1}  value="2" className="input-radio" type="radio" />
                 </button>
                 <button className={opc2 ? "input-container__on" : "input-container__off"} onClick={() => opc2true()}>
                         <img className="shape" src={shape2} alt="image" />
                         <input checked={opc2}  value="2" className="input-radio" type="radio" />
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
              <Color shape={shape} slideLeft={slideLeft} slideRight={slideRight}/>
          </div>
          <div className="main-container">
              <Keyboard slideLeft={slideLeft}  slideRight={slideRight}/>
          </div>
          <div className="main-container">
              <Preview slideLeft={slideLeft}  slideRight={slideRight}/>
          </div>
          <div className="main-container">
              <End/>
          </div>
        </div>
       );
    } else {
      return(
        <Start />
      )
    }
}





