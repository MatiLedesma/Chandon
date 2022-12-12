import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";



interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<typeof Keyboard | null>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef
}) => {
  const [layoutName, setLayoutName] = useState("default");

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }

    // if (button === "{enter}") {
    // let textArea = document.getElementsByClassName('textInput')
    // console.log(typeof(button))
    // }

    if (button === "A") {
    console.log('A')
   }

   if (button === "Z") {
    console.log('Z')
   }
  };



  return (
    <Keyboard
    layout={ {
        'default': [
          '¡ ! @ ( ) ¿ ? - _',
          '1 2 3 4 5 6 7 8 9 0 {bksp}',
          'Q W E R T Y U I O P {enter}',
          'A S D F G H J K L Ñ . ,',
          'Z X C V B N M $ % &amp;',
          '{space}' ,
        ],
      } }
      
      display={{
        '{bksp}': 'Borrar',
        '{enter}': 'ENTER',
        '{space}': 'Espacio',
      }}

      newLineOnEnter={true}

      maxLength={
        50
      }

      mergeDisplay={true}
      keyboardRef={r => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log("Rendered")}
    />
  );
};

export default KeyboardWrapper;
