import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import PurchaseModal from "../../../../Component/Modal/PurchaseModal";
import useRole from "../../../../hooks/useRole"; // path adjust
import useAuth from "../../../../hooks/useAuth";

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();

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

  if (isLoading) return <p>Loading.....</p>;

  const { image, name, description, category, price, manager, quantity } =
    product;

  return (
    <div>
      <h2>details</h2>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt={name} />
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
                alt={manager?.name}
              />
            </figure>
            <p>email: {manager?.email}</p>
          </div>

          <div className="card-actions justify-end">
            {user && role === "buyer" ? (
              <button
                onClick={() => setIsOpen(true)}
                className="btn btn-primary"
              >
                Order
              </button>
            ) : (
              <button className="btn btn-disabled" disabled>
                Order
              </button>
            )}
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
