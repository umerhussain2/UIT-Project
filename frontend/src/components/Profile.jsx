import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import Footer from "./Footer";
import styled from "styled-components";

const H2 = styled.h2`
  background-color: #ffffff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 20vmax;
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
  width: 25vmax;
  margin: 5vmax auto;
  padding: 3vmax;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/", { replace: true });
  };
  return (
    <>
      <H2>P R O F I L E</H2>
      <Div className="container mt-1">
        <h1 className="mb-3 p-3 ms-auto me-auto">Welcom</h1>
        <h5 className="mb-4 p-3 custom-text">{auth.user}</h5>
        <button
          type="button"
          className="btn btn-lg custom-butn"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </Div>
      <Footer />
    </>
  );
};

export default Profile;
