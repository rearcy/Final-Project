import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import styles from './Home.module.css'

function Display({cats}) {
    if (!cats) console.log("not working");
  
    let catsToDisplay = [];
    if (cats.length > 3) {
        for (let i = 0; i < 3; i++) {
        catsToDisplay.push(cats[i]);}
    } else {
       catsToDisplay = cats;}    
   
return (
    <>
     <h2>Welcome, come take a look at our cool cats and kittens, up for adoption!</h2>

{catsToDisplay.map((cat) => (
  <div className='col-4'>
    <Card className={styles.card} key={cat.id} style={{ width: '18rem' }}>
       <Card.Img variant="top" src={cat.img} />
       <Card.Body>
         <Card.Title>{cat.name}</Card.Title>
         <Card.Text>
          Hobby: {cat.hobby} 
         </Card.Text>
         <Button variant="primary">See more</Button>
       </Card.Body>
     </Card> 
     </div>
))}
     </> 
 ) 
 }

 


export default Display 