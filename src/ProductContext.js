import React, {createContext, useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ProductContext = React.createContext()
let params = useParams();

export const ProductProvider = (props) => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        async function getCats() {
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

        function getCats() {
            return axios.get("http://localhost:3001/cats").then (response =>{
                setCats(); 
                return new Promise (resolve => resolve(response.data));
              })
            
            
        }
    
        useEffect(() => {
            async function fetchData() {
                try {
                    const cat = await getCat(params.catId);
                    setCats(cat);
                } catch (error) {
                    console.error("cannot fetch cat", error); 
                }
            }
            fetchData();
        }, [params.catId]);

        function getCat(id) {
            return cats.find(c => c.id === id);
    
        }
    
        function newCat(cat) {
           return axios.post("http://localhost:3001/cats", cat).then
           (response => {
            getCats();
            return new Promise(resolve => resolve(response.data));
           })
         
        }
    
        function updateCat(id) {
    
        }
    
        function deleteCat(id) {
           axios.delete(`http://localhost:3001/cats/${id}`)
          .then (refreshCats)
        }
    
        return (
            <ProductContext.Provider value={{cats, refreshCats, getCats, getCat, newCat, updateCat, deleteCat}}>
                {props.children}
            </ProductContext.Provider>
        )
}