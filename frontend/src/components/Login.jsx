import { useState } from "react";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "Admin") {
      auth.login(user);
      navigate("/");
    } else if (user === "Public-User") {
      auth.login(user);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 pt-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1 custom-bg-login">
            <h1>Select Radio Button to Choose Role</h1>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12 bg-lignt p-5 border">
            <h1 className="text-center border rounded">L O G I N</h1>
            <br />
            <label
              htmlFor="admin"
              className="form-label me-5 custom-text mb-5 border-bottom"
            >
              Admin
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="admin"
              value="Admin"
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <label
              htmlFor="public"
              className="form-label me-3 custom-text mb-5 border-bottom"
            >
              Public-User
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="public"
              value="Public-User"
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <button
              type="button"
              className="btn btn-lg custom-butn"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
