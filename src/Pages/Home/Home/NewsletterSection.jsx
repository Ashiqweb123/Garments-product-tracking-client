import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      className="bg-[#FDF7F0] py-12"
    >
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates, offers & tips straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none flex-1"
          />
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default NewsletterSection;
