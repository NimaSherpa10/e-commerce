import cartIcon from "../../public/images/icon-cart.svg";
import { useState } from "react";
import CartModel from "../modal/cartModel";
import { useSelector } from "react-redux";
function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <div>Collections</div>
              </li>
              <li>
                <div>Clothing</div>
              </li>
              <li>
                <div>Gadgets</div>
              </li>
              <li>
                <div>About</div>
              </li>
              <li>
                <div>Contact</div>
              </li>
            </ul>
          </div>
          <div className="font-bold text-2xl hover:animate-bounce">
            harekmal 10
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <div>Collections</div>
            </li>
            <li>
              <div>Clothing</div>
            </li>
            <li>
              <div>Gadgets</div>
            </li>
            <li>
              <div>About</div>
            </li>
            <li>
              <div>Contact</div>
            </li>
          </ul>
        </div>
        <div className="navbar-end relative">
          <a className="mr-4" onClick={toggleCart}>
            <img src={cartIcon} alt="Cart" />
            {totalItems > 0 && (
              <span className="absolute top-[-2px] right-[56px] bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {totalItems}
              </span>
            )}
          </a>
          <img
            className="w-12 rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <CartModel cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
}

export default Navbar;
