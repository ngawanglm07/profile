import React from 'react'
import UncontrolledExample from './slides'
import "../components/top.css";


import {Row , Col, Container , Button} from 'react-bootstrap';

import Twitter from '../pages/Twitter';

function Topp() {
  return (
    <Container>  
    <Row>
  <Col md={8} className='d-flex flex-direction-column star' >
   <UncontrolledExample/>
  </Col>
   <Col md={4}  className="home__bg">

   <div className='wifi'>
   <h6>Check out my tweets <img src="../img/wifi.gif"></img></h6>
   <Twitter/>
   </div>
   
 
   

   </Col>
   </Row>
   </Container>
 
  )
}

export default Topp
