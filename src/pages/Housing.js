import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../assets/data.json";
import Tags from "../components/Tags";
import DropDownMenus from "../components/DropDownMenus";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";

const Housing = () => {
  const params = useParams([]);

  const [housingData, setHousingData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dataH = data.find((e) => e.id === params.id);
    setHousingData(dataH);
    if (!dataH) {
      navigate("/error");
    }
  }, []);

  if (housingData === null) {
    return null;
  }

  return (
    <div className="housing">
      <Header />
      <Carousel pictures={housingData.pictures} />

      <div className="description">
        <div className="title-host">
          <div>
            <h1>{housingData.title}</h1>
            <h2>{housingData.location}</h2>
            <Tags props={housingData} />
          </div>
          <div className="tags-rating">
            <Host host={housingData.host} />
            <Rating rating={housingData.rating} />
          </div>
        </div>
        <div className="dropDownMenus">
          <DropDownMenus name="Description" content={housingData.description} />
          <DropDownMenus name="Equipement" content={housingData.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Housing;
