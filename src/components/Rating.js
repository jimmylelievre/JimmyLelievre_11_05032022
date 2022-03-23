import React from "react";
import EmptyStar from "./icon/EmptyStar";
import RedStar from "./icon/RedStar";

const Rating = ({ rating }) => {
  const ratingArray = Array.from({ length: 5 }, (_, i) =>
    i < rating ? 1 : 0
  ).map((rate, i) =>
    rate === 1 ? <RedStar key={i} /> : <EmptyStar key={i} />
  );

  return (
    <div>
      <span className="rating"> {ratingArray} </span>
    </div>
  );
};

export default Rating;
