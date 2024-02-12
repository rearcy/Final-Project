import React from 'react';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Products from './Products';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} >
        <Route index element={"Welcome, come take a look at our cool cats and kittens, up for adoption!"}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Adoptees' element={<Products/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
