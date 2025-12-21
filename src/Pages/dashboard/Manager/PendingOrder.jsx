import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PendingOrder = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["pending-orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders/pending");
      return res.data;
    },
  });

  const handleApprove = async (id) => {
    await axiosSecure.patch(`/orders/approve/${id}`);
    refetch();
  };

  const handleReject = async (id) => {
    await axiosSecure.patch(`/orders/reject/${id}`);
    refetch();
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pending Orders</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>TransactionID</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(
            (order) => (
              console.log(order),
              (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order?.buyer}</td>
                  <td>{order?.name}</td>
                  <td>{order.quantity}</td>
                  <td>{order?.transactionId}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => handleApprove(order._id)}
                      className="btn btn-success btn-sm"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(order._id)}
                      className="btn btn-error btn-sm"
                    >
                      Reject
                    </button>

                    <button
                      className="btn btn-info btn-sm"
                      onClick={() =>
                        (window.location.href = `/dashboard/order/${order._id}`)
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrder;
