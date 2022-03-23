import React from "react";
import { NavLink } from "react-router-dom";

const HousingCard = ({ props }) => {
  return (
    <NavLink to={`/logement/${props.id}`}>
      <div className="housing-card">
        <div className="overlay"></div>
        <img src={props.cover} alt="cover" />
        <h2>{props.title}</h2>
      </div>
    </NavLink>
  );
};

export default HousingCard;
