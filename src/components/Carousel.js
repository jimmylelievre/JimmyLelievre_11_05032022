import React, { useState } from "react";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const nextPicture = () => {
    if (index >= pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousPicture = () => {
    if (index <= 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section className="carousel">
      <img className="img" src={pictures[index]} alt="" />

      <div type="button" onClick={nextPicture} className="button-next">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </div>
      <div type="button" onClick={previousPicture} className="button-previous">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Carousel;
