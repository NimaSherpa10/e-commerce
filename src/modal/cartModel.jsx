import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from "../features/cartSlice";
import CheckoutModal from "./CheckoutModal";

function CartModel({ cartOpen, setCartOpen }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleDeleteItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleProceedToCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <>
      {cartOpen && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-1/2 lg:w-1/3 h-full bg-white shadow-lg p-6 z-50 overflow-y-auto">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 mx-4">
                    <p className="font-semibold">{item.title}</p>
                    <div className="flex items-center">
                      <button
                        className="btn bg-gray-300 text-black p-1 rounded-full"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn bg-gray-300 text-black p-1 rounded-full"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-600 mt-1">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-semibold mr-4">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between font-bold text-xl mt-4 border-t pt-4">
                <p>Total:</p>
                <p>
                  $
                  {cartItems
                    .reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <button
                onClick={handleProceedToCheckout}
                className="btn bg-red-500 text-white w-full mt-4 py-3 rounded-lg hover:bg-red-600"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}

export default CartModel;
