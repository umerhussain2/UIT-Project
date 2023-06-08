import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <div className="d-flex flex-md-row flex-lg-row flex-sm-column flex-column justify-content-sm-start justify-content-md-center justify-content-lg-between ">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/orderslist" className="nav-link d-flex">
          Orders List
        </NavLink>
        <NavLink to="/ordersdetail" className="nav-link d-flex">
          Orders Detail
        </NavLink>
      </div>
    </>
  );
};

export default AdminNav;
