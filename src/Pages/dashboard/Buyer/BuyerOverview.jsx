import { useEffect, useState } from "react";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BuyerOverview = () => {
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosSecure.get("/my-orders").then((res) => {
      setOrders(res.data);
    });
  }, [axiosSecure]);

  const totalOrders = orders.length;
  const totalSpent = orders.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  const chartData = orders.map((item, index) => ({
    name: `Order ${index + 1}`,
    price: item.price,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Overview</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total Orders</p>
          <h3 className="text-2xl font-bold">{totalOrders}</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Wishlist</p>
          <h3 className="text-2xl font-bold">0</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Lifetime Spent</p>
          <h3 className="text-2xl font-bold">${totalSpent}</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow h-[300px]">
        <h3 className="font-semibold mb-4">Expense Analysis</h3>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#22c55e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerOverview;
