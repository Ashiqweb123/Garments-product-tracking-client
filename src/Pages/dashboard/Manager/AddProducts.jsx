import React from "react";
import { useForm } from "react-hook-form";
import { uploadImageToImgbb } from "../../../utils";
import useAuth from "../../../hooks/useAuth";

import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddProducts = () => {
  // use mutation use case
  const axiosSecure = useAxiosSecure();
  const {
    isError,
    isPending,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) =>
      await axiosSecure.post(
        `${import.meta.env.VITE_API_URL}/products`,
        payload
      ),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Product added successfully!");
      mutationReset();
    },
    onError: (error) => {
      console.log(error);
    },
    onMutate: (payload) => {
      console.log("i want to post the data----->", payload);
    },
    onSettled: (data, error) => {
      console.log("on settled data", data);
      if (error) console.log(error);
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = async (data) => {
    console.log(data);
    const { name, description, quantity, price, category, image } = data;
    const imageFile = image[0];

    try {
      const imageUrl = await uploadImageToImgbb(imageFile);
      const productsData = {
        image: imageUrl,
        name,
        description,
        quantity: Number(quantity),
        price: Number(price),
        category,
        manager: {
          image: user?.photoURL,
          name: user?.displayName || user?.email,
          email: user?.email,
        },
      };
      console.log(productsData.manager);
      await mutateAsync(productsData);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  if (isPending) return <p>Loading.....</p>;
  if (isError) return <p>error.....</p>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-1 text-sm">
                {/* <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Plant Name"
                  required
                /> */}
                {/* <label htmlFor="name" className="block text-gray-600">
                  Name
                </label> */}
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-xs text-red-500">Name is required</span>
                )}
              </div>
              {/* Category */}
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600 ">
                  Category
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="category"
                  {...register("category", { required: true })}
                >
                  <option value="shirt">Shirt</option>
                  <option value="pant">pant</option>
                  <option value="jackeeet">jackeeet</option>
                  <option value="hoodie">hoodie</option>
                </select>
                {errors.category && (
                  <span className="text-xs text-red-500">
                    Category is required
                  </span>
                )}
              </div>
              {/* Description */}
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>

                <textarea
                  id="description"
                  placeholder="Write plant description here..."
                  className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
                  {...register("description", { required: true })}
                ></textarea>
              </div>
            </div>
            <div className="space-y-6 flex flex-col">
              {/* Price & Quantity */}
              <div className="flex justify-between gap-2">
                {/* Price */}
                <div className="space-y-1 text-sm">
                  <label htmlFor="price" className="block text-gray-600 ">
                    Price
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                    name="price"
                    id="price"
                    type="number"
                    placeholder="Price per unit"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-xs text-red-500">
                      Price is required
                    </span>
                  )}
                </div>

                {/* Quantity */}
                <div className="space-y-1 text-sm">
                  <label htmlFor="quantity" className="block text-gray-600">
                    Quantity
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                    name="quantity"
                    id="quantity"
                    type="number"
                    placeholder="Available quantity"
                    {...register("quantity", { required: true })}
                  />
                  {errors.quanty && (
                    <span className="text-xs text-red-500">
                      Quantity is required
                    </span>
                  )}
                </div>
              </div>
              {/* Image */}
              <div className=" p-4  w-full  m-auto rounded-lg grow">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                        {...register("image", { required: true })}
                      />
                      {errors.image && (
                        <span className="text-xs text-red-500">
                          Image is required
                        </span>
                      )}
                      <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                        Upload
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
