import React from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";

const ManagerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Products"
        address="add-products"
      />
      {/* <MenuItem icon={MdHomeWork} label="My Inventory" address="my-inventory" /> */}
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Products"
        address="manage-products"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Pending Orders"
        address="pending-orders"
      />
    </>
  );
};

export default ManagerMenu;
