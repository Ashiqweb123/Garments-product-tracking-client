import React from "react";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import coverImg from "../../../assets/logo.jpg";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();

  // Animation for card appearance
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 50 },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <motion.div
        className="bg-white shadow-xl rounded-3xl md:w-4/5 lg:w-3/5 overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Cover Image */}
        <div className="relative w-full">
          <img
            alt="cover"
            src={coverImg}
            className="w-full h-60 object-cover md:h-72 lg:h-80"
          />
          {/* Profile Avatar */}
          <motion.img
            alt="profile"
            src={user?.photoURL || "https://i.ibb.co/2kRZ1mL/user.png"}
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 object-cover rounded-full border-4 border-white h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col items-center mt-16 px-6 pb-8">
          <motion.p
            className="px-4 py-1 rounded-full text-sm md:text-base text-white bg-primary font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isRoleLoading ? "Loading..." : role}
          </motion.p>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-3 text-gray-700 w-full md:w-1/2">
              <p className="text-sm md:text-base font-medium">Name</p>
              <span className="text-lg md:text-xl font-semibold">
                {user?.displayName || "N/A"}
              </span>
            </div>

            <div className="flex flex-col gap-3 text-gray-700 w-full md:w-1/2">
              <p className="text-sm md:text-base font-medium">Email</p>
              <span className="text-lg md:text-xl font-semibold">
                {user?.email || "N/A"}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button className="bg-primary text-white px-8 md:px-10 py-2 rounded-lg font-semibold hover:bg-lime-800 transition-transform transform hover:scale-105">
              Update Profile
            </button>
            <button className="bg-primary text-white px-8 md:px-10 py-2 rounded-lg font-semibold hover:bg-lime-800 transition-transform transform hover:scale-105">
              Change Password
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
