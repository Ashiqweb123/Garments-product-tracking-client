import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import PurchaseModal from "../../../../Component/Modal/PurchaseModal";

const ProductDetails = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const { id } = useParams();
  console.log(id);

  const {
    data: product = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/products/${id}`
      );
      return result.data;
    },
  });
  console.log(product);
  const { image, name, description, category, price, manager, quantity } =
    product;
  if (isLoading) <p>Loading.....</p>;
  return (
    <div>
      <h2>details</h2>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Description: {description}</p>
          <p>Category: {category}</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
          <h2 className="text-3xl">MANAGER INFO</h2>
          <div className="flex justify-between items-center gap-30">
            <p>Name:{manager?.name}</p>
            <figure>
              <img
                src={manager?.image}
                className="rounded-full w-10"
                alt="Movie"
              />
            </figure>
            <p>email: {manager?.email}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={() => setIsOpen(true)} className="btn btn-primary">
              Order
            </button>
          </div>

          <hr className="my-6" />
          <PurchaseModal
            product={product}
            closeModal={closeModal}
            isOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
