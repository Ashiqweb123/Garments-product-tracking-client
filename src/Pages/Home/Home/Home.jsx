import React from "react";
import Banner from "./Banner/Banner";
import HowWorks from "./HowWorks";
import PromoSection from "./PromoSection/PromoSection";
import BrandsSection from "./BrandSection/BrandSection";
import OurProducts from "./OurProducts/OurProducts";

const Home = () => {
  return (
    <div className="my-4">
      <Banner></Banner>
      <HowWorks></HowWorks>
      <OurProducts></OurProducts>
      <PromoSection></PromoSection>
      <BrandsSection></BrandsSection>
    </div>
  );
};

export default Home;
