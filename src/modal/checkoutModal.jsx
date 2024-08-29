import { useState } from "react";

function CheckoutModal({ isOpen, onClose }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const generateTrackingNumber = () => {
    return `TRK${Math.floor(Math.random() * 1000000000)}`;
  };

  const generateArrivalDate = () => {
    const today = new Date();
    const arrivalDate = new Date(
      today.setDate(today.getDate() + Math.floor(Math.random() * 7) + 1)
    );
    return arrivalDate.toDateString();
  };

  const handleConfirmCheckout = () => {
    setTrackingNumber(generateTrackingNumber());
    setArrivalDate(generateArrivalDate());
    setOrderPlaced(true);
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
        {!orderPlaced ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="input w-full border p-2 rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Card Number</label>
                <input
                  type="text"
                  className="input w-full border p-2 rounded"
                  placeholder="Enter your card number"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Expiration Date</label>
                  <input
                    type="text"
                    className="input w-full border p-2 rounded"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">CVV</label>
                  <input
                    type="text"
                    className="input w-full border p-2 rounded"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Billing Address</label>
                <input
                  type="text"
                  className="input w-full border p-2 rounded"
                  placeholder="Enter your billing address"
                />
              </div>
              <div>
                <label className="block text-gray-700">Shipping Address</label>
                <input
                  type="text"
                  className="input w-full border p-2 rounded"
                  placeholder="Enter your shipping address"
                />
              </div>
              <button
                type="button"
                onClick={handleConfirmCheckout}
                className="btn bg-green-500 text-white w-full mt-4 py-2 rounded-lg hover:bg-green-600"
              >
                Confirm Checkout
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Order Placed Successfully!
            </h2>
            <p className="text-center mb-4">
              Your tracking number is{" "}
              <span className="font-bold">{trackingNumber}</span>.
            </p>
            <p className="text-center mb-4">
              Expected arrival date:{" "}
              <span className="font-bold">{arrivalDate}</span>.
            </p>
            <button
              onClick={onClose}
              className="btn bg-blue-500 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  ) : null;
}

export default CheckoutModal;
