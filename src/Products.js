import React, { useContext, useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col } from "react-bootstrap";
import{ Row }from "react-bootstrap";
import styles from './Card.module.css';
import { ProductContext } from "./ProductContext";

function Products() {

  let navigate = useNavigate()
  let {deleteCat} =useContext(ProductContext)

    function handleDelete(id) {
      deleteCat(id)
      navigate('/Adoptees')
    }    

    function handleDetail(id) {
      navigate('/moreInfo')
    }

   
  const CatList = () => (
    <ProductContext.Consumer>
      {({cats}) => (
        <>
         <Link className={styles.productLink} to='/create'>Add a new resident</Link>
         <Row>
        <Col className="wrapper">
        {cats.map(cat => ( <Card className={styles.card} key={cat.id} style={{ width: '18rem'}}>
             <Card.Img variant="top" src={cat.img} />
             <Card.Body>
               <Card.Title>{cat.name}</Card.Title>
               <Card.Text>
                Hobby: {cat.hobby} 
                 <br/>
                 Price: {cat.price}
              </Card.Text>
               <Button  onClick={handleDetail} variant="primary">See more</Button>
               <Button variant='warning' onClick={handleDelete.bind(this, cat.id)}>Delete {cat.name}</Button>               <br/>
               <Link to='/edit'>Edit listing</Link>
             </Card.Body>
          </Card>
          ))};
          </Col>
          </Row>         
            </> 
      ) } 
    </ProductContext.Consumer>
  );

  return <CatList/>
 }

export default Products

