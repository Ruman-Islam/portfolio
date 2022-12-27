import React, { useState } from "react";

const Carousel = ({ project: { screenshots } }) => {
  const [current, setCurrent] = useState(0);

  const slideRight = () => {
    setCurrent(current === screenshots.length - 1 ? 0 : current + 1);
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? screenshots.length - 1 : current - 1);
  };

  return (
    <div className="custom-carousel">
      <div className="custom-carousel-wrapper">
        {screenshots.map((ss, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "custom-carousel-card custom-carousel-card-active"
                  : "custom-carousel-card"
              }
            >
              <img className="custom-carousel-image" src={ss} alt="" />
              <div className="custom-carousel-card-overlay"></div>
            </div>
          );
        })}
        <div onClick={slideLeft} className="custom-carousel-arrow-left">
          &lsaquo;
        </div>
        <div onClick={slideRight} className="custom-carousel-arrow-right">
          &rsaquo;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
