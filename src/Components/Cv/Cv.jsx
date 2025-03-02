import { useEffect } from "react";
import "./Cv.css";

const Cv = () => {
  useEffect(() => {
    const cvCard = document.querySelector(".Cv-card");
    if (cvCard) {
      const cardHeight = cvCard.offsetHeight;
      cvCard.style.top = `-${cardHeight / 2}px`;
    }
  }, []);

  return (
    <>
      <div className="Cv-card mt-5">
        <h1 className="my-4 card-heading higlighted display-3">Karthik | Venkatesh</h1>
        <div className="container px-5">
          <p className="text-center my-4 text-uppercase px-5">
            Passionate about technology and innovation, We specialize in creating efficient and scalable solutions.
            With a strong foundation in Web Applications, We are always eager to learn and take on new challenges.
            Let's connect and build something amazing together.
          </p>
        </div>
        <button className="btn my-4 btn-outline-primary Cv-button">
          DOWNLOAD RESUME
        </button>
      </div>
    </>
  );
};

export default Cv;
