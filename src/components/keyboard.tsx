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
    setInput(input);
    keyboard.current.setInput(input);
  };


  return (
    <div className="main-container">
      <h1>ESCRIBÍ TU MENSAJE</h1>
      <div className="inside-container" style={{ flexDirection: 'column' }}>
        <input type="text" value={input}
          placeholder={"Toca acá para escribir"}
          onChange={e => onChangeInput(e)} style={{ height: '32vh', marginBottom: '3vh' }} />
        <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
      </div>
      <div className='btn-container'>
        <button onClick={() => slideLeft()} className='btn-back' >
        </button>
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
