import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app_navbar">
      <div className="app__navabar-logo">
        <img src={images.gericht} alt="logo" />
      </div>

      <ul className="navabr_links">
        <li className="p_opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p_opensans">
          <a href="#about">About</a>
        </li>
        <li className="p_opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p_opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p_opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensas">
          Log In / Register
        </a>
        <a href="/" className="p__opensas">
          Book Table
        </a>
      </div>
      <div className="app__nvbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex_center slice">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar_links-smallscreen">
              <li className="p_opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p_opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p_opensans">
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li className="p_opensans">
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li className="p_opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
