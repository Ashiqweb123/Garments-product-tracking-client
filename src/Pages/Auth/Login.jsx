import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { saveUpdateUser } from "../../utils";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Login = () => {
  const { SignInUser, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [demoRole, setDemoRole] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const result = await SignInUser(data.email, data.password);
      const user = result.user;

      await saveUpdateUser({
        name: user.displayName,
        email: user.email,
        image: user.photoURL || "",
      });

      toast.success("Login successful!");
      setLoading(false);
      reset();
      navigate(location?.state?.from || "/");
    } catch (err) {
      toast.error("Invalid email or password!");
      setLoading(false);
    }
  };

  // Demo login button handler
  const handleDemoLogin = (role) => {
    let credentials = { email: "", password: "" };
    if (role === "admin") {
      credentials.email = "raihan@gmail.com";
      credentials.password = "Raihan@1";
    } else if (role === "buyer") {
      credentials.email = "jayka@gmail.com";
      credentials.password = "Jayka@1";
    }
    handleLogin(credentials);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card bg-white w-full max-w-md shadow-2xl rounded-lg p-6"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="label">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin("admin")}
              className="btn btn-secondary w-full"
            >
              Demo Admin Login
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin("buyer")}
              className="btn btn-secondary w-full"
            >
              Demo Buyer Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>

        <div className="mt-4">
          <SocialLogin />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
