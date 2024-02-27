import React from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2></h2>
        <p>Deploy an Isolated Lending Pool for any ERC20 or ERC721 NFT Token</p>
        <div className="card-container">
          <div className="card">
            <AboutCard
              icon={<SiHiveBlockchain className="icon" />}
              heading="INNOVATIVE DESIGN"
              text="Ajna is a new protocol for transparent, permissionless lending and borrowing."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiStrapi className="icon" />}
              heading="INTEROPERABILITY"
              text="Supports both fungible and non-fungible (NFT) assets as collateral, and anyone can create a lending market."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiFsecure className="icon" />}
              heading="TRUE DECENTRALIZATION"
              text="Ajna protocol operates without token whitelists, allowing users to permissionlessly lend and borrow."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<VscServerProcess className="icon" />}
              heading="VERIFIED AUDITS"
              text="In addition to rigorous testing , Ajna has code audits from industry leading agencies with verified reports."
            />
          </div>
        </div>
        <a href="https://ajnafi.com/ethereum/markets/" className="btn">
          APP
        </a>
      </div>
    </div>
  );
};

export default About;
