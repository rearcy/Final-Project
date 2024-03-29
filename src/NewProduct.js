import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Card.module.css';

function NewProduct() {
let params = useParams()
  let [cat, setCat] = useState({
    id: params.catId,
    name: "",
    hobby:"",
    skill: "",
    img: "",
    price: 0
})
  let {newCat, getCat, updateCat, cats } = useContext(ProductContext)
let {name, hobby, skill, price, img, id} = cat
let navigate = useNavigate();

  useEffect(() => {
    if (id === undefined) return 
    async function fetch() {
      await getCat(id) 
      .then((cat) => setCat(cat))
    }
    fetch()
  }, [id])

  function handleChange(event) {
    setCat((preValue) => {
      return {...preValue, [event.target.name]: event.target.value}
    });
  }

  function addOrUpdate() {
    if (id === undefined) {
      return newCat(cat)
    } else {
      return updateCat(cat)
    }
  }

    function handleSubmit(event) {
     event.preventDefault()
     addOrUpdate() .then((cat) => 
     navigate('/cats'))
        
    }


  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group className={styles.group} >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={name}  onChange={handleChange}/>
      </Form.Group>

      <Form.Group className={styles.group} >
        <Form.Label>Hobby</Form.Label>
        <Form.Control type="text" name="hobby" value={hobby}  onChange={handleChange}/>
      </Form.Group>

      <Form.Group className={styles.group} >
        <Form.Label>Skill</Form.Label>
        <Form.Control type="text" name="skill" value={skill}  onChange={handleChange}/>
      </Form.Group>

      <Form.Group className={styles.group} >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" value={price}  onChange={handleChange}/>
      </Form.Group>

      <Form.Group className={styles.group}>
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="img" value={img}  onChange={handleChange}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewProduct;