import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4">
            <h1 className="services text-center">
              <FaShippingFast />
              <span className="ms-auto me-auto"> Shipping</span>
            </h1>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <h1 className="services text-center">
              <BiSupport />
              <span className="ms-auto me-auto">24/7 Support</span>
            </h1>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <h1 className="services text-center">
              <FaRegThumbsUp />
              <span className="ms-auto me-auto">Best Quality</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
