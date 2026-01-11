import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/products`
      );
      return res.data;
    },
  });

  if (error)
    return (
      <p className="text-center py-10 text-red-500">Error fetching products</p>
    );

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Skeleton loader */}
        {isLoading &&
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md rounded-lg animate-pulse"
            >
              <figure className="px-4 pt-4">
                <div className="bg-gray-300 rounded-lg h-48 w-full"></div>
              </figure>
              <div className="card-body space-y-3">
                <div className="bg-gray-300 h-5 w-3/4 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                <div className="bg-gray-300 h-5 w-1/3 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
                <div className="bg-gray-300 h-8 w-32 rounded mt-2"></div>
              </div>
            </div>
          ))}

        {!isLoading &&
          products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-md rounded-lg hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <figure className="px-4 pt-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="card-title text-primary text-lg md:text-xl font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-secondary text-sm md:text-base">
                    {product.category}
                  </p>
                  <p className="font-bold text-md md:text-lg mt-1">
                    Price: ${product.price}
                  </p>
                  <p className="text-sm md:text-base mt-1">
                    Available: {product.quantity}
                  </p>
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
