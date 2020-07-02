import React from 'react';
import './Product.css'

const product = (props) => {
    return(
        <div key={ props.id } className="Item">
          <img src =  {props.url}  alt = {props.name} className="Img" />
          <h3>{ props.name }</h3>
          <h4>{ props.price }</h4>
          {/* <p>{ props.description }</p> */}
          <button className="btn"> Add to cart</button>
        </div>
    );
}

export default product;