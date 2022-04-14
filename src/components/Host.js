import React, { useState, useEffect } from "react";

const Host = ({ host }) => {
  return (
    <div className="profile">
      <p>{host.name}</p>
      <img
        className="picture-profile"
        src={host.picture}
        alt="photo de l'hôte"
      />
    </div>
  );
};

export default Host;
