import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success("Thanks for your valuable feedback!");
    reset();
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Toaster position="top-right" />
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#4B2E2E] mb-12">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <motion.div
            whileHover="hover"
            variants={iconVariants}
            className="flex items-center gap-4 text-[#8B4513]"
          >
            <FaWhatsapp className="text-3xl" />
            <a
              href="https://wa.me/8801869614405"
              target="_blank"
              rel="noopener noreferrer"
            >
              01869614405
            </a>
          </motion.div>

          <motion.div
            whileHover="hover"
            variants={iconVariants}
            className="flex items-center gap-4 text-[#8B4513]"
          >
            <FaEnvelope className="text-3xl" />
            <a href="mailto:rabiulazim430@gmail.com">rabiulazim430@gmail.com</a>
          </motion.div>

          <motion.div
            whileHover="hover"
            variants={iconVariants}
            className="flex items-center gap-4 text-[#8B4513]"
          >
            <FaMapMarkerAlt className="text-3xl" />
            <span>123 Garments Street, Dhaka, Bangladesh</span>
          </motion.div>

          <motion.div
            whileHover="hover"
            variants={iconVariants}
            className="flex items-center gap-4 text-[#8B4513]"
          >
            <FaClock className="text-3xl" />
            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          </motion.div>
        </div>

        {/* Feedback Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#F5F0EB] p-8 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: true })}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}

          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}

          <textarea
            placeholder="Your Feedback"
            rows="5"
            {...register("message", { required: true })}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">Feedback is required</span>
          )}

          <button
            type="submit"
            className="bg-[#8B4513] text-white px-6 py-3 rounded-lg mt-2 hover:bg-[#D2691E] transition-transform transform hover:scale-105 font-semibold"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
