import React, { useState, useEffect } from 'react';
import './App.css';
import store from  './store';
import Product from './Components/Product.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  const [list, setList] = useState([]);
  //const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:5000/products")
      .then((res) => res.json())
      .then((result) => {
        store.dispatch({
          type: "initialize",
          payload: {
            list: result,
          },
        });
      });
  }, []);
  

  store.subscribe(() => {
    setList(store.getState());
  });
  console.log(list.length);
  

  return (
  <div className="App">
    <h1>DTDL E-Shop</h1>
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <div className = "Products">
            {
              list.map((item) => (
                  <Link to={"/" + list.indexOf(item)} style={{textDecoration:'none'}}>
                    <Product
                      key = {item.id} 
                      name = {item.name} 
                      price = {item.price} 
                      description = {item.description}
                      url = {item.url}/>
                  </Link>
              ))
            }
          </div>)}> 
      </Route>
      <Route
        path="/:id"
        exact
        render={({ match }) => (
          <div>
            <div className="productDetails">
              <img
                className="card-img-top"
                src={list[match.params.id].url}
                alt="Card image cap"
                className="productImg"></img>
              <div className="prodDescription">
                <h1>{list[match.params.id].name}</h1>
                <p>{list[match.params.id].description}</p>
                <h1>{list[match.params.id].price}</h1>
                </div>
            </div><br></br>
            <Link to={"/"}><button className="back_btn">Back</button></Link>
          </div>
        )}
      ></Route>
    </Router>
  </div>
  );
}

export default App;
