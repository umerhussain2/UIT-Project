import { useEffect, useState } from "react";
import { removeToCart, getTotals } from "../../store/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer";
import { toast } from "react-toastify";
import axios from "axios";

const Checkout = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [orders, setOrders] = useState([]);
  const [disable, setDisable] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get("http://localhost:4000/api/admin/orders");
      const data = res.data;
      // console.log("data:", data);
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const postOrder = async () => {
    await axios.post("http://localhost:4000/api/", {
      id: orders.length + 1,
      name,
      contact,
      address,
      city,
      totalItems: cart.cartTotalQuantity,
      itemsTotal: cart.cartTotalAmmount,
      shipping: 40,
      tax: 53,
      totalPayment: cart.cartTotalAmmount + 40 + 53,
    });
    toast.success("Order submit", {
      theme: "colored",
      position: "bottom-left",
    });
  };

  const handleOnSubmitOrder = async () => {
    await postOrder();
    const userOrder = {
      id: orders.length + 1,
      name,
      contact,
      address,
      city,
      totalItems: cart.cartTotalQuantity,
      itemsTotal: cart.cartTotalAmmount,
      shipping: 40,
      tax: 53,
      totalPayment: cart.cartTotalAmmount + 40 + 53,
    };
    setOrders([...orders, userOrder]);
    setName("");
    setContact("");
    setCity("");
    setAddress("");
  };

  const handleRemoveToCart = (cartItem) => {
    dispatch(removeToCart(cartItem));
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <h1 className="mt-5 p-3 mb-5">Checkout</h1>
        {cart.cartItems?.map((cartItem, index) => (
          <div
            key={index}
            className="row border-bottom border-dark p-2 custom-text"
          >
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
                <p>Quintity</p>
                <p className="p-3">{cartItem.cartQuantity}</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 p-1 mb-1 d-flex align-items-center justify-content-center">
              <h4> ${cartItem.price * cartItem.cartQuantity} </h4>
            </div>
          </div>
        ))}
        <div className="row mb-3 custom-text">
          <form onSubmit={handleFormOnSubmit}>
            <div className="col-12 col-sm-12 col-md-12 p-3 mb-5  me-auto">
              <div className="row">
                <div className="container">
                  <h3 className="p-3 mb-3">
                    Fill the details otherwise your order will be canceled
                  </h3>
                  <div className="col-12 col-sm-12 col-md-12 mb-3">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Enter Fullname"
                      value={name}
                      required="required"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 mb-3">
                    <label htmlFor="contact" className="form-label">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      placeholder="Enter mobile number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="House no./ building / street / area"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 shadow p-3 mb-5 ms-auto bg-body-tertiary rounded">
              <h4>Order Summary</h4>
              <p className="d-flex justify-content-between">
                <span className="me-auto">Total items</span>
                <span className="ms-auto">{cart.cartTotalQuantity}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span className="me-auto">Items total</span>
                <span className="ms-auto">${cart.cartTotalAmmount}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span className="me-auto">Global Shipping</span>
                <span className="ms-auto">$40</span>
              </p>
              <p className="d-flex justify-content-between">
                <span className="me-auto">Estimated Import Fees Deposit</span>
                <span className="ms-auto">$53</span>
              </p>
              <p className="d-flex justify-content-between  border-top border-secondary">
                <span className="me-auto">Total Payment</span>
                <span className="ms-auto">
                  ${cart.cartTotalAmmount + 40 + 53}
                </span>
              </p>
              <button
                className="btn custom-butn"
                disabled={disable}
                onClick={() => handleOnSubmitOrder()}
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
