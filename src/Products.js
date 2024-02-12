import React, { useContext } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Products({cats}) {
    if (!cats) console.log("not working");
    
        return (
        <>
         
        {cats.map((cat) => (
       
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
          </> 
        );
        
    
    }


export default Products