// import React from "react";
// import styles from './Home.module.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Stack } from 'react-bootstrap';
// import { Outlet } from 'react-router-dom';


// function myNav() {
//     <>
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
        
//         <img className={styles.img} src='https://thedesignlove.com/wp-content/uploads/2016/12/cat-logo-25-1024x700.jpg' alt='company logo'/>
//         <Navbar.Brand href="#">Cool Cats 'n' Kittens</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="./">Home</Nav.Link>
//             <Nav.Link href="./About">About</Nav.Link>
//             <Nav.Link href="./Adoptees">Adoptees</Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     <Stack>
//         <Outlet/>
//     </Stack>
//     </>
// }

// export default myNav