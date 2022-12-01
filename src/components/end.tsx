import React from 'react'
import  img8 from '../img/8.webp';

export default function end() {
  return (
    <div className='container-end'>
      <h1 style={{color: 'white'}}>¡Muchas Gracias!</h1>
      <div className='btn-container'>
      <button className='btn-restart'>
      </button>
      </div>
      <img className="img_carrousel" src={img8} alt="image" style={{position: 'absolute'}}/>
    </div>
  )
}
