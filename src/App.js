import React, { useState } from "react";
import "./App.css";
import Product from "./Product";
import Payment from "./Payment";
<<<<<<< HEAD
import logoImg from "./img/nike.png";

const App = (e) => {
=======
import logoImg from "./assets/nike.png";
import data from "./MockData";

const App = () => {
<<<<<<< HEAD
>>>>>>> 8073ae8 (add product functions)
  const [stateArr, newState] = useState({
    brands: [
      {
        productID: 1,
<<<<<<< HEAD
        productImage: "./img/white.png",
=======
        productImage: "./assets/1.png",
>>>>>>> 8073ae8 (add product functions)
        productHeading: "Nike Air Zoom Pegasus 36",
        productInfo:
          "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathibility across high-heat areas. A slimmer heel coller and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
        productPrice: "$" + 108.97,
      },
<<<<<<< HEAD
    ],
  });
  
  console.log(e.target);
=======
      {
        productID: 2,
        productImage: "./assets/2.png",
        productHeading: "Nike Air Zoom Pegasus 36 Shield",
        productInfo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum. Possimus quo labore id eum in dolor? Molestiae expedita molestias quasi magni non reiciendis, assumenda eligendi quisquam adipisci nihil consequuntur.",
        productPrice: "$" + 89.97,
      },
      {
        productID: 3,
        productImage: "./assets/3.png",
        productHeading: "Nike CruzrOne",
        productInfo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum. Possimus quo labore id eum in dolor? Molestiae expedita molestias quasi magni non reiciendis, assumenda eligendi quisquam adipisci nihil consequuntur.",
        productPrice: "$" + 100.97,
      },
      {
        productID: 4,
        productImage: "./assets/4.png",
        productHeading: "Nike Epic React Flyknit 2",
        productInfo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum. Possimus quo labore id eum in dolor? Molestiae expedita molestias quasi magni non reiciendis, assumenda eligendi quisquam adipisci nihil consequuntur.",
        productPrice: "$" + 89.97,
      },
      {
        productID: 5,
        productImage: "./assets/5.png",
        productHeading: "Nike Odyssey React Flyknit 2",
        productInfo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum. Possimus quo labore id eum in dolor? Molestiae expedita molestias quasi magni non reiciendis, assumenda eligendi quisquam adipisci nihil consequuntur.",
        productPrice: "$" + 71.97,
      },
      {
        productID: 6,
        productImage: "./assets/6.png",
        productHeading: "Nike React Infinity Run Flyknit",
        productInfo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum. Possimus quo labore id eum in dolor? Molestiae expedita molestias quasi magni non reiciendis, assumenda eligendi quisquam adipisci nihil consequuntur.",
        productPrice: "$" + 160,
      },
      {
        productID: 7,
        productImage: "./assets/7.png",
        productHeading: "Nike React Miler",
        productInfo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum. Possimus quo labore id eum in dolor? Molestiae expedita molestias quasi magni non reiciendis, assumenda eligendi quisquam adipisci nihil consequuntur.",
        productPrice: "$" + 130,
      },
      {
        productID: 8,
        productImage: "./assets/8.png",
        productHeading: "Nike Renew Ride",
        productInfo:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatum. Possimus quo labore id eum in dolor? Molestiae expedita molestias quasi magni non reiciendis, assumenda eligendi quisquam adipisci nihil consequuntur.",
        productPrice: "$" + 60.97,
      },
    ],
  });
=======
  const [state, setState] = useState(data);
<<<<<<< HEAD
  const [newState, newSetState] = useState([]);
>>>>>>> 77090cb (add product function)
=======
  const [newState, setNewState] = useState([]);
>>>>>>> ff8b8f1 (Add your cart functions)

>>>>>>> 8073ae8 (add product functions)
  return (
    <>
      <section className="left-section">
        <div className="section-header">
          <img src={logoImg} alt="Logo" />
          <h1 className="section-title">Picked items</h1>
        </div>
<<<<<<< HEAD
        {state.map(function (item) {
          console.log(item);
          return (
            <Fragment key={item.productID}>
              <Product
<<<<<<< HEAD
<<<<<<< HEAD
=======
                productId={item.productID}
>>>>>>> 8073ae8 (add product functions)
                productImage={item.productImage}
                productHeading={item.productHeading}
                productInfo={item.productInfo}
                productPrice={item.productPrice}
=======
                state={state}
                setState={setState}
                newState={newState}
                newSetState={newSetState}
>>>>>>> 77090cb (add product function)
              />
            </Fragment>
          );
        })}
=======
        <Product
          state={state}
          setState={setState}
          newState={newState}
          setNewState={setNewState}
        />
>>>>>>> ff8b8f1 (Add your cart functions)
      </section>
      <section className="right-section">
<<<<<<< HEAD
        <div className="section-header">
          <img src={logoImg} alt="Logo" />
          <h1 className="section-title">Your cart</h1>
          <p className="text">Your cart is empty</p>
=======
        <div className="section-header srt">
          <img src={logoImg} alt="Logo" />
          <h1 className="section-title">Your cart</h1>
<<<<<<< HEAD
>>>>>>> 8073ae8 (add product functions)
=======
          {/* <p className="text">Your cart is empty</p> */}
>>>>>>> ff8b8f1 (Add your cart functions)
        </div>
        <Payment
          state={state}
          setState={setState}
          newState={newState}
          setNewState={setNewState}/>
      </section>
    </>
  );
};
export default App;
