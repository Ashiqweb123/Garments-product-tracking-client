import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import banner1 from "../../../../assets/banner/banner-1.png";
import banner2 from "../../../../assets/banner/banner-2.jpg";
import banner3 from "../../../../assets/banner/banner-3.jpg";
import banner4 from "../../../../assets/banner/banner-4.jpg";

const Banner = () => {
  return (
    <div className="my-4 relative">
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
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-[60vh] md:h-[70vh] object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-4">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-sm md:text-xl font-semibold mb-4"
            >
              Breeze into Summer with Our Stylish Linen Wear
            </motion.p>

            <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 animate-pulse">
              View
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-[60vh] md:h-[70vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-4">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-sm md:text-xl font-semibold mb-4"
            >
              Everyday Comfort, Everyday Style – Casual Essentials
            </motion.p>

            <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 animate-pulse">
              View
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-[60vh] md:h-[70vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-4">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-sm md:text-xl font-semibold mb-4"
            >
              Elevate Your Look – Elegant Outfits for Every Occasion
            </motion.p>

            <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 animate-pulse">
              View
            </button>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative">
          <img
            src={banner4}
            alt="Banner 4"
            className="w-full h-[60vh] md:h-[70vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-4">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-sm md:text-xl font-semibold mb-4"
            >
              Trendy Hues for the Modern Wardrobe
            </motion.p>

            <button className="bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 animate-pulse">
              View
            </button>
          </div>
        </div>
      </Carousel>

      {/* 👇 Visual flow to next section */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>
    </div>
  );
};

export default Banner;
