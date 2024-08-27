import useFetch from "../hooks/useFetch";

function Products() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {data &&
        data.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="card bg-base-100 w-full flex flex-col shadow-2xl">
              <figure className="flex-shrink-0">
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </figure>
              <div className="card-body flex-1 flex flex-col justify-between">
                <h2 className="card-title">{product.title}</h2>
                <p className="flex-grow">{product.description}</p>
                <p>Price: ${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Products;
