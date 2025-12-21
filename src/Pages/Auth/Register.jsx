import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "./SocialLogin";

import { saveUpdateUser, uploadImageToImgbb } from "../../utils";

const Register = () => {
  const { registerUser, updateUserProfile, setLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const handleRegister = async (data) => {
    try {
      const result = await registerUser(data.email, data.password);
      console.log(result.user);

      const imageFile = data.image[0];

      const imageUrl = await uploadImageToImgbb(imageFile);
      console.log("after uploading image", imageUrl);
      await saveUpdateUser({
        name: data.name,
        email: data.email,
        image: imageUrl,
      });
      const userProfile = {
        displayName: data.name,
        photoURL: imageUrl,
      };

      await updateUserProfile(userProfile);
      console.log("user profile updated");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Name:</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="input"
            placeholder="Your Name"
          />
          {errors.name && (
            <span className="text-xs text-red-500">Name is required</span>
          )}
          <label className="label">Image:</label>
          <input
            {...register("image")}
            type="file"
            className="file-input"
            placeholder="Your Image"
          />
          <label className="label">Email</label>
          <input
            {...register("email")}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-xs text-red-500">Email is required</span>
          )}
          <label className="label">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
            })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-xs text-red-500">Password is required</span>
          )}

          {errors.password && errors.password.type === "pattern" && (
            <span className="text-xs text-red-500">
              Password must have at least 1 uppercase and 1 lowercase letter
            </span>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md ">
            Register
          </button>
        </fieldset>
        <p>
          Already Account?Please go
          <Link className="text-secondary " to={"/login"}>
            Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
