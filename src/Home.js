import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';  
import { Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import styles from './Home.module.css';
import { Form } from 'react-bootstrap';

function Home({cats}) {
  if (!cats) console.log("not working");
  
  let catsToDisplay = [];
  if (cats.length > 3) {
      for (let i = 0; i < 3; i++) {
      catsToDisplay.push(cats[i]);}
  } else {
     catsToDisplay = cats;}    

{
      return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <img className={styles.img} src='https://thedesignlove.com/wp-content/uploads/2016/12/cat-logo-25-1024x700.jpg' alt='company logo'/>
        <Navbar.Brand href="#">Cool Cats 'n' Kittens</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./About">About</Nav.Link>
            <Nav.Link href="./Adoptees">Adoptees</Nav.Link>
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


      {catsToDisplay.map((cat) => (
     
       <Card key={cat.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cat.img} />
          <Card.Body>
            <Card.Title>{cat.name}</Card.Title>
            <Card.Text>
              {cat.hobby} 
            </Card.Text>
            <Button variant="primary">See more</Button>
          </Card.Body>
        </Card>
      ))}

      <Stack>
    
        <Outlet/>
      </Stack>
        </> 
      );
      
  
  }}

export default Home 