import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
const Navbar = () => {
  const [menuopen, setmenuopen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  let lastscrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastscrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastscrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <div className="logo"></div>

        <ul className={menuopen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setmenuopen(!menuopen)}>
          {menuopen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
