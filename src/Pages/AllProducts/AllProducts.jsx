import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

const AllProducts = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-primary mb-6">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-md hover:scale-105 transition-transform"
          >
            <figure className="px-4 pt-4">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary">{product.title}</h3>
              <p className="text-secondary text-sm">{product.category}</p>
              <p className="font-bold text-lg mt-1">Price: ${product.price}</p>
              <p className="text-sm mt-1">Available: {product.quantity}</p>

              <div className="card-actions justify-end mt-2">
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
