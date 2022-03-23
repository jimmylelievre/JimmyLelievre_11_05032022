import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import HousingCard from "../components/HousingCard";
import data from "../assets/data.json";
import Footer from "../components/Footer";
import banner from "../assets/banner.jpg";

const Home = () => {
  const [housingData, setHousingData] = useState([]);

  useEffect(() => {
    setHousingData(data);
  });
  return (
    <div>
      <Header></Header>
      <Banner text="Chez vous, partout et ailleurs" img={banner}></Banner>
      <section className="background">
        {housingData.map((housing) => (
          <HousingCard key={housing.id} props={housing}></HousingCard>
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
