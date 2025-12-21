import React, { useState } from "react";

const ManagerOrderDataRow = ({ order, handleStatusChange, handleCancel }) => {
  const { _id, name, price, quantity, status, buyer } = order;
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleSelectChange = (e) => {
    const newStatus = e.target.value;
    setCurrentStatus(newStatus);
    handleStatusChange(_id, newStatus);
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {name}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {buyer}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        ${price}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {quantity}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select
          value={currentStatus}
          onChange={handleSelectChange}
          className="p-1 border-2 border-lime-300 focus:outline-lime-500 rounded-md text-gray-900  bg-white"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">Start Processing</option>
          <option value="Delivered">Deliver</option>
        </select>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleCancel(_id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ManagerOrderDataRow;
