import React from "react";
import "./Developer.css";
import Terminal from "../../assets/terminal.png";

const Developer = () => {
  return (
    <div className="developers">
      <div className="container">
        <div className="left">
          <h2> The Future of Vault Interaction </h2>
          <p>
            Stackable Finance is Building a <span className="blue"> Customizable </span> and {" "}
            <span className="blue"> Interactive </span> Defi Experience.
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Terminal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
