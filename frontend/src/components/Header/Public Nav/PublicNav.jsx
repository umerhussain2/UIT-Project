import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const PublicNav = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <NavLink to="/cart" className="nav-link">
        <FaCartArrowDown />
        <sup className="cart-items-counter">{items.cartItems.length}</sup>
      </NavLink>
    </>
  );
};

export default PublicNav;
