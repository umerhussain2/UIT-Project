import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../../store/slice/CartSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../../context/Context.jsx";
import axios from "axios";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const auth = useAuth();
  const status = "Loding...";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/products");
      const data = res.data.module;
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleAdd = (pro) => {
    dispatch(addToCart(pro));
  };

  return (
    <>
      {products.length === "0" ? (
        <h1>{status}</h1>
      ) : (
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="products-heading">
                <h1>Products</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {products?.map((pro) => (
              <div
                key={pro.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card Card">
                  <img
                    src={pro.image}
                    className="card-img-top img-hover"
                    alt={pro.id}
                  />
                  <div className="card-body">
                    <h5 className="card-title cardTitle">{pro.title}</h5>
                    <p className="card-text cardDetail">
                      {pro.detail}
                      <Link to={`/productdetails/${pro.id}`}>See More</Link>
                    </p>
                    <p className="card-text cardPrice">${pro.price}</p>
                    {auth.user === "Public-User" && (
                      <button
                        onClick={() => handleAdd(pro)}
                        className="btn custom-butn"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyProducts;
