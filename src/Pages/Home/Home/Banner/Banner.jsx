import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../../assets/banner/banner-1.png";
import banner2 from "../../../../assets/banner/banner-2.jpg";
import banner3 from "../../../../assets/banner/banner-3.jpg";
import banner4 from "../../../../assets/banner/banner-4.jpg";

const Banner = () => {
  return (
    <div className="my-4">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        transitionTime={800}
        stopOnHover={true}
        swipeable={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="relative">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 px-4">
            <p className="text-white text-sm md:text-lg font-semibold mb-4">
              Breeze into Summer with Our Stylish Linen Wear
            </p>
            <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
              View
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 px-4">
            <p className="text-white text-sm md:text-lg font-semibold mb-4">
              Everyday Comfort, Everyday Style – Casual Essentials
            </p>
            <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
              View
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 px-4">
            <p className="text-white text-sm md:text-lg font-semibold mb-4">
              Elevate Your Look – Elegant Outfits for Every Occasion
            </p>
            <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
              View
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={banner4}
            alt="Banner 4"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 px-4">
            <p className="text-white text-sm md:text-lg font-semibold mb-4">
              Trendy Hues for the Modern Wardrobe
            </p>
            <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
              View
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
