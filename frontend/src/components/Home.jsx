import styled from "styled-components";
import Footer from "./Footer";
import MyProducts from "./Home Compo/MyProducts";
import { CgMouse } from "react-icons/all";
import { BsChevronDoubleDown } from "react-icons/all";

const Div = styled.div`
  height: 100vmin;
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  color: white;
  ::after {
    content: "";
    width: 100vw;
    height: 100vmin;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    /* clip-path: polygon(50% 94%, 100% 82%, 100% 100%, 0 100%, 0 83%); */
    clip-path: polygon(51% 96%, 100% 82%, 100% 100%, 0 100%, 0 86%);
    /* clip-path: polygon(100% 72%, 0% 100%, 100% 100%); */
  }
`;

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 11vmax;
  /* margin: 5vmax; */
  font-weight: 600;
  font-size: 3.5vmax;
  color: #ffffff;
`;

const P = styled.p`
  font-weight: 300;
  font-size: 2.4vmax;
`;

const Button = styled.button`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vmax;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 35px;
  padding: 0.5vmax;
  height: 5.5vmax;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 2vmax;
  :hover {
    background-color: rgba(255, 255, 255, 0);
    color: #ffffff;
    scale: 1.1;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 2.1vmax;
  font-weight: 600;
  border-bottom: 1px solid rgba(21, 21, 21, 0.5);
  width: 20vmax;
  padding: 1vmax;
  margin: 5vmax auto;
  color: rgba(0, 0, 0, 0.7);
`;

const Home = () => {
  return (
    <>
      <Div className="banner">
        <P>Welcom to Ecommerce</P>
        <H1>FIND PRODUCTS BELOW</H1>
        <A href="#featured-product">
          <Button className="scroll">
            <CgMouse />
            <BsChevronDoubleDown />
          </Button>
        </A>
      </Div>
      <div className="container-fluid m-0">
        <H2 id="featured-product">Featured Products</H2>
        <MyProducts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
