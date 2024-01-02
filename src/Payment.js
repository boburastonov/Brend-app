import React from "react";
import './Payment.css'
<<<<<<< HEAD
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
=======
import paymentImg from './assets/1.png'

function Payment (props) {
    return (
      <>
        <div className="corner-bg"></div>
        <div className="payment-box">
        <div className="brand-wrapper">
          <img src={paymentImg} alt="nike" />
        </div>
        <div className="payment-info">
          <h3 className="product-name">Nike Air Zoom Pegasus 36</h3>
          <h1 className="product-price">$108.87</h1>
          <div className="product-count">
            <div className="dec-wrapper count-wrapper">
              <span>&#8678;</span>
            </div>
            1
            <div className="inc-wrapper count-wrapper">
>>>>>>> 8073ae8 (add product functions)
              <span>&#10153;</span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
        </div>
      </>
>>>>>>> 8073ae8 (add product functions)
    );
}

export default Payment;