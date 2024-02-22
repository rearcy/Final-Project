import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';  
import { Stack } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import styles from './Home.module.css';
import { Form } from 'react-bootstrap';
import ProductContext from './ProductContext';
import {Card} from 'react-bootstrap';



function Home() {
  let [value, setValue] = useState("")
  let [data, setData] = useState([])
  let {refreshCats} = useContext(ProductContext)

 useEffect(() => {
  refreshCats();
 }, [])

//  const filtered = response.data.filter(cat => cat.name.toLowerCase().includes(value.toLowerCase().trim()));

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log(value)
    try {
       const response = await axios.get(`http://localhost:3001/cats/?name=${value}`) ;
       console.log(response.data);
      
      setData(response.data);
    
    }
    catch(error){
      console.error(error)
    }  
  }

  const handleReset = () => {
    refreshCats();
     setValue("");
     setData([]);
  }

      return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img className={styles.img} src='https://thedesignlove.com/wp-content/uploads/2016/12/cat-logo-25-1024x700.jpg' alt='company logo'/>
        <Navbar.Brand href="#">Cool Cats 'N' Kittens</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./About">About</Nav.Link>
            <Nav.Link href="./cats">Adoptees</Nav.Link>
          </Nav>

          <Form onSubmit={handleSearch} className="d-flex">
            <input
              type="text"
              placeholder="Search by name"
              className="form-control"
              value={value || ""}
              onChange={(event) => setValue(event.target.value)}
            
            />
            <Button type="submit" variant="success">Search</Button>
            <Button variant="warning" onClick={handleReset} >Reset</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<ul>
  {data.map(cat => (
    <Card className="self-align-end" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cat.img} />
                <Card.Body>
                    <Card.Title><b>{cat.name}</b></Card.Title>
                    <Card.Text>
                   <b>Kitties sick skills:</b>  {cat.skill} 
                    <br/>
                   <b> Hobby:</b> {cat.hobby} 
                    <br/>
                    Adopt this bundle of joy for: ${cat.price}
                    </Card.Text>
                    <br/>
                    <Button variant="primary">Adopt Me!</Button>
                    <br/>
                </Card.Body>
                </Card> 
  ))}
</ul>
     <Stack>
          <Outlet/>
        <footer >
        <p className={styles.footer}> -- Cool Cats 'N' Kittens --<br/> Risa Pearcy</p>
        </footer>
        </Stack>
       
        </> 
      );
    }
  
 

export default Home 