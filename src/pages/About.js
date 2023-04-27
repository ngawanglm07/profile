import React from 'react'
import "../pages/about.css";

function About(props) {
  return (
    <div className='movies'>
    <div className='apidata'>
     <img src={props.img}></img>
     <h6>{props.intro}</h6>
     <small>{props.outro}</small>
     <p> {props.paragraph}<a href="https://www.linkedin.com/in/ngawang-pelden-lama-03b152221/"> Read more ...</a></p>
     
    </div>
  </div>

   
  )
}
export default About;