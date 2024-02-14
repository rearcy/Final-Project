import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';
import { useNavigate } from 'react-router-dom';

function NewProduct() {

  let [newcat, setNewCat] = useState({
    name: "",
    hobby:"",
    skill: "",
    img: "",
    price: ""
})
let {name, hobby, skill, price, img} = newcat
  let {newCat } = useContext(ProductContext)
  let navigate = useNavigate();

  function handleChange(event) {
    setNewCat((preValue) => {
      return {...preValue, [event.target.name]: event.target.value}
    });
  }

    function handleSubmit(event) {
     event.preventDefault();
      newCat(newcat).then((newcat) => {
        navigate('/Products');
      })
        
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={name} placeholder="Enter name" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Hobby</Form.Label>
        <Form.Control type="text" name="hobby" value={hobby} placeholder="Kitties fav hobby" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Skill</Form.Label>
        <Form.Control type="text" name="skill" value={skill} placeholder="Whats their skillset?" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" value={price} placeholder="Price" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="img" value={img} placeholder="Image URL" onChange={handleChange}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewProduct;