import { useState, useEffect } from "react";
import Footer from "../Footer";
import { toast } from "react-toastify";
import axios from "axios";
import styled from "styled-components";

const H2 = styled.h2`
  background-color: #ffffff;
  color: #7532f9;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 20vmax;
  margin: 0 auto;
  padding: 1vmax;
  margin-bottom: 3vmax;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 4vmax;
  font-weight: 300;
`;

const Tr = styled.tr`
  border: 1px solid #7532f9;
  background-color: #ffffff;
  font-size: 1.6vmax;
`;

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
      <H2>Orders List</H2>
      <div className="container mt-5 pt-5">
        {orders.length === 0 ? (
          <div className="row mb-5 pb-5">
            <div className="col-12 shadow rounded p-3 d-flex flex-column justify-content-center align-items-center">
              <h4>No Orders</h4>
              <p>Orders list is empty</p>
            </div>
          </div>
        ) : (
          <table className="table">
            <thead>
              <Tr>
                <th className="text-start">
                  <h4>Customer Details</h4>
                </th>
                <th className="text-start">
                  <h4>Items and Price</h4>
                </th>
                <th className="text-center">
                  <h4>Actions</h4>
                </th>
              </Tr>
            </thead>
            <tbody>
              {orders.map((items) => (
                <Tr key={items._id}>
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
                </Tr>
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
