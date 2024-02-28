import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        {/* Hamburger Menu */}
        <div className="nav-left">
          <div onClick={handleClick} className="hamburger">
            {click ? (
              <AiOutlineClose className="icon" />
            ) : (
              <AiOutlineMenu className="icon" />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item">
            <a
              href="https://x.com/stackablefi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Products
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://x.com/stackablefi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Build
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://x.com/stackablefi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://x.com/stackablefi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </li>
        </ul>

        {/* APP Button */}
        <div className="nav-right">
          <a
            className="btn app-button"
            href="https://ajnafi.com/ethereum/markets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            APP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
