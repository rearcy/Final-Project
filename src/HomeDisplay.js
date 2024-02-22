import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import styles from './Home.module.css'
import { useNavigate, Link } from 'react-router-dom';
import { Col , Row} from 'react-bootstrap';

function Display({cats}) {
let navigate = useNavigate()

    if (!cats) console.log("not working");
  
    let catsToDisplay = [];
    if (cats.length > 3) {
        for (let i = 0; i < 3; i++) {
        catsToDisplay.push(cats[i]);}
    } else {
       catsToDisplay = cats;}    
   
// function handleClick(id) {
//   navigate('cats/:catId')
// }

return (
    <>
     <h2 className={styles.welcome}>Welcome, come take a look at our cool cats and kittens, up for adoption!</h2>
       <Row className="justify-content-center">
{catsToDisplay.map((cat) => (
  <Col className={styles.wrapper} xs={12} sm={6} md={4} lg={3}>
    <Card className={styles.card} key={cat.id} style={{ width: '18rem' }}>
       <Card.Img className={styles.catImg} variant="top" src={cat.img} />
       <Card.Body className={styles.body} >
         <Card.Title>{cat.name}</Card.Title>
         <Card.Text>
          Hobby: {cat.hobby} 
         </Card.Text>
         <Link to={`/cats/${cat.id}/more`} variant="primary" className="btn btn-primary mx-3">See more</Link>
       </Card.Body>
     </Card> 
     </Col>
))}
</Row>
     </> 
 ) 
 }

 


export default Display 