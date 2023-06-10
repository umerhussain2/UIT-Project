import { useEffect, useState } from "react";
import Footer from "../Footer";
import axios from "axios";
import { toast } from "react-toastify";

const OrdersDetail = () => {
  const [shippedList, setShippedList] = useState([]);

  useEffect(() => {
    getAllShippedOrd();
  }, []);

  const getAllShippedOrd = async () => {
    const res = await axios.get("http://localhost:4000/api/admin/shipped");
    const data = res.data;
    // console.log(data);
    setShippedList(data);
  };

  const handleOrderDone = async (id) => {
    // alert(id);
    const done = await axios.delete(
      `http://localhost:4000/api/admin/shipped/${id}`
    );
    toast.success("Order delivered", {
      theme: "colored",
      position: "bottom-left",
    });
    // console.log(done);
    getAllShippedOrd();
  };

  return (
    <>
      <div className="container-fluid mt-5 pt-3">
        <h1>Shipped Orders</h1>
        {shippedList.length === 0 ? (
          <div className="row">
            <div className="col-12 shadow rounded p-3 d-flex flex-column justify-content-center align-items-center">
              <h4>No Orders</h4>
              <p>Shipped list is empty</p>
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
                  <h4>Done</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {shippedList.map((items) => (
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
                    <div className="p-4 mt-5 d-flex justify-content-center">
                      <button
                        className="btn custom-butn"
                        onClick={() => handleOrderDone(items.id)}
                      >
                        Order Delivered
                      </button>
                    </div>
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

export default OrdersDetail;
