import React from 'react'
import {Row , Col, Container ,} from 'react-bootstrap';
import Ig from '../pages/Ig';
import About from '../pages/About';
import "../components/top.css";
import data2 from '../pages/data2';


function Topp2() {

  const aboutdata = data2.map(item =>{
    return(
      <About
      key={item.id}
      img = {item.img}
      intro = {item.intro}
      outro = {item.outro}
      paragraph={item.paragraph} />
    )
   })

  return (
    
        <Container>  
        <br></br>
        
    <Row>
  
  <Col md={8} className='d-flex flex-direction-column star' >
 
  
  
  <section >
    {aboutdata}
  </section>
  
  </Col>
   <Col md={4}  className="home__bg">
   <Ig/>
   
   </Col>
   </Row>
   </Container>
  
  )
}

export default Topp2
