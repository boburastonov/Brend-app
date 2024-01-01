import React from "react";
import './Product.css'

const Product = (props) => {
  return (
      <div className="box">
        <div className="img-wrapper">
          <img src={props.productImage} alt="Nike" className="brand-img" />
        </div>
        <h1 className="product-heading">{props.productHeading}</h1>
        <p className="product-info">{props.productInfo}</p>
        <div className="product-info-price">
          <p className="product-price">{props.productPrice}</p>
          <button className="add-card-btn">ADD TO CARD</button>
        </div>
      </div>
  );
};
export default Product;
