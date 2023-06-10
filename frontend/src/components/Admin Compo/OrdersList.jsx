import { useState, useEffect } from "react";
import Footer from "../Footer";
import { toast } from "react-toastify";
import axios from "axios";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [shipped, setShipped] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:4000/api/admin/orders");
    const data = res.data;
    // console.log("data: ", data);
    setOrders(data);
  };

  const handleRemoveOrder = async (id) => {
    const deleteOrder = await axios.delete(
      `http://localhost:4000/api/admin/orders/${id}`
    );
    toast.error("Order delete", {
      theme: "colored",
      position: "bottom-left",
    });
    // console.log(deleteOrder.data);
    // alert(id);
    fetchOrders();
  };

  const sendOrderData = async (id) => {
    let a = orders.find((item) => item.id === id);
    a.id = shipped.length + 1;
    // console.log("a", a);

    if (!shipped) {
      // console.log("IFshipped", shipped);
    } else {
      setShipped([...shipped, a]);
      // console.log("shipped", shipped);
      // consofle.log(a.id);
      const post = await axios.post("http://localhost:4000/api/admin/shipped", {
        id: shipped.length + 1,
        name: a.name,
        contact: a.contact,
        address: a.address,
        city: a.city,
        totalItems: a.totalItems,
        itemsTotal: a.itemsTotal,
        shipping: a.shipping,
        tax: a.tax,
        totalPayment: a.totalPayment,
      });
      toast.success("Send to shipped", {
        theme: "colored",
        position: "bottom-left",
      });
      // console.log("Post", post.data);
    }
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
                  <h4>Actions</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((items) => (
                <tr key={items._id}>
                  <td className="text-start">
                    <p>Name: {items.name}</p>
                    <p>Contact: {items.contact}</p>
                    <p>City: {items.address}</p>
                    <p>Address: {items.city}</p>
                  </td>
                  <td className="text-start">
                    <p>Items Quintity: {items.totalItems}</p>
                    <p>Items Total Ammount: {items.itemsTotal}</p>
                    <p>Shipping Charges: {items.shipping}</p>
                    <p>Tax: {items.tax}</p>
                    <p>Subtotal: {items.totalPayment}</p>
                  </td>
                  <td className="text-center">
                    <div className="p-4 mt-5 d-flex justify-content-around">
                      <button
                        onClick={() => handleRemoveOrder(items.id)}
                        className="btn custom-butn"
                      >
                        Delete Order
                      </button>

                      <button
                        onClick={() => sendOrderData(items.id)}
                        className="btn custom-butn"
                      >
                        Send to Shipped
                      </button>
                    </div>
                  </td>
                  <td className="text-center"></td>
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
