import React from "react";
import "./About.css";
import Aloelogo from "../../assets/aloelogo.png";
import Ajnalogo from "../../assets/ajnalogo.png";
import Panopticlogo from "../../assets/panopticlogo.png";
import Uniswaplogo from "../../assets/uniswaplogo.png";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2></h2>
        <p>Stackable Finance empowers users by plugging into the legends around us</p>
        <div className="card-container">
          <a href="https://uniswap.org/" className="card-link">
            <div className="card">
              <AboutCard
                icon={<img src={Uniswaplogo} alt="Uniswap Logo" className="icon" />}
                heading="Uniswap"
                text="An industry-leading decentralized exchange. V3 introduced novel concentrated liquidity, next V4 introduces hooks to pools to redefine what it means to be programmable."
              />
            </div>
          </a>
          <a href="https://www.ajna.finance/" className="card-link">
            <div className="card">
              <AboutCard
                icon={<img src={Ajnalogo} alt="Ajna Finance Logo" className="icon" />}
                heading="Ajna Finance"
                text="A non-custodial, peer-to-pool, permissionless system that doesn't rely on external price feeds. This innovation brings seamless lending, borrowing, and a truly decentralized experience."
              />
            </div>
          </a>
          <a href="https://aloe.capital/" className="card-link">
            <div className="card">
              <AboutCard
                icon={<img src={Aloelogo} alt="Aloe Capital Logo" className="icon" />}
                heading="Aloe Capital"
                text="Offers permissionless lending on Uniswap by connecting lenders and market makers. Aloe II elevates capital optimization for yield seekers and active market makers to the next level."
              />
            </div>
          </a>
          <a href="https://panoptic.xyz/" className="card-link">
            <div className="card">
              <AboutCard
                icon={<img src={Panopticlogo} alt="Panoptic Logo" className="icon" />}
                heading="Panoptic"
                text="DeFi options trading for any token on Uniswap V3. Allowing risk management, permissionless pools, and enhanced capital efficiency. A professional defi experience for any skill level."
              />
            </div>
          </a>
          </div>
      </div>
    </div>
  );
};

export default About;
