import React from 'react';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Products from './Products';
import cats from './db';
import HomeDisplay from './HomeDisplay';
import NewProduct from './NewProduct';
import EachProduct from './EachProduct';


function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
      <Route path=':?q=({value})' element={<Home/>}/>
         <Route index element={<HomeDisplay cats={cats.cats} />}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/cats' element={<Products cats={cats.cats}/>}>
         <Route index element="Click a kitty to see more!"/>
         <Route path=":catId/edit" element={<NewProduct/>}/>
          <Route path=":catId/more" element={<EachProduct/>}/>
          </Route>
          <Route path='/create' element={<NewProduct/>}/>  
      </Route>
      <Route path='*' element={"Page not found"}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
