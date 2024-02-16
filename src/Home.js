import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';  
import { Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import styles from './Home.module.css';
import { Form } from 'react-bootstrap';


function Home() {
  let [value, setValue] = useState([])
  let [data, setData] = useState([])

 useEffect(() => {
  loadUserData();
 }, [])

  const loadUserData = async () => {
    return await axios 
    .get("http://localhost:3001/cats")
    .then((response) => setData(response.data))
    .catch((err) => console.log(err));
  }
  console.log("data:", data);

  const handleSearch = async (event) => {
    event.preventDefault();
    return await axios.get(`http://localhost:3001/cats?q=${value}`) 
    .then((response ) => {
      setData(response.data);
      setValue("");
    })
    .catch((err) => console.log(err))
  }

  const handleReset = () => {
    loadUserData();
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
              placeholder="Search name, hobby, skill"
              className="form-control"
              value={value || ""}
              onChange={(event) => setValue(event.target.value)}
            />
            <Button type="submit" variant="outline-success">Search</Button>
            <Button variant="warning" onClick={handleReset} >Reset</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

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