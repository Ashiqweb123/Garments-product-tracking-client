import React from "react";
import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa";

const blogs = [
  {
    title: "Latest Garment Trends",
    desc: "Discover the hottest fashion trends.",
  },
  {
    title: "Care Tips for Clothes",
    desc: "Learn how to maintain your garments.",
  },
  { title: "Sustainable Fabrics", desc: "Eco-friendly materials in fashion." },
];

const BlogsSection = () => {
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
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-4xl text-primary mb-4">
              <FaBook />
            </div>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm">{blog.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
