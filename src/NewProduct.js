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

  let {newCat } = useContext(ProductContext)
  let navigate = useNavigate();

  function handleChange(event) {
    setNewCat((preValue) => {
      return {...preValue, [event.target.name]: event.target.value}
    });
  }

    function handleSubmit(event) {
     event.preventDefault();
      newCat(newcat).then(() => {
        navigate('/Products');
      })
        
    }
  return (
    <Form onClick={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName" onChange={handleChange}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formHobby" onChange={handleChange}>
        <Form.Label>Hobby</Form.Label>
        <Form.Control type="text" placeholder="Kitties fav hobby" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSkill" onChange={handleChange}>
        <Form.Label>Skill</Form.Label>
        <Form.Control type="text" placeholder="Whats their skillset?" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice" onChange={handleChange}>
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImg" onChange={handleChange}>
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Image URL" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewProduct;