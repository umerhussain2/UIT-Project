import c1 from "../../Images/Carousel/c2.png";
import c2 from "../../Images/Carousel/c4.png";
import c3 from "../../Images/Carousel/c6.png";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide mt-5 pt-1"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1500">
            <img src={c1} className="img-fluid d-block w-100" />
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src={c2} className="img-fluid d-block w-100" />
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img src={c3} className="img-fluid d-block w-100" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
