<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import "./Payment.css";

function Payment(props) {
  const { state, setState, newState, setNewState } = props;

  const filterCart = (id) => {
    const filteredCart = newState.filter((item) => item.productID !== id);
    setNewState(filteredCart);
  };

  const handleRemove = (item, index) => {
    const newProducts = [...state];
    newProducts.splice(index, 1, { ...item, added: false });
    setState(newProducts);
    filterCart(item.productID);
  };
  const handleIncrement = (item, index) => {
    const newCart = [...newState];
    newCart.splice(index, 1, { ...item, count: item.count + 1 });
    setNewState(newCart);
    console.log(item, index);
  };
  const handleDecrement = (item, index) => {
    if (item.count === 1) return handleRemove(item, index);

    const newCart = [...newState];
    newCart.splice(index, 1, { ...item, count: item.count - 1 });

    setNewState(newCart);
  };
  return (
    <>
      <div className="corner-bg"></div>
      {newState.map((item) => (
        <div className="payment-box" >
          <div className="brand-wrapper">
            <img src={item.productImage} alt="nike" key={item.productID}/>
          </div>
          <div className="payment-info">
            <h3 className="product-name">{item.productHeading}</h3>
            <h1 className="product-price">{item.productPrice}</h1>
            {newState.map((item, index) => (
              <div className="product-count">
                <button
                  className="dec-wrapper count-wrapper"
                  onClick={() => handleDecrement(item, index)}
                >
                  <span>&#8678;</span>
                </button>
                {item.count}
                <button
                  className="inc-wrapper count-wrapper"
                  onClick={() => handleIncrement(item, index)}
                >
                  <span>&#10153;</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>

  );
>>>>>>> ff8b8f1 (Add your cart functions)
}

export default Payment;
