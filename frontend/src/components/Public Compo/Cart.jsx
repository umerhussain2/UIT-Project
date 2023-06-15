import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import {
  addToCart,
  removeToCart,
  decreaseCart,
  clearCart,
  getTotals,
} from "../../store/slice/CartSlice";
import { useEffect } from "react";
import Footer from "../Footer";
import styled from "styled-components";

const H2 = styled.h2`
  background-color: #ffffff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 10vmax;
  margin: 0 auto;
  padding: 1vmax;
  margin-bottom: 3vmax;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  color: #7532f9;
  font-size: 4vmax;
  font-weight: 300;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveToCart = (cartItem) => {
    dispatch(removeToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <H2>Cart</H2>
      <div className="container mt-5 p-3">
        {cart.cartItems.length === 0 ? (
          <div className="row p-3">
            <div className="col-12 p-2 d-flex align-items-center justify-content-center">
              <p>Your cart is currently empty</p>
            </div>
            <div className="col-12 p-2 d-flex align-items-center justify-content-start">
              <Link to="/" className="d-flex align-items-center">
                <BiArrowBack />
                <p>Start Shopping</p>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="row border-bottom border-dark p-2 ">
              <div className="col-12 col-sm-12 col-md-3 d-flex align-items-center justify-content-center">
                <h3>Product</h3>
              </div>
              <div className="col-12 col-sm-12 col-md-3 d-flex align-items-center justify-content-center">
                <h3>Price</h3>
              </div>
              <div className="col-12 col-sm-12 col-md-3 d-flex align-items-center justify-content-center">
                <h3>Quantity</h3>
              </div>
              <div className="col-12 col-sm-12 col-md-3 d-flex align-items-center justify-content-center">
                <h3>Total</h3>
              </div>
            </div>
            {cart.cartItems?.map((cartItem, index) => (
              <div key={index} className="row border-bottom border-dark p-2 ">
                <div className="col-12 col-sm-12 col-md-3 p-1 mb-1 d-flex align-items-center justify-content-center">
                  <img src={cartItem.image} width="150" alt="" />
                  <div className="d-flex flex-column align-items-center">
                    <div className="p-3">{cartItem.title}</div>
                    <div className="p-3">
                      <button
                        onClick={() => handleRemoveToCart(cartItem)}
                        className="btn custom-butn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-3 p-1 mb-1 d-flex align-items-center justify-content-center">
                  <h4>${cartItem.price}</h4>
                </div>
                <div className="col-12 col-sm-12 col-md-3 d-flex align-items-center justify-content-center">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <button
                      onClick={() => handleDecreaseCart(cartItem)}
                      className="btn custom-butn"
                    >
                      -
                    </button>
                    <p className="p-3">{cartItem.cartQuantity}</p>
                    <button
                      onClick={() => handleIncreaseCart(cartItem)}
                      className="btn custom-butn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-3 p-1 mb-1 d-flex align-items-center justify-content-center">
                  <h4> ${cartItem.price * cartItem.cartQuantity} </h4>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between mt-3">
              <div className="p-3 me-auto">
                <button
                  onClick={() => handleClearCart()}
                  className="btn custom-butn"
                >
                  Clear cart
                </button>
              </div>
              <div className="p-3 ms-auto">
                <h3>Subtotal</h3>
                <p>${cart.cartTotalAmmount}</p>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout">
                  <button className="btn custom-butn">Check out</button>
                </Link>
                <br />
                <div>
                  <BiArrowBack />
                  <Link to="/">Continue Shopping</Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
