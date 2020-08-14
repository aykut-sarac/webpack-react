import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div class="jumbotron bg-dark">
      <div className="container">
        <h1 className="display-4 text-danger">Oops!</h1>
        <p className="lead text-warning">404</p>
        <hr className="my-4" />
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          error?
        </p>
        <p class="lead">
          <Link to="/" className="btn btn-primary btn-lg">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
