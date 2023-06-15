import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <NavLink to="/dashboard" className="nav-link">
        Dashboard
      </NavLink>
      <NavLink to="/orderslist" className="nav-link">
        Orders List
      </NavLink>
      <NavLink to="/ordersdetail" className="nav-link">
        Orders Detail
      </NavLink>
    </>
  );
};

export default AdminNav;
