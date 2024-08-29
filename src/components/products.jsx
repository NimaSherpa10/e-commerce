import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { addToCart, removeFromCart } from "../features/cartSlice";

function Products() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const isInCart = (product) => {
    return cartItems.find((item) => item.id === product.id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {data &&
        data.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="bg-base-100 flex flex-col rounded-box shadow-2xl h-full">
              <figure className="flex-shrink-0">
                <img
                  className="w-full h-64 object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </figure>
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-2xl font-bold m-2 underline">
                  {product.title}
                </h2>
                <p className="flex-grow m-4">{product.description}</p>
                <p className="font-bold text-3xl mb-4 text-center">
                  Price: ${product.price}
                </p>
                <div className="flex justify-center">
                  {isInCart(product) ? (
                    <>
                      <button
                        className="btn bg-red-300"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        -
                      </button>
                      <span className="mx-4 mt-2">
                        {isInCart(product)
                          ? cartItems.find((item) => item.id === product.id)
                              .quantity
                          : 0}
                      </span>
                      <button
                        className="btn bg-red-300"
                        onClick={() => handleAddToCart(product)}
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn bg-red-300"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Products;
