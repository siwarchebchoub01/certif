import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import img from './carthage1.png';
import img1 from './carthage.png';
import img2 from './carthage2.png';
import './carousel.css';

import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
function Carouselle() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className='imgcarousel' src={img} alt="First slide" />
          <Carousel.Caption>
            <h3 className='des'>First slide label</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className='imgcarousel' src={img1} alt="Second slide" />
          <Carousel.Caption>
            <h3 className='des'>Second slide label</h3>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className='imgcarousel' src={img2} alt="Third slide" />
          <Carousel.Caption>
            <h3 className='des'>Second slide label</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselle;
