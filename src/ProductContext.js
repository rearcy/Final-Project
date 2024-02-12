import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [cats, setCats] = useState()

    useEffect(() => {
        async function getCat() {
            await refreshCats()
        }
        getCat()
    }, [])
    
        function refreshCats() {
          return axios.get("http://localhost:3001/cats")
          .then(response => {
            setCats(response.data)
          })
        }
    
        function getCat(id) {
            return axios.get(`http://localhost:3001/cats/${cats.id}`)
            .then (response => new Promise((resolve) => resolve(response.data)))
    
        }
    
        function newCat(cat) {
    
        }
    
        function updateCat(id) {
    
        }
    
        function deleteCat(id) {
           axios.delete(`http://localhost:3001/cats/${cats.id}`)
          .then (refreshCats())
        }
    
        return (
            <ProductContext.Provider value={{cats, refreshCats, getCat, newCat, updateCat, deleteCat}}>
                {props.children}
            </ProductContext.Provider>
        )
}