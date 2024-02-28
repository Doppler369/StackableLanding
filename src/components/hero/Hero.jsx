import React from "react";
import MainVideo from "../../assets/video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
      <h1>Permissionlessly Deploy <span className="blue">Money Markets</span> and <span className="blue">Liquidity Pools</span></h1>
<h1>From Top Protocols With a <span className="blue">No-Code UI</span></h1>
        <div className="btn-group">
        <button type="button" class="btn btn-outline">Learn More</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>xx</h2>
      </div>
    </div>
  );
};

export default Hero;
