import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const AllOrders = () => {
  const axiosSecure = useAxiosSecure();
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5; // Number of orders per page

  // Fetch orders (React Query v5)
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders");
      return res.data;
    },
  });

  // Filter orders by status
  const filteredOrders = orders.filter((order) =>
    statusFilter ? order.status === statusFilter : true
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + ordersPerPage
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>

      {/* Status Filter */}
      <div className="mb-4">
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1); // Reset page when filter changes
          }}
          className="border p-2 rounded"
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Orders Table */}
      <table className="table-auto border-collapse border w-full text-center">
        <thead>
          <tr className="border bg-gray-100">
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order) => (
            <tr key={order._id} className="border hover:bg-gray-50">
              <td className="border px-4 py-2">{order._id}</td>
              <td className="border px-4 py-2">{order?.buyer}</td>
              <td className="border px-4 py-2">{order?.name}</td>
              <td className="border px-4 py-2">{order.quantity}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/dashboard/order/${order._id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllOrders;
