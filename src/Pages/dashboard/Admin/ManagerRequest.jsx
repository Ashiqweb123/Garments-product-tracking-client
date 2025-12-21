import { useQuery } from "@tanstack/react-query";
import ManagerRequestDataRow from "../../../Component/Dashboard/Menu/TableRow/ManagerRequestDataRow";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManagerRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: request = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manager-request", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/manager-request`);
      return res.data;
    },
  });
  console.log(request);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b bg-white text-left text-sm">
                  Email
                </th>
                <th className="px-5 py-3 border-b bg-white text-left text-sm">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {request.map((req) => (
                <ManagerRequestDataRow
                  refetch={refetch}
                  key={req._id}
                  req={req}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerRequest;
