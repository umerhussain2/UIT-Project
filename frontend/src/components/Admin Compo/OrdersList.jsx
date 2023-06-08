import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../store/slice/OrdersSlice";
import { addToShipped } from "../../store/slice/ShippedSlice";
import Footer from "../Footer";
import axios from "axios";

const OrdersList = () => {
  const ordesList = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get("http://localhost:4000/api/admin/orders");
      const data = res.data;
      // console.log(data);
      setOrders(data);
    };
    fetchOrders();
  }, []);

  // console.log(orders);

  const handleRemoveOrder = (productId) => {
    dispatch(deleteOrder(productId));
  };

  const handleAddToShipped = (items) => {
    dispatch(addToShipped(items));
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row mb-3">
          <div className="col-12 mt-3">
            <h1>Orders List</h1>
          </div>
        </div>
        {orders.length === 0 ? (
          <div className="row">
            <div className="col-12 shadow rounded p-3 d-flex flex-column justify-content-center align-items-center">
              <h4>No Orders</h4>
              <p>Orders list is empty</p>
            </div>
          </div>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="text-start">
                  <h4>Customer Details</h4>
                </th>
                <th className="text-start">
                  <h4>Items and Price</h4>
                </th>
                <th className="text-center">
                  <h4>Cancle Order</h4>
                </th>
                <th className="text-center">
                  <h4>Send Order</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((items) => (
                <tr key={items._id}>
                  <td className="text-start">
                    <p>Name: {items.name}</p>
                    <p>Contact: {items.contact}</p>
                    <p>City: {items.address}</p>
                    <p>Address: {items.city}</p>
                  </td>
                  <td className="text-start">
                    <p>Items Quintity: {items.orderData.totalItems}</p>
                    <p>Items Total Ammount: {items.orderData.itemsTotal}</p>
                    <p>Shipping Charges: {items.orderData.shipping}</p>
                    <p>Tax: {items.orderData.tax}</p>
                    <p>Subtotal: {items.orderData.totalPayment}</p>
                  </td>
                  <td className="text-center">
                    <p className="p-4 mt-5">
                      <button
                        onClick={() => handleRemoveOrder(items.id)}
                        className="btn custom-butn"
                      >
                        Delete Order
                      </button>
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="p-4 mt-5">
                      <button
                        onClick={() => handleAddToShipped(items)}
                        className="btn custom-butn"
                      >
                        Shipped Order
                      </button>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrdersList;
