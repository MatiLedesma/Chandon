import React, { FunctionComponent, useState, useRef, ChangeEvent } from "react";
import KeyboardWrapper from '../components/keyboardWrapper';



const Keyboard: FunctionComponent = () => {
  const [input, setInput] = useState("");
  const keyboard = useRef();


  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };



  console.log(input)


  return (


    <div className="main-container">
     <h1>ESCRIBÍ TU MENSAJE</h1>
      <div className="inside-container" style={{flexDirection: 'column'}}>
         <input type="text"       value={input}
        placeholder={"Toca acá para escribir"}
        onChange={e => onChangeInput(e)}  style={{height: '32vh', marginBottom: '3vh'}}/>
        <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
      </div>
      <div className='btn-container'>
          <button className='btn-back' >
          </button>
          <button className='btn-next' >
          </button>
      </div>
  </div>

  );
};

export default Keyboard;
