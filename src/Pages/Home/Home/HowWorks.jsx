import React from "react";
import {
  FaBoxOpen,
  FaRegClipboard,
  FaShoppingBag,
  FaTruck,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HowWorks = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 50,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, type: "spring", stiffness: 100 },
    },
  };

  const steps = [
    {
      icon: <FaShoppingBag />,
      title: "Browse Products",
      desc: "Explore our latest garment collection easily.",
    },
    {
      icon: <FaRegClipboard />,
      title: "Place Order",
      desc: "Select your desired items and place an order online.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Track Production",
      desc: "Monitor your order as it moves through production.",
    },
    {
      icon: <FaTruck />,
      title: "Receive Delivery",
      desc: "Get your order delivered to your doorstep.",
    },
  ];

  return (
    <div className="bg-[#FFF8F0] py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4B2E2E] mb-12">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-[#F5F0EB] p-8 rounded-xl shadow-lg flex flex-col items-center text-center w-64 md:w-72 h-80 md:h-80 cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="text-5xl md:text-6xl mb-4 text-[#8B4513]">
              {step.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#8B4513] mb-3">
              {step.title}
            </h3>
            <p className="text-[#7E5C52]">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
