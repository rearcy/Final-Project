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
import Display from "./HomeDisplay";

function Products(props) {

  let navigate = useNavigate()
  let {deleteCat} =useContext(ProductContext)
 

    function handleDelete(id) {
      deleteCat(id)
      navigate('/cats')
    }   

   
  const CatList = () => (
    <ProductContext.Consumer>
  
      {({cats}) => (
        
        <>
        <Link className={styles.productLink} to='/create'>Add a new resident</Link>
         <Stack>
            <Outlet  className="self-align-end"/>
          </Stack>
         <Row >
        
        {cats.map(cat => ( 
          <Col  key={cat.id} xs={12} sm={6} md={4} lg={3}>
          <Card className={styles.card}>
             <Card.Img className={styles.catImg} variant="top" src={cat.img} />
             <Card.Body className={styles.body}>
               <Card.Title><b>{cat.name}</b></Card.Title>
               <Card.Text>
               <b>Hobby:</b>  {cat.hobby} 
                 <br/>
                 Price: ${cat.price}
              </Card.Text>
              <div className={styles.button}> 
               <Link to={`/cats/${cat.id}/more`} variant="primary" className="btn btn-primary mx-3">See more</Link>
               
               <Button variant='warning' onClick={handleDelete.bind(this, cat.id)}>Delete {cat.name}</Button> 
               
               <Link to={`/cats/${cat.id}/edit`} className="btn btn-primary mx-3">Edit listing</Link>
               </div>
             </Card.Body>
          </Card>
          </Col>
          ))}
          
          </Row>  
            </> 
      ) } 
    </ProductContext.Consumer>
  ); 
  return CatList()
   
 }

export default Products

