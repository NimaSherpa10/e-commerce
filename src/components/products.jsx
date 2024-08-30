import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { addToCart, removeFromCart } from "../features/cartSlice";
import Filter from "./filter";

function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const isInCart = (product) => {
    return cartItems.find((item) => item.id === product.id);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const categories = [...new Set(data.map((product) => product.category))];

  const filteredProducts = selectedCategories.length
    ? data.filter((product) => selectedCategories.includes(product.category))
    : data;

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-4">
      <Filter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <figure className="relative">
              <img
                className="w-full h-64 object-cover"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="p-4 flex flex-col h-full">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-center mb-4">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                {isInCart(product) ? (
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-l-lg hover:bg-red-600"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 bg-gray-200">
                      {
                        cartItems.find((item) => item.id === product.id)
                          .quantity
                      }
                    </span>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600"
                      onClick={() => handleAddToCart(product)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
