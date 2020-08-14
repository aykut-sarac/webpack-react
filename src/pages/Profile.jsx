import React from "react";
import { useAuth } from "../auth/AuthAPI";

function Profile(props) {
  const { setAuthTokens } = useAuth();
  function logOut() {
    setAuthTokens();
    //localStorage.removeItem("token");
  }
  return (
    <div className="page-section">
      <div className="container">
        <div className="col justify-content-center align-items-center">
          <h1 className="display-4">Welcome Back!</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            quam necessitatibus ipsum deserunt ratione porro tempora corrupti
            quae omnis numquam?
          </p>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              role="button"
              onClick={logOut}
            >
              Log Out
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
