import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../components/slides.css";

import slide from "../assests/slide.jpg"
import slide1 from "../assests/slide1.jpg"
import slide3 from "../assests/slide3.jpg"
import slide4 from "../assests/slide4.jpg"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
          
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="Second slide"
          
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
          
        />

     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Third slide"
          
        />

     
      </Carousel.Item>
    </Carousel>
  )
}

export default UncontrolledExample;