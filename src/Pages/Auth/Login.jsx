import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const Login = () => {
  const { SignInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    SignInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input"
              placeholder="Email"
            />
            {errors.email && <span>Email is required</span>}
            {/* password */}
            <label className="label">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="input"
              placeholder="Password"
            />
            {errors.password && <span>Password is required</span>}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral bg-[#8B4513] hover:bg-[#D2691E] text-white px-6 py-2 rounded-lg shadow-md ">
              Login
            </button>
          </fieldset>
          <p>
            new user, please go{" "}
            <Link className="text-secondary " to={"/register"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
