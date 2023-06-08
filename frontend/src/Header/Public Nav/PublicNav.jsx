import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const PublicNav = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div className="d-flex flex-md-row flex-lg-row flex-sm-column flex-column justify-content-sm-start">
        <NavLink to="/cart" className="nav-link">
          <FaCartArrowDown />
          <sup className="cart-items-counter">{items.cartItems.length}</sup>
        </NavLink>
      </div>
    </>
  );
};

export default PublicNav;
