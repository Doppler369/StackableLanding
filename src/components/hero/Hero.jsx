import React from "react";
import MainVideo from "../../assets/video.mp4";
import "./Hero.css";

const hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>
          <span className="blue">Permissionless </span> Decentralized
        </h1>
        <h1>
          <span className="blue">Oraclefree </span> Money Markets
        </h1>
        <div className="btn-group">
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>xx</h2>
      </div>
    </div>
  );
};

export default hero;
