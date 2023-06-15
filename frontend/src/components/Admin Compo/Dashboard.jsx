import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer";
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

const Td = styled.td`
  border: 1px solid #7532f9;
`;

const Dashboard = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/products");
      const data = res.data.module;
      // console.log(data);
      setList(data);
    };
    fetchData();
  }, []);
  // console.log("list: ", list);

  return (
    <>
      <H2>Dashboard</H2>

      <div className="container mt-5 pt-5">
        <table className="table">
          <thead>
            <Tr>
              <th className="text-center">Product</th>
              <th className="text-center">Name</th>
              <th className="text-center">Detail</th>
              <th className="text-center">Price</th>
            </Tr>
          </thead>
          <tbody>
            {list?.map((product, index) => (
              <Tr key={index} className="p-3">
                <Td className="text-center">
                  <img src={product.image} width="100" className="img-hover" />
                </Td>
                <Td className="text-center">
                  <p className="p-3 mt-3">{product.title}</p>
                </Td>
                <Td className="text-center">
                  <p className="p-3 mt-3">{product.detail}</p>
                </Td>
                <Td className="text-center">
                  <p className="p-3 mt-3">${product.price}</p>
                </Td>
              </Tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
