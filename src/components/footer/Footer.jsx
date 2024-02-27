import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <h4>
            <a
              href="https://www.ajna.finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Product
            </a>
          </h4>
        </div>
        <div className="col">
          <h4>
            <a
              href="https://github.com/ajna-finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Build
            </a>
          </h4>
        </div>
        <div className="col">
          <h4>
            <a
              href="https://grants.ajnafi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grants
            </a>
          </h4>
        </div>
        <div className="col">
          <h4>
            <a
              href="https://discord.gg/v9Wca5deSc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </h4>
        </div>
        <div className="col">
          <h4>
            <a
              href="https://faqs.ajna.finance/faqs/general"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
