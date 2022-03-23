import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <Header></Header>
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </div>
    </div>
  );
};

export default Error404;
