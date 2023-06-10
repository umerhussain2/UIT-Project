import Footer from "./Footer";
import Carousel from "./Home Compo/Carousel";
import MyProducts from "./Home Compo/MyProducts";
import Services from "./Home Compo/Services";

const Home = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <Carousel />
        <Services />
        <MyProducts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
