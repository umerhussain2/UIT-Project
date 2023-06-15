import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  value: 2.5,
  size: window.innerWidth < 600 ? 20 : 25,
  isHalf: true,
};

const H2 = styled.h2`
  background-color: #ffffff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  color: #7532f9;
  width: 30vmax;
  margin: 5px auto;
  padding: 1vmax;
  margin-bottom: 3vmax;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 4vmax;
  font-weight: 400;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:4000/api/products");
      const data = res.data.module;
      setAllProducts(data);
    };
    getData();
  }, []);

  const STATUS = {
    loding: "LODING...",
  };
  const product = allProducts.find((product) => product.id === parseInt(id));

  useEffect(() => {
    if (product === undefined) {
      // console.log("if: ", product);
      // console.log("if: ", STATUS.loding);
    } else {
      setSingleProduct(product);
      // console.log("SP", singleProduct);
      // console.log("sp", singleProduct.image);
    }
  }, [product]);

  return (
    <>
      <H2>Product Detail</H2>
      <div className="container-fluid mt-5 pt-3">
        {product === undefined ? (
          <div className="container">
            <h1>{STATUS.loding}</h1>
          </div>
        ) : (
          <div className="container">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <img
                      className="img-fluid rounded img-hover"
                      src={singleProduct.image}
                      width="300"
                    />
                  </td>
                  <td>
                    <h3>Details</h3>
                    <p>
                      {singleProduct.detail} Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Iure, provident!
                    </p>
                    <span>
                      <ReactStars {...options} />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Name</h3>
                    <p>{singleProduct.title}</p>
                  </td>
                  <td>
                    <h3>Price</h3>
                    <p>${singleProduct.price}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
