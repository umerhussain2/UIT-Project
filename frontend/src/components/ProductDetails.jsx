import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:4000/api/");
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
      console.log("if: ", STATUS.loding);
    } else {
      setSingleProduct(product);
      // console.log("SP", singleProduct);
      // console.log("sp", singleProduct.image);
    }
  }, [product]);

  return (
    <>
      <div className="container-fluid mt-5 pt-3">
        <h1 className="p-3">Product Detail</h1>
        {product === undefined ? (
          <div className="container">
            <h1>{STATUS.loding}</h1>
          </div>
        ) : (
          <div className="container">
            <table className="table table-striped">
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
