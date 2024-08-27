import useFetch from "../hooks/useFetch";

function Products() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("Data in Products:", data);

  return (
    <div>
      {data &&
        data.map((product) => <div key={product.id}>{product.title}</div>)}
    </div>
  );
}

export default Products;
