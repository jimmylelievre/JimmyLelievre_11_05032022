import React from "react";

const Banner = ({ text, img }) => {
  return (
    <div className="banner" style={{ backgroundImage: 'url("' + img + '")' }}>
      <div className="overlay"></div>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
