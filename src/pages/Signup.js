import React, { useState } from 'react'
import { Col ,Form ,Row , Button, Container } from 'react-bootstrap'
import {Link} from "react-router-dom"
import './Signup.css'
import BotImg from '../assests/alex.jpg'

function Signup() {
  const [ email , setEmail] = useState("");
  const [ password , setPassword] = useState("");
  const [ name , setName] = useState("");
// image upload states

const[image,setImage] = useState(null);
const[uploadingImage , setUploadingImage] = useState(false);
const [imagePreview , setImagePreview] = useState(null);

function ValidateImg(e){
  const file = e.target.files[0];
  if(file.size >= 1048576){
   return alert("max file size is 1mb");
  } else {
   setImage(file);
   setImagePreview(URL.createObjectURL(file));
  }
 }

 async function uploadImage(){
     const data = new FormData();
     data.append('file' , image);
     data.append('upload_preset' , 'irk7wqq9') 
     try {
      setUploadingImage(true);
      let res = await fetch("https://api.cloudinary.com/v1_1/ddnw1vhmn/image/upload" , { 
        method:'post',
        body:data
      })
      const urlData = await res.json();
      setUploadingImage(false);
      return urlData.url
     } catch(error){
      setUploadingImage(false);
      console.log(error);
     }
  }
 
 async function handleSignup(e){
 e.preventDefault();
 if(!image) return alert('please upload your profile picture');
 const url = await uploadImage(image);
 console.log(url);

 // signup the user
 }

  return (
    <Container>
    <Row>
    <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
    <Form style={{width:"80%" , maxWidth:500}} onSubmit={handleSignup}>
    <h1 className='text-center'>Create a account</h1>
    <div className='signup-profile-pic__container'>
      <img src={imagePreview || BotImg } className='signup-profile-pic'/>
      <label htmlFor='image-upload' className='image-upload-logo'>
        <i className='fas fa-plus-circle add-picture-icon'></i>
      </label>
      <input type="file"  id='image-upload' hidden accept='image/png , image/jpeg' onChange={ValidateImg}/>
    </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="your name" onChange={(e)=> setName(e.target.value)} value={name}/>
        <Form.Label> Email address</Form.Label>
        <Form.Control type="email" placeholder="your email"  onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}  value={password}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        {uploadingImage ? "signing up .... " : "signup"}
      </Button>
      <div className="py-4">
      <p className='text-center'>
         Already have an account ? <Link to="/login">Login</Link>
      </p>

      </div>
    </Form>
    </Col>
    <Col md={5} className="signup__bg"></Col>
    </Row>
    </Container>
  )
}

export default Signup
