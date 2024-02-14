import React from "react";
import { ProductContext } from "./ProductContext";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Cat() {
    let params = useParams();
    let id = parseInt(params.catId);

    return (
        <ProductContext.Consumer>
            {
                function ({getCat}) {
                    let cat = getCat(id);
                    return (
                        <>
                            {
                                cat ? (
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={cat.Img} />
                                    <Card.Body>
                                        <Card.Title>{cat.name}</Card.Title>
                                        <Card.Text>
                                        Kitties sick skills:{cat.skill} 
                                        Hobby: {cat.hobby} 
                                        Adopt the bundle of joy for: {cat.price}
                                        </Card.Text>
                                        <Button variant="primary">Adopt Me!</Button>
                                    </Card.Body>
                                    </Card> 
                                        ) :
                                        <p>Cat not found </p>
                            }
                        </>
                    )
                }
            }
        </ProductContext.Consumer>
    )
}

export default Cat;