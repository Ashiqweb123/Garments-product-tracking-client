import React from "react";
import {
  FaBoxOpen,
  FaRegClipboard,
  FaShoppingBag,
  FaTruck,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HowWorks = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        type: "spring",
        stiffness: 50,
      },
    }),
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
    <div className="bg-[#FFF8F0] py-12">
      <h2 className="text-3xl font-bold text-center text-[#4B2E2E] mb-12">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-[#F5F0EB] p-6 rounded-lg shadow-md flex flex-col items-center text-center w-64"
            variants={cardVariants}
            initiF="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="text-5xl mb-4 text-[#8B4513]">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
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
