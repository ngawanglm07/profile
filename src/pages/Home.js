import React from 'react' ;

import { LinkContainer } from 'react-router-bootstrap';
import "../pages/Home.css";

import data from './data';

import Card from '../components/Cards';


import Topp from '../components/Topp';
import Topp2 from '../components/Topp2';








function Home() {

  const cards = data.map(item => {
    return(
    <Card
          key={item.id}
          img = {item.img}
          name = {item.name}
          spa ={item.spa}
          paragraph ={item.paragraph}
          open={item.open}
          location = {item.location}
          number ={item.Number}
          star={item.star}
          link={item.link}
          />
        )
     })

  
 
  



  return (
    <div className='Container'>
    <br></br>
    <section className="link ">
    <a href="#" > Hello and welcome to my portfolio website! My name is Ngawang Pelden lama and I am a web developer with 2 years of experience. I have a passion for creating beautiful web applications</a>
    </section>
    <br></br>
  <Topp/>
  <section className="card-list">
    {cards}
  </section>
  <Topp2/>
  <br></br>
  <p className='copyright'>© Copyright 2023 Ngawang_lm </p>
  <div className='foot'>
    <a href="https://www.keybr.com/profile/t5z5yau">
      <img src="../img/keybr.JPG"></img>
    </a>
    <a href="https://www.hackerrank.com/ngawanglm07">
      <img src="../img/hackerank.JPG"></img>
    </a>
    <a href="https://www.linkedin.com/in/ngawang-pelden-lama-03b152221/">
      <img src="../img/linkedln.JPG"></img>
    </a>
    <a href="https://github.com/ngawanglm07">
      <img src="../img/github.JPG"></img>
    </a>
  </div>
  <br></br>
  <br></br>



   
  
   
   
  

   
 
   </div>
  
  )
}

export default Home
