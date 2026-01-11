import React from "react";
import Logo from "../../../Component/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [role] = useRole(); // role fetch

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/all-products">All-Product</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My-Profile</NavLink>
      </li>

      {!user ? (
        <>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-primary sticky top-0 z-50 shadow-sm">
      <div className="navbar text-white font-bold max-w-7xl mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl w-30 my-3">
            <Logo />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          {!user ? (
            <Link to="/login" className="btn btn-secondary">
              Log-in
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/2kRZ1mL/user.png"}
                    alt="user"
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
              >
                {/* User Info */}
                <li className="px-2 py-1 text-sm font-semibold text-gray-500">
                  {user?.displayName}
                  <br />
                  <span className="text-xs capitalize text-primary">
                    {role}
                  </span>
                </li>

                <div className="divider my-1"></div>

                {/* Common Links */}
                <li>
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>

                {/* Buyer Specific */}
                {role === "buyer" && (
                  <li>
                    <NavLink to="/dashboard/my-orders">My Orders</NavLink>
                  </li>
                )}

                {/* Admin Specific */}
                {role === "admin" && (
                  <>
                    <li>
                      <NavLink to="/dashboard/manage-users">
                        Manage Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/all-orders">All Orders</NavLink>
                    </li>
                  </>
                )}

                <div className="divider my-1"></div>

                {/* Logout */}
                <li>
                  <button
                    onClick={handleLogOut}
                    className="text-red-500 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
