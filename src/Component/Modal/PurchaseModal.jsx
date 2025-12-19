import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PurchaseModal = ({ closeModal, isOpen, product }) => {
  const { user } = useAuth();

  if (!product) return null;

  const { _id, name, category, price, quantity, image, manager } = product;

  const handlePayment = async (e) => {
    e.preventDefault();
    const paymentInfo = {
      productId: _id,
      name,
      category,
      price,
      quantity,
      image,
      manager,
      buyer: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/create-checkout-session`,
      paymentInfo
    );
    window.location.href = data.url;
    console.log(data.url);
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md bg-white p-6 shadow-xl rounded-2xl">
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center text-gray-900"
            >
              Review Info Before Order
            </DialogTitle>

            <form className="mt-4 space-y-3">
              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              {/* Product Title */}
              <div>
                <label className="text-sm font-medium">Product</label>
                <input
                  type="text"
                  value={name}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium">Category</label>
                <input
                  type="text"
                  value={category}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              {/* Price */}
              <div>
                <label className="text-sm font-medium">Price</label>
                <input
                  type="text"
                  value={`$ ${price}`}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              {/* Available Quantity */}
              <div>
                <label className="text-sm font-medium">
                  Available Quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              {/* First Name */}
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-around pt-4">
                <button
                  onClick={handlePayment}
                  type="button"
                  className="px-4 py-2 rounded-md bg-green-100 text-green-900 hover:bg-green-200"
                  disabled={quantity === 0}
                >
                  Pay
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-md bg-red-100 text-red-900 hover:bg-red-200"
                >
                  Cancel
                </button>
              </div>

              {quantity === 0 && (
                <p className="text-center text-sm text-red-500">Out of stock</p>
              )}
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;
