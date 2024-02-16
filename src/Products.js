import React, { useContext, useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col } from "react-bootstrap";
import{ Row }from "react-bootstrap";
import styles from './Card.module.css';
import { ProductContext } from "./ProductContext";
import {Stack }from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Products(props) {

  let navigate = useNavigate()
  let {deleteCat} =useContext(ProductContext)
 

    function handleDelete(id) {
      deleteCat(id)
      navigate('/cats')
    }    

    // function handleClick(cat) {
    //   navigate(`/cats/${cat.id}/more`)
    // }

   
  const CatList = () => (
    <ProductContext.Consumer>

         
      {({cats}) => (
        
        <>
         <Stack>
            <Outlet/>
          </Stack>
         <Link className={styles.productLink} to='/create'>Add a new resident</Link>
         <Row>
        <Col className="wrapper">
        {cats.map(cat => ( <Card className={styles.card} key={cat.id} style={{ width: '18rem'}}>
             <Card.Img variant="top" src={cat.img} />
             <Card.Body>
               <Card.Title><b>{cat.name}</b></Card.Title>
               <Card.Text>
               <b>Hobby:</b>  {cat.hobby} 
                 <br/>
                 Price: ${cat.price}
              </Card.Text>
               <Link to={`/cats/${cat.id}/more`} variant="primary">See more</Link>
               <br/>
               <Button variant='warning' onClick={handleDelete.bind(this, cat.id)}>Delete {cat.name}</Button> 
                <br/>
               <Link to={`/cats/${cat.id}/edit`}>Edit listing</Link>
             </Card.Body>
          </Card>
          ))};
          </Col>
          </Row>  
            </> 
      ) } 
    </ProductContext.Consumer>
  ); 
  return CatList()
   
 }

export default Products

