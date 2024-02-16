import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ProductContext = React.createContext()
export const ProductProvider = (props) => {
    const [cats, setCats] = useState([])

 
let params = useParams();  
let catId = parseInt(params.catId)


    useEffect(() => {
        refreshCats()
        }, [])
    
        function refreshCats() {
          return axios.get("http://localhost:3001/cats")
          .then(response => {
            setCats(response.data);
          })
        }

 function getCat(id) {
return axios.get(`http://localhost:3001/cats/${id}`)
 .then(response => 
    new Promise ((resolve) => resolve(response.data)))
  .catch((error) =>
        new Promise((_, reject) => reject(error.response.statusText))
      )
        }
//  return cats.find(cat => cat.id === parseInt(id))

        function newCat(cat) {
           return axios.post("http://localhost:3001/cats", cat).then
           (response => {
            refreshCats();
            return new Promise(resolve => resolve(response.data));
           })
         
        }
    
        function updateCat(cat) {
    return axios.put(`http://localhost:3001/cats/${cat.id}`, cat)
    .then (response => {
        refreshCats()
        return new Promise((resolve) => resolve(response.data))
    })
        }
    
        function deleteCat(id) {
           axios.delete(`http://localhost:3001/cats/${id}`)
          .then (refreshCats)
          .catch(error => {
            console.error('Error deleting cat:', error);
        });
    }
          
        return (
            <ProductContext.Provider value={{cats, refreshCats, getCat, newCat, updateCat, deleteCat}}>
                {props.children}
            </ProductContext.Provider>
        )
}

export default ProductContext;