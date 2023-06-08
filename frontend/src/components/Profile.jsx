import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import Footer from "./Footer";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="container-fluid mt-5 pt-3">
        <div className="row">
          <div className="col-12 col-sm-12 p-5 mt-1 text-center custom-bg-login">
            <h1>
              Welcom <br /> {auth.user}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-12 col-sm-12 p-5 border">
            <h1 className="text-center border rounded mb-3 p-3">
              P R O F I L E
            </h1>
            <h5 className="mb-4 p-3 custom-text">{auth.user}</h5>
            <button
              type="button"
              className="btn btn-lg custom-butn"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
