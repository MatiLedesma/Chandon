import React from 'react'
import  img8 from '../img/8.webp';

export default function end() {
  return (
    <div className='container-start'>
      <img className="img_carrousel" src={img8} alt="image" />
      <div className='btn-container'>
      <button className='btn-restart'>
      </button>
      </div>
    </div>
  )
}
