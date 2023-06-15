import { NavLink } from "react-router-dom";
import { useAuth } from "../context/Context";
import { BsPersonCircle } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";
import AdminNav from "./Admin Nav/AdminNav";
import PublicNav from "./Public Nav/PublicNav";
import logo from "../logo/logo.png";

const Header = () => {
  const auth = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary mb-5 fixed-top navColor">
        <div className="container-fluid">
          {/* <h1 className="navbar-brand">Navbar</h1> */}
          <img
            src={logo}
            className="img-fluid Header-logo"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto ">
              <li className="nav-item">
                {auth.user === "Admin" && <AdminNav />}
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {auth.user === "Public-User" && <PublicNav />}
              </li>
              <li className="nav-item">
                {auth.user && (
                  <NavLink className="nav-link" to="/profile">
                    <BsPersonCircle /> Account
                  </NavLink>
                )}
                {!auth.user && (
                  <NavLink className="nav-link" to="/login">
                    <RiLoginCircleFill /> Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
// d-flex justify-content-sm-center align-items-sm-center
