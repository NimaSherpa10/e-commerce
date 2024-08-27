import Navbar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <>
      <div className="w-[327px] mx-[24px] mt-[19px] sm:w-[1110px] sm:h-[740px] sm:mx-[165px] sm:mt-[28px] sm:mb-[132px]">
        <Navbar />
        <Products />
      </div>
    </>
  );
}

export default App;
