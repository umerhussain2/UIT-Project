import logo from "../logo/logo.png";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row p-3 d-flex align-items-baseline">
          <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-start align-items-baseline me-auto">
            <img src={logo} width="100" height="100" className="m-2 rounded" />
            <p className="m-1">Onlile Shop</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-end align-items-baseline ms-auto">
            <h4 className="m-2">Social Links</h4>
            <h3 className="m-2">
              <BsFacebook />
            </h3>
            <h3 className="m-2">
              <RiInstagramFill />
            </h3>
            <h3 className="m-2">
              <BsTwitter />
            </h3>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12 d-flex justify-content-center align-items-baseline">
            <h3 className="m-3">
              <AiOutlineCopyrightCircle />
            </h3>
            <h4 className="m-3">Online Shop</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
