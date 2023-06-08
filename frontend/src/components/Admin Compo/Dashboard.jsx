import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer";
import axios from "axios";

const Dashboard = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/");
      const data = res.data.module;
      // console.log(data);
      setList(data);
    };
    fetchData();
  }, []);
  // console.log("list: ", list);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-12 mt-3">
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="text-center">Product</th>
                <th className="text-center">Name</th>
                <th className="text-center">Detail</th>
                <th className="text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {list.map((product, index) => (
                <tr key={index} className="p-3">
                  <td className="text-center">
                    <img
                      src={product.image}
                      width="100"
                      className="img-hover"
                    />
                  </td>
                  <td className="text-center">
                    <p className="p-3 mt-3">{product.title}</p>
                  </td>
                  <td className="text-center">
                    <p className="p-3 mt-3">{product.detail}</p>
                  </td>
                  <td className="text-center">
                    <p className="p-3 mt-3">${product.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
