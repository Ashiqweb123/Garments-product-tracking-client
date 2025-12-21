import { FaUserCog, FaUserTag } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={FaUserTag}
        label="Manager Request"
        address="manager-request"
      />
      <MenuItem icon={FaUserTag} label="All-Orders" address="all-orders" />
    </>
  );
};

export default AdminMenu;
