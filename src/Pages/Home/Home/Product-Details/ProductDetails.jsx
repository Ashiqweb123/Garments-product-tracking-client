import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import PurchaseModal from "../../../../Component/Modal/PurchaseModal";
import useRole from "../../../../hooks/useRole";
import useAuth from "../../../../hooks/useAuth";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { user } = useAuth();
  const [role] = useRole();
  const { id } = useParams();

  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/products/${id}`
      );
      return result.data;
    },
  });

  if (isLoading) return <p className="text-center py-20">Loading.....</p>;

  const { image, name, description, category, price, manager, quantity } =
    product;

  return (
    <div className="p-4 md:p-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Product Details
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <figure className="md:w-1/2 flex justify-center items-center bg-gray-100 p-4">
          <img
            src={image}
            alt={name}
            className="rounded-lg w-full h-80 object-cover"
          />
        </figure>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {name}
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Description:</span> {description}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Quantity:</span> {quantity}
            </p>
            <p className="text-gray-800 font-bold text-lg md:text-xl mb-4">
              Price: ${price}
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">Manager Info</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <figure>
                <img
                  src={manager?.image}
                  alt={manager?.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
              </figure>
              <div className="flex flex-col">
                <p className="text-gray-700">
                  <span className="font-semibold">Name:</span> {manager?.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {manager?.email}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-end">
            {user && role === "buyer" ? (
              <motion.button
                onClick={() => setIsOpen(true)}
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
            ) : (
              <button className="btn btn-disabled" disabled>
                Order Now
              </button>
            )}
          </div>
        </div>
      </motion.div>

      <PurchaseModal
        product={product}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </div>
  );
};

export default ProductDetails;
