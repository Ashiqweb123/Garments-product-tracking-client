import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F0] px-4 text-center">
      <h1 className="text-8xl font-bold text-red-600 mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-[#4B2E2E] mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        Boss je page ta tumi khujteso, seta exist kore na ba URL ta vul.
      </p>

      <Link
        to="/"
        className="bg-[#4B2E2E] text-white px-6 py-2 rounded-lg hover:bg-[#3a2323] transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default Error;
