import React from "react";
import './Payment.css'
import prImage from './img/odyssey.png';

function Payment (props) {
    return (
      <div className="payment-box">
        <div className="brand-wrapper">
          <img src={prImage} alt="nike" />
        </div>
        <div className="payment-info">
          <h3 className="product-name">Nike Odyssey</h3>
          <h1 className="product-price">$108.87</h1>
          <div className="product-count">
            <div className="dec-wrapper">
              <span>&#8678;</span>
            </div>
            1
            <div className="inc-wrapper">
              <span>&#10153;</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment;