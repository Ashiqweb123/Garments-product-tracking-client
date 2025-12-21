// BecomeManagerModal.jsx
import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const BecomeManagerModal = ({ closeModal, isOpen }) => {
  const axiosSecure = useAxiosSecure();
  const handleRequest = async () => {
    try {
      await axiosSecure.post("/become-manager");

      toast("please w8 admin approval");
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("You have already requested ❗");
      } else if (err.response?.status === 401) {
        alert("Unauthorized! Please login again.");
      } else {
        alert("Something went wrong. Try again later.");
      }
    } finally {
      closeModal();
    }
  };
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal} // ✅ fix here
    >
      {/* backdrop */}
      <div className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md bg-white p-6 shadow-xl rounded-2xl">
          <DialogTitle className="text-lg font-medium text-center text-gray-900">
            Become A Manager!
          </DialogTitle>
          <div className="mt-2">
            <p className="text-sm text-gray-500 text-center">
              Please read all the terms & conditions before becoming a manager.
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-around">
            <button
              onClick={handleRequest}
              type="button"
              className="bg-green-100 text-green-900 px-4 py-2 rounded-md hover:bg-green-200"
            >
              Continue
            </button>
            <button
              type="button"
              className="bg-red-100 text-red-900 px-4 py-2 rounded-md hover:bg-red-200"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default BecomeManagerModal;
