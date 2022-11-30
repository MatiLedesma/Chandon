import React from 'react';
import './App.css';
import Shape from '../src/components/shape'
import Msj from '../src/components/msj'
import Color from '../src/components/color'


function App() {
  return (
    <div className="App">
      <div className="left">
        <svg className="svg">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.747,0 H0.714 A0.278,0.153,0,0,0,0.5,0.055 A0.278,0.153,0,0,0,0.286,0 h-0.033 A0.253,0.139,0,0,0,0,0.139 V0.86 A0.254,0.14,0,0,0,0.254,1 h0.024 a0.286,0.157,0,0,0,0.222,-0.058 a0.286,0.157,0,0,0,0.222,0.058 h0.024 A0.254,0.14,0,0,0,1,0.86 V0.139 A0.253,0.139,0,0,0,0.747,0"></path></clipPath>
        </svg>
        <div className="clipped">
        <Color />
      
        </div>
      </div>
    </div>
  )
}

export default App;


