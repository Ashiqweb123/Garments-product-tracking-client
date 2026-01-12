// BuyerMenu.jsx
import { BsFingerprint } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import MenuItem from "./MenuItem";
import { GrUserAdmin } from "react-icons/gr";
import { useState } from "react";
import BecomeManagerModal from "../../Modal/BecomeManagerModal";

const BuyerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ===== OVERVIEW ===== */}
      <div className="group">
        <MenuItem
          icon={MdDashboard}
          label="Overview"
          address="buyer-overview"
        />
        {/* subtle animated line */}
        <div className="h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
      </div>

      {/* ===== MY ORDERS ===== */}
      <div className="group mt-1">
        <MenuItem icon={BsFingerprint} label="My Orders" address="my-orders" />
        <div className="h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
      </div>

      {/* ===== BECOME MANAGER ===== */}
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 mt-6 rounded-lg
        transition-all duration-300 transform
        text-gray-600 cursor-pointer
        hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200
        hover:translate-x-1 hover:text-gray-800"
      >
        <GrUserAdmin className="w-5 h-5" />
        <span className="mx-4 font-medium">Become A Manager</span>
      </div>

      <BecomeManagerModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default BuyerMenu;
