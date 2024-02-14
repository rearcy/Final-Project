import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ProductContext = React.createContext()
export const ProductProvider = (props) => {
    const [cats, setCats] = useState([])
let params = useParams();  

    useEffect(() => {
        async function getCats() {
            await refreshCats()
        }
        getCat()
    }, [])
    
        function refreshCats() {
          return axios.get("http://localhost:3001/cats")
          .then(response => {
            setCats(response.data);
          })
        }

        function getCats() {
            return axios.get("http://localhost:3001/cats").then 
            (response =>{ setCats(); 
                return new Promise (resolve => resolve(response.data));
              })
            
            
        }
    function getCat(id) {
        return cats.find(c => c.id ===id);
         

        }
    
     
    
        function newCat(cat) {
           return axios.post("http://localhost:3001/cats", cat).then
           (response => {
            refreshCats();
            return new Promise(resolve => resolve(response.data));
           })
         
        }
    
        function updateCat(id) {
    
        }
    
        function deleteCat(id) {
           axios.delete(`http://localhost:3001/cats/${id}`)
          .then (refreshCats)
          .catch(error => {
            console.error('Error deleting cat:', error);
        });
    }
          
        return (
            <ProductContext.Provider value={{cats, refreshCats, getCats, getCat, newCat, updateCat, deleteCat}}>
                {props.children}
            </ProductContext.Provider>
        )
}

export default ProductContext;