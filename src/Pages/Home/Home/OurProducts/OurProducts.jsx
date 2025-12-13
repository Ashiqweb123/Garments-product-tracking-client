import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

const OurProducts = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["home-products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/home-products");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl text-center font-bold mb-6 text-primary">
        Our Products
      </h2>

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
              <p className="text-secondary text-sm">{product.description}</p>
              <p className="font-bold text-lg mt-2">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All button centered below the grid */}
      <div className="flex justify-center mt-8">
        <Link to="/all-products" className="btn btn-primary btn-wide">
          View All
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
