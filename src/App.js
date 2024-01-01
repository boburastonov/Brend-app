import React, { useState } from "react";
import "./App.css";
import Product from "./Product";
import Payment from "./Payment";
import logoImg from "./img/nike.png";

const App = (e) => {
  const [stateArr, newState] = useState({
    brands: [
      {
        productID: 1,
        productImage: "./img/white.png",
        productHeading: "Nike Air Zoom Pegasus 36",
        productInfo:
          "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathibility across high-heat areas. A slimmer heel coller and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
        productPrice: "$" + 108.97,
      },
    ],
  });
  
  console.log(e.target);
  return (
    <>
      <section className="left-section">
        <div className="section-header">
          <img src={logoImg} alt="Logo" />
          <h1 className="section-title">Picked items</h1>
        </div>
        {stateArr.brands.map(function (item) {
          return (
            <>
              <Product
                productImage={item.productImage}
                productHeading={item.productHeading}
                productInfo={item.productInfo}
                productPrice={item.productPrice}
              />
            </>
          );
        })}
      </section>
      <section className="right-section">
        <div className="section-header">
          <img src={logoImg} alt="Logo" />
          <h1 className="section-title">Your cart</h1>
          <p className="text">Your cart is empty</p>
        </div>
        <Payment />
      </section>
    </>
  );
};
export default App;
