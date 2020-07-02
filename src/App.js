import React, { useState, useEffect } from 'react';
import './App.css';
import store from  './store';
import Product from './Components/Product.js';

function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/products")
      .then((res) => res.json())
      .then((result) => {
        store.dispatch({
          type: "initialize",
          payload: {
            value: result,
          },
        });
      });
  }, []);

  store.subscribe(() => {
    setProducts(store.getState());
  });
  console.log(products.length);
  console.log(products);

  return (
  <div className="App">
    <h1>DTDL E-Shop</h1>
    <div className = "Products">
      {
        products.map((item) => (
          <Product
            key = {item.id} 
            name = {item.name} 
            price = {item.price} 
            description = {item.description}
            url = {item.url}/>
        ))
      }
    </div>
  </div>
  );
}

export default App;
