import React, { FC } from 'react'

  
type Props= {
  initAPP: boolean;
  shape: number;
  slideRight: any;
  slideLeft: any;
}



export default function Preview({slideRight, slideLeft} : Props)  {





  return (
    <div className="main-container">
       <h1>Vista previa</h1>
         <div className="inside-container">
         </div>
         <div className='btn-container'>
             <button onClick={() => slideLeft()} className='btn-back' >
             </button>
             <button onClick={() => slideRight()} className='btn-next' >
             </button>
         </div>
     </div>
   );
}
