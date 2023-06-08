import { useDispatch, useSelector } from "react-redux";
import { orderDone } from "../../store/slice/ShippedSlice";
import Footer from "../Footer";

const OrdersDetail = () => {
  const shipped = useSelector((state) => state.shipped);
  const dispatch = useDispatch();

  const handleOrderDone = (itemId) => {
    dispatch(orderDone(itemId));
  };

  return (
    <>
      <div className="container-fluid mt-5 pt-3">
        <h1>Shipped Orders</h1>
        {shipped.length === 0 ? (
          <div className="row">
            <div className="col-12 shadow rounded p-3 d-flex flex-column justify-content-center align-items-center">
              <h4>No Orders Shipped</h4>
              <p>Currently list is empty</p>
            </div>
          </div>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>
                  <h3 className="text-start">Customer Details</h3>
                </th>
                <th>
                  <h3 className="text-start">Items and Price</h3>
                </th>
                <th>
                  <h3 className="text-start">Done</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {shipped.map((items) => (
                <>
                  <tr key={items.id}>
                    <td>
                      <h4 className="text-start">Name: {items.name}</h4>
                      <h4 className="text-start">Contact: {items.mobileNum}</h4>
                      <h4 className="text-start">City: {items.city}</h4>
                      <h4 className="text-start">Address: {items.address}</h4>
                    </td>
                    <td>
                      <h5 className="text-start">
                        Items Quintity: {items.orderData.totalItems}
                      </h5>
                      <h5 className="text-start">
                        Items Total Ammount: {items.orderData.itemsTotal}
                      </h5>
                      <h5 className="text-start">
                        Shipping Charges: {items.orderData.shipping}
                      </h5>
                      <h5 className="text-start">Tax: {items.orderData.tax}</h5>
                      <h5 className="text-start">
                        Subtotal: {items.orderData.totalPayment}
                      </h5>
                    </td>
                    <td>
                      <button
                        onClick={() => handleOrderDone(items.id)}
                        className="btn custom-butn"
                      >
                        Order Delivered
                      </button>
                    </td>
                  </tr>
                </>
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
