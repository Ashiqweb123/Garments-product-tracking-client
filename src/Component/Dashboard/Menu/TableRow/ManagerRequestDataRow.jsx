import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManagerRequestDataRow = ({ req, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleRoleUpdate = async () => {
    try {
      await axiosSecure.patch("/update-role", {
        email: req?.email,
        role: "manager",
      });
      alert("UpdatedRole");
      refetch();
    } catch (err) {
      if (err.response?.status === 409) {
        alert("You have already requested ❗");
      } else if (err.response?.status === 401) {
        alert("Unauthorized! Please login again.");
      } else {
        alert("Something went wrong. Try again later.");
      }
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b bg-white text-sm">{req?.email}</td>

      <td className="px-5 py-5 border-b bg-white text-sm">
        <button
          onClick={handleRoleUpdate}
          className="px-3 py-1 bg-green-200 text-green-900 rounded-full"
        >
          Make Manager
        </button>
      </td>
    </tr>
  );
};

export default ManagerRequestDataRow;
