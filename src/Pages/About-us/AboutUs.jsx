import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/factory.jpg"; // factory image
import teamImg from "../../assets/team.jpg"; // team image
import { FaIndustry, FaSeedling, FaAward } from "react-icons/fa";

const AboutUs = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const features = [
    {
      icon: <FaIndustry />,
      title: "State-of-the-Art Factory",
      desc: "Our modern facility ensures top-quality garments for every customer.",
    },
    {
      icon: <FaSeedling />,
      title: "Sustainable Practices",
      desc: "We prioritize eco-friendly materials and ethical production.",
    },
    {
      icon: <FaAward />,
      title: "Trusted Brand",
      desc: "Over 30 years of experience providing reliable garments worldwide.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4B2E2E] mb-4">
            About Garments Fashion Ltd.
          </h1>
          <p className="text-[#7E5C52] mb-6">
            At Garments Fashion Ltd., we combine quality craftsmanship with
            sustainable practices to bring stylish, comfortable, and reliable
            garments to our customers. Our team of experts ensures every product
            meets international standards, while our factory leverages modern
            technology to deliver efficiency and precision.
          </p>
          <p className="text-[#7E5C52]">
            From sourcing the finest fabrics to delivering the final product, we
            ensure a seamless experience for our clients and partners.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <motion.img
            src={aboutImg}
            alt="Factory"
            className="rounded-xl shadow-lg w-full object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#F5F0EB] p-8 rounded-xl shadow-lg text-center flex flex-col items-center cursor-pointer"
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            custom={index}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-5xl text-[#8B4513] mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
              {feature.title}
            </h3>
            <p className="text-[#7E5C52]">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Team / Mission Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2">
          <motion.img
            src={teamImg}
            alt="Team"
            className="rounded-xl shadow-lg w-full object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#4B2E2E] mb-4">
            Our Mission
          </h2>
          <p className="text-[#7E5C52] mb-4">
            We strive to provide high-quality garments while promoting
            sustainable practices and ethical manufacturing. Our goal is to
            create long-lasting partnerships with clients and ensure
            satisfaction at every step.
          </p>
          <p className="text-[#7E5C52]">
            Join us in our journey to combine style, quality, and responsibility
            in every garment.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="text-center">
        <motion.a
          href="/contact"
          className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-[#D2691E] transition-transform transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.a>
      </div>
    </div>
  );
};

export default AboutUs;
