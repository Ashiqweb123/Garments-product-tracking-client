import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const OurProducts = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["home-products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/home-products");
      return res.data;
    },
  });
  console.log(error);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

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
                alt={product.name}
                className="rounded-lg h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary">{product.name}</h3>
              <p className="text-secondary text-sm">
                {product.description.slice(0, 60)}...
              </p>
              <p className="font-bold text-lg mt-2">Price: ${product.price}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-outline btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/all-products" className="btn btn-primary btn-wide">
          View All
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
