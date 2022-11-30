import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import  img1 from '../img/1.webp';
import  img2 from '../img/2.webp';
import  img3 from '../img/3.webp';
import  img4 from '../img/4.webp';
import  img5 from '../img/5.webp';
import  img6 from '../img/6.webp';
import  img7 from '../img/7.webp';
import  img8 from '../img/8.webp';
import  img9 from '../img/9.webp';
import  img10 from '../img/10.webp';
import  img11 from '../img/11.webp';
import  img12 from '../img/12.webp';
import  img13 from '../img/13.webp';
import  img14 from '../img/14.webp';
import  img15 from '../img/15.webp';
import  img16 from '../img/16.webp';
import  img17 from '../img/17.webp';
import  img18 from '../img/18.webp';
import  img19 from '../img/19.webp';
import  img20 from '../img/20.webp';


export default function start() {
  return (

    <div className="container-start" >
    
    <h1>¡Personalizá tu regalo!</h1>

    <div className='button-start'>
      <svg className="svg">
      <clipPath id="starClip" clipPathUnits="objectBoundingBox"><path d="M0.5,0.76,0.277,1,0.322,0.672,0,0.643 l0.278,-0.169 L0.099,0.198,0.401,0.315,0.5,0,0.599,0.315,0.901,0.198,0.722,0.474 l0.278,0.169,-0.322,0.029,0.044,0.328"></path></clipPath>
      </svg>
      <button className="starClip">
          <h2>start</h2>
      </button>
    </div>

    <Carousel controls={false} interval={3000} indicators={false} fade>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img3}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img4}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img5}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img6}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img7}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img8}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img9}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img10}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img11}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img12}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img13}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img14}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img15}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img16}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img17}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img18}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img19}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carrousel"
          src={img20}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
