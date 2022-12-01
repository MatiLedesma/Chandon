import React from 'react'

export default function msj() {

  return (
    <div className="main-container">
       <h1>ESCRIBÍ TU MENSAJE</h1>
         <div className="inside-container" style={{height:'40vh', margin: '3vh'}}>
            <div style={{position: 'absolute'}}>
              <h4>Toca acá para escribir</h4>
              <h4> Maximo 50 caracteres</h4>
            </div>
            <input type="text" name="" id=""  style={{height: '25vh'}}/>
         </div>
         <div className='btn-container'>
             <button className='btn-back' >
             </button>
             <button className='btn-next' >
             </button>
         </div>
     </div>
   );
 }