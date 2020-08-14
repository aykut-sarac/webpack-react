import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="mainNav"
      className={
        !isScrolled
          ? "navbar fixed-top navbar-expand-lg navbar-dark"
          : "navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
      }
    >
      <div className="container">
        <Link to="/" className="navbar-brand js-scroll-trigger">
          HERO
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={isOpen ? "collapse navbar-collapse" : "navbar-collapse"}
          id="navbarResponsive"
        >
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        {/* <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={isOpen ? "collapse navbar-collapse" : "navbar-collapse"}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
