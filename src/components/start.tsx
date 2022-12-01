import React from 'react'

import ImgSlider from '../config/ImgSlider'
import logoWhite from '../img/logo-white.png'


export default function start() {
  return (

    <div className="container-inside" >
    
    <div className='container-start'>
      <h1 style={{color: 'white'}}>¡Muchas Gracias!</h1>
      <div className='button-start'>
      <svg className='svg'>
        <defs>
          <clipPath id="starClip" clipPathUnits="objectBoundingBox"><path d="M0.5,0.76 L0.277,1 L0.321,0.672 L0,0.643 L0.278,0.474 L0.099,0.198 L0.401,0.315 L0.5,0 L0.599,0.315 L0.901,0.198 L0.722,0.474 L1,0.643 L0.678,0.671 L0.722,0.999 L0.5,0.76"></path></clipPath>
        </defs>

      </svg>
        <button className="starClip">
            <h2>start</h2>
        </button>
      </div>
      <img className='logo' src={logoWhite} alt="logo"/>
    </div>
    <ImgSlider />
    </div>
  );
}
