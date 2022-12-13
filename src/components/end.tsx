import img8 from '../img/8.webp';

type Props = {
  callback: (value: boolean) => void;
}

export default function end({ callback }: Props) {
  return (
      <div className='main-container' style={{ overflow: 'hidden', backgroundImage: 'url(' + img8 + ')', backgroundPosition: 'center', backgroundSize: '150%', backgroundRepeat: 'no-repeat' }}>
        <h1 style={{ color: 'white' }}>¡Muchas Gracias!</h1>
        <div className="inside-container">
        </div>
        <div className='btn-container'>
          <button onClick={() => callback(false)} className='btn-restart'>
          </button>
        </div>
      </div>
  )
}
