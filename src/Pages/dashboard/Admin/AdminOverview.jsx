import React, { useState, useEffect, useMemo } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminOverview = () => {
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get("/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const approvedOrders = orders.filter((o) => o.status === "Approved").length;
  const rejectedOrders = orders.filter((o) => o.status === "Rejected").length;

  const pieData = useMemo(
    () => [
      { name: "Pending", value: pendingOrders },
      { name: "Approved", value: approvedOrders },
      { name: "Rejected", value: rejectedOrders },
    ],
    [pendingOrders, approvedOrders, rejectedOrders]
  );

  const COLORS = ["#facc15", "#34d399", "#f87171"];

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
          <p className="text-xl font-bold">{totalOrders}</p>
        </div>
        <div className="bg-yellow-100 shadow rounded-lg p-4 text-center">
          <h3 className="text-sm font-medium text-yellow-700">Pending</h3>
          <p className="text-xl font-bold">{pendingOrders}</p>
        </div>
        <div className="bg-green-100 shadow rounded-lg p-4 text-center">
          <h3 className="text-sm font-medium text-green-700">Approved</h3>
          <p className="text-xl font-bold">{approvedOrders}</p>
        </div>
        <div className="bg-red-100 shadow rounded-lg p-4 text-center">
          <h3 className="text-sm font-medium text-red-700">Rejected</h3>
          <p className="text-xl font-bold">{rejectedOrders}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow rounded-lg p-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
              animationDuration={800}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value} orders`} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminOverview;
