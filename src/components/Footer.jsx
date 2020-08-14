import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 ">
            <span className="copyright text-center">Copyright &copy; 2020</span>
          </div>
          <div className="col-md-6">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/news">News</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
