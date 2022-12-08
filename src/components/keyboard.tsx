import React, { useState, useRef, ChangeEvent } from "react";
import KeyboardWrapper from '../components/keyboardWrapper';


type Props = {
  initAPP?: boolean;
  shape?: number;
  slideRight?: any;
  slideLeft?: any;
  callback?: (value: string) => void;
}


const Keyboard: React.FC<Props> = ({ shape, slideRight, slideLeft, callback }) => {
  const [input, setInput] = useState("");
  const keyboard: any = useRef();


  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input: string = event.target.value;

    if (input.length < 50) {
      setInput(input);
    }
    keyboard.current.setInput(input);
    console.log(input.length)
    console.log(input)
  };
  let length = input.length



  // function wrapText(input:string) {   // Esta función se encarga de hacer el corte de palabra

  //   var words = input.split(' ');
  //   var line = '';

  //   for(var n = 0; n < words.length; n++) {
  //     var testLine = line + words[n] + ' ';
  //     var metrics = ctx.measureText(testLine);
  //     var testWidth = metrics.width;
  //     if (testWidth > maxWidth && n > 0) {
  //       ctx.fillText(line, x, y);
  //       line = words[n] + ' ';
  //       y += lineHeight;
  //     }
  //     else {
  //       line = testLine;
  //     }
  //   }
  //   ctx.fillText(line, x, y);
  // }





  return (
    <div className="main-container">
      <h1>ESCRIBÍ TU MENSAJE</h1>
      <div className="inside-container" style={{ flexDirection: 'column' }}>
        <input maxLength={50} type="text" value={input}
          placeholder={"Toca acá para escribir"}
          onChange={e => onChangeInput(e)} style={{ height: '32vh', marginBottom: '3vh', flexShrink: '1', flexWrap: 'wrap'}} />
        <textarea value={input}  maxLength={50}   placeholder={"MAXIMO 50 CARACTERES"} className="textInput"><h3>{input}</h3></textarea>
        <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
      </div>
      <div className='btn-container'>
        <button onClick={() => slideLeft()} className='btn-back' >
        </button>
        <h4 style={{textAlign: 'center'}}>quedan {50 - length} caracteres</h4>
        <button onClick={() => {
          slideRight();
          callback && callback(input);
        }} className='btn-next' >
        </button>
      </div>

    </div>

  );
};

export default Keyboard;
