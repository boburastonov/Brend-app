import React, { Fragment, useState } from "react";
import "./App.css";
import Product from "./Product";
import Payment from "./Payment";
import logoImg from "./assets/nike.png";
import data from "./MockData";
const App = () => {
  const [state, setState] = useState(data);
  const [newState, setNewState] = useState([]);

  return (
    <>
      <section className="left-section">
        <div className="section-header">
          <img src={logoImg} alt="Logo" />
          <h1 className="section-title">Picked items</h1>
        </div>
        <Product
          state={state}
          setState={setState}
          newState={newState}
          setNewState={setNewState}
        />
      </section>
      <section className="right-section">
        <div className="section-header">
          <img src={logoImg} alt="Logo" />
          <h1 className="section-title pr">Your cart</h1>
        </div>
        <Payment
          state={state}
          setState={setState}
          newState={newState}
          setNewState={setNewState}
        />
      </section>
    </>
  );
};
export default App;
