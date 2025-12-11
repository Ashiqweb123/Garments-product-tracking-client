import React from "react";
import {
  FaBoxOpen,
  FaRegClipboard,
  FaShoppingBag,
  FaTruck,
} from "react-icons/fa";

const HowWorks = () => {
  return (
    <div className="bg-[#FFF8F0] py-12">
      <h2 className="text-3xl font-bold text-center text-[#4B2E2E] mb-12">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Step 1: Browse Products */}
        <div className="bg-[#F5F0EB] p-6 rounded-lg shadow-md flex flex-col items-center text-center w-64">
          <div className="text-5xl mb-4 text-[#8B4513]">
            <FaShoppingBag />
          </div>
          <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
            Browse Products
          </h3>
          <p className="text-[#7E5C52]">
            Explore our latest garment collection easily.
          </p>
        </div>

        {/* Step 2: Place Order */}
        <div className="bg-[#F5F0EB] p-6 rounded-lg shadow-md flex flex-col items-center text-center w-64">
          <div className="text-5xl mb-4 text-[#8B4513]">
            <FaRegClipboard />
          </div>
          <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
            Place Order
          </h3>
          <p className="text-[#7E5C52]">
            Select your desired items and place an order online.
          </p>
        </div>

        {/* Step 3: Track Production */}
        <div className="bg-[#F5F0EB] p-6 rounded-lg shadow-md flex flex-col items-center text-center w-64">
          <div className="text-5xl mb-4 text-[#8B4513]">
            <FaBoxOpen />
          </div>
          <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
            Track Production
          </h3>
          <p className="text-[#7E5C52]">
            Monitor your order as it moves through production.
          </p>
        </div>

        {/* Step 4: Receive Delivery */}
        <div className="bg-[#F5F0EB] p-6 rounded-lg shadow-md flex flex-col items-center text-center w-64">
          <div className="text-5xl mb-4 text-[#8B4513]">
            <FaTruck />
          </div>
          <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
            Receive Delivery
          </h3>
          <p className="text-[#7E5C52]">
            Get your order delivered to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
