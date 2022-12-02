import React, { FC } from 'react'

export default function Preview({slideRight, slideLeft} : Props)  {


  
  type Props= {
    initAPP: boolean;
    shape: number;
    slideRight: FC;
    slideLeft: FC;
  }
  



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
