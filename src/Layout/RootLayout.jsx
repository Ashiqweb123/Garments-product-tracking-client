import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Nav/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
