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
      <div className="Cv-card">
        <h1 className="my-4 card-heading">KARTHIK | VENKATESH</h1>
        <div className="container px-5">
          <p className="text-center my-4">
            I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME. IT’S EASY.
            JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR OWN CONTENT AND
            MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG AND DROP ME ANYWHERE YOU
            LIKE ON YOUR PAGE.
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
