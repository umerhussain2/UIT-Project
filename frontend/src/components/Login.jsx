import { useState } from "react";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import styled from "styled-components";

const H2 = styled.h2`
  background-color: #ffffff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 15vmax;
  margin: 0 auto;
  padding: 1vmax;
  margin-bottom: 3vmax;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  color: #7532f9;
  font-size: 3vmax;
  font-weight: 400;
`;

const Div = styled.div`
  border: 2px solid #7532f9;
  border-radius: 10px;
  width: 50vmax;
  margin: 5vmax auto;
  padding: 3vmax;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 15vmax;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1.8vmax;
  padding: 1vmax;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const Button = styled.div`
  margin: 20px auto;
  padding-top: 10px;
`;

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
      <H2>L O G I N</H2>
      <Div className="container mt-5 pt-3">
        <Wrapper>
          <label htmlFor="admin" className="form-label">
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
        </Wrapper>
        <Wrapper>
          <label htmlFor="public" className="form-label">
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
        </Wrapper>
        <Button>
          <button
            type="button"
            className="btn btn-lg custom-butn"
            onClick={() => handleLogin()}
          >
            Login
          </button>
        </Button>
      </Div>
      <Footer />
    </>
  );
};

export default Login;
