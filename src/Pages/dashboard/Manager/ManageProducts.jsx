import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { Link } from "react-router";

const ManageProducts = () => {
  const axios = axiosSecure();
  const [search, setSearch] = useState("");

  const { data: products = [], refetch } = useQuery({
    queryKey: ["manage-products"],
    queryFn: async () => {
      const res = await axios.get("/manage-products");
      return res.data;
    },
  });

  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (!confirm) return;

    await axios.delete(`/products/${id}`);
    refetch();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

      <input
        type="text"
        placeholder="Search by name or category"
        className="input input-bordered mb-4 w-full max-w-md"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Payment Mode</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.image} className="w-12 h-12 rounded" />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.paymentMode}</td>
              <td className="space-x-2">
                <Link
                  to={`/dashboard/update-product/${item._id}`}
                  className="btn btn-sm btn-info"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
