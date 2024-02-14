import React, { useContext, useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col } from "react-bootstrap";
import{ Row }from "react-bootstrap";
import styles from './Card.module.css';
import { ProductContext } from "./ProductContext";



function Products({cats}) {

let navigate = useNavigate()
let {catId} = useParams() 

let { getCat, deleteCat} = useContext(ProductContext)
let [cat, setCat] = useState([])

let { id, name, hobby, skill, price, img} = cat

if (!cats) console.log("not working");


 useEffect(() => {
    async function fetch() {
      await getCat(catId).then((cat) => setCat(cat))
    }
   fetch()
  }, [catId])


    function handleDelete(id) {
      deleteCat(id)
      navigate('/Adoptees')
    }    

    function handleDetail(id) {
      navigate('/moreInfo')
    }

        return (
        <>
        <Link className={styles.productLink} to='/create'>Add a new resident</Link>
         <Row>
        {cats.map((cat) => (
       <Col className="wrapper">
         <Card className={styles.card} key={id} style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Hobby: {hobby} 
                <br/>
                Price: {price}
              </Card.Text>
              <Button  onClick={handleDetail} variant="primary">See more</Button>
              <Button variant='warning' onClick={handleDelete.bind(this, id)}>Delete {name}</Button>
              <br/>
              <Link to='/edit'>Edit listing</Link>
            </Card.Body>
          </Card>
          </Col>
         
        ))}
         </Row>
          </> 
        );
        
    
    }


export default Products