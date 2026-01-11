import React from "react";
import Banner from "./Banner/Banner";
import HowWorks from "./HowWorks";
import PromoSection from "./PromoSection/PromoSection";
import BrandsSection from "./BrandSection/BrandSection";
import OurProducts from "./OurProducts/OurProducts";
import BlogsSection from "./BlogsSection";
import NewsletterSection from "./NewsletterSection";
import FAQSection from "./FAQSection";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner></Banner>
      <HowWorks></HowWorks>
      <OurProducts></OurProducts>
      <PromoSection></PromoSection>
      <BlogsSection></BlogsSection>
      <NewsletterSection></NewsletterSection>
      <BrandsSection></BrandsSection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
