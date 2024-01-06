import React, { Fragment } from "react";
import './Product.css'
const Product = (props) => {
  const { state, setState, newState, setNewState } = props;
  const addedItem = (item, index) => {
    const newProducts = [...state];
    newProducts.splice(index, 1, { ...item, added: true });
    setState(newProducts);
    setNewState((prev) => [...prev, { ...item, count: 1 }]);
  };
  return state.map((item, index) => (
    <Fragment key={item.productID}>
      <div className="corner-bg"></div>
      <div className="box">
        <div className="img-wrapper">
          <img src={item.productImage} className="brand-img" alt="Product" />
        </div>
        <h1 className="product-heading">{item.productHeading}</h1>
        <p className="product-info">{item.productInfo}</p>
        <div className="product-info-price">
          <p className="product-price">{item.productPrice}</p>
          <button className="add-card-btn" disabled={item.added ? true : false} onClick={() => addedItem(item, index)}>
            {item.added ? "Add" : "ADD TO CARD"}
          </button>
        </div>
      </div>
    </Fragment>
  ));
};
export default Product;
