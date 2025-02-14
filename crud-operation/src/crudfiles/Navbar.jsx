import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  let token = localStorage.getItem("TOKEN");

  let handleLogout = () => {
    localStorage.removeItem("TOKEN");
    navigate("/login");
  };

  return (
    <nav>
      <div>
        <span className="crud">crud</span>
        <span className="crud">operation</span>
      </div>

      {token ? (
        <div className="regilogin">
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="regilogin">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
