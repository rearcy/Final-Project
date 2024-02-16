import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Card.module.css';
import { Link } from "react-router-dom";

function Cat(props) {

let params = useParams()
let {getCat} = useContext(ProductContext)
let [cat, setCat] = useState()

    useEffect(() => {
        async function fetch() {
            await getCat(params.catId) 
            .then((cat) => setCat(cat))
        }
        fetch()
    }, [params.catId]);

function detailCard() {
    let {id, name, skill, hobby, price, img} = cat 
    return (
                <Card className={styles.card} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><b>{name}</b></Card.Title>
                    <Card.Text>
                   <b>Kitties sick skills:</b>  {skill} 
                    <br/>
                   <b> Hobby:</b> {hobby} 
                    <br/>
                    Adopt this bundle of joy for: ${price}
                    </Card.Text>
                    <br/>
                    <Button variant="primary">Adopt Me!</Button>
                    <br/>
                    <Link to={`/cats/${cat.id}/edit`}>Edit listing</Link>
                </Card.Body>
                </Card> 
   
    )
}
 if (cat === undefined) return <p>Undefined</p>

return detailCard()
}

export default Cat;