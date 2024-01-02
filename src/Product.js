<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import './Product.css'

const Product = (props) => {
  return (
      <div className="box">
        <div className="img-wrapper">
          <img src={props.productImage} alt="Nike" className="brand-img" />
=======
=======
import React, { Fragment } from "react";
>>>>>>> 77090cb (add product function)
import './Product.css';

const Product = (props) => {
  const {state, setState, newState, newSetState}=props;

  return state.map(item => {
    <Fragment>
      <div className="corner-bg"></div>
      <div className="box">
<<<<<<< HEAD
        <div className="img-wrapper">
          <img src={fgm} alt="Nike" className="brand-img" />
>>>>>>> 8073ae8 (add product functions)
        </div>
        <h1 className="product-heading">{props.productHeading}</h1>
        <p className="product-info">{props.productInfo}</p>
        <div className="product-info-price">
          <p className="product-price">{props.productPrice}</p>
<<<<<<< HEAD
          <button className="add-card-btn">ADD TO CARD</button>
        </div>
      </div>
  );
};
export default Product;
=======
          <button className="add-card-btn" onClick={ () => addToCard(props.productId)}>ADD TO CARD</button>
=======
        <div className="img-wrappper">
          <img src="" alt="" />
>>>>>>> 77090cb (add product function)
        </div>
      </div>
    </Fragment>
  })


};
export default Product;
<<<<<<< HEAD
const cart = [];

function addToCard(id) {
  if(cart.some((item) => item.id === id)) {
    alert('hello world')
  } else {
    const item = props.find(product => product.id==id)
    cart.push(item)
    console.log(item);
  }
}
>>>>>>> 8073ae8 (add product functions)
=======
>>>>>>> 77090cb (add product function)
