import React from "react";

const PromoSection = () => {
  return (
    <div className="bg-[#F5F0EB] py-12 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-[#8B4513] mb-4">
        Join Our Fashion Community
      </h2>
      <p className="text-[#7E5C52] mb-6 px-4 md:px-0">
        Stay updated with latest trends, exclusive offers, and new arrivals.
      </p>
      <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-8 py-3 rounded-lg shadow-md transition-transform transform ">
        Subscribe Now
      </button>
    </div>
  );
};

export default PromoSection;
