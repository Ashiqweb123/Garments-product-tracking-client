import React from "react";
import Marquee from "react-fast-marquee";

const BrandsSection = () => {
  return (
    <div className="bg-[#FFF8F0] py-8">
      <h2 className="text-2xl font-bold text-center text-[#4B2E2E] mb-4">
        Our Brands
      </h2>

      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">Zara</span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">H&M</span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">
          Uniqlo
        </span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">Nike</span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">
          Adidas
        </span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">Puma</span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">
          Levi's
        </span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">
          Forever21
        </span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">Gap</span>
        <span className="mx-10 text-[#8B4513] text-xl font-semibold">
          Mango
        </span>
      </Marquee>
    </div>
  );
};

export default BrandsSection;
