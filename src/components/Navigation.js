import React from 'react'
import {Nav,Navbar,Container  , Button , Form} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from "../assests/logo.png"
import "../components/navigation.css"


function Navigation() {
  return ( 
    <nav >     
    <Navbar  expand="lg"   className='color-nav'>
      <Container>
      <LinkContainer to="/">
         <Navbar.Brand >
         <img  src={logo} alt="idk" style={{width:120,height:50}}/>
        </Navbar.Brand>
      </LinkContainer>
      <LinkContainer to="/">
      <Nav.Link > <h2 style={{fontFamily:'Carlito' , color:'black'}} className="ngawang">Ngawang</h2></Nav.Link>
      </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
         
         
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </nav> 
  )
}

export default Navigation
