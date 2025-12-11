import React from "react";
import Banner from "./Banner/Banner";
import HowWorks from "./HowWorks";
import PromoSection from "./PromoSection/PromoSection";
import BrandsSection from "./BrandSection/BrandSection";

const Home = () => {
  return (
    <div className="my-4">
      <Banner></Banner>
      <HowWorks></HowWorks>
      <PromoSection></PromoSection>
      <BrandsSection></BrandsSection>
    </div>
  );
};

export default Home;
