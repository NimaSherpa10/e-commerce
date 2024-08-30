import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Products from "./components/products";
import SignUp from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      {/* Route for Signup */}
      <Route path="/signup" element={<SignUp />} />

      {/* Route for Login */}
      <Route path="/login" element={<Login />} />

      {/* Route for the Main App */}
      <Route
        path="/home"
        element={
          <div className="w-[327px] mx-[24px] mt-[19px] sm:w-[1110px] sm:h-[740px] sm:mx-[165px] sm:mt-[28px] sm:mb-[132px]">
            <Navbar />
            <Products />
            <div className="my-12 shadow-xl rounded-lg">
              <Footer />
            </div>
          </div>
        }
      />

      {/* Redirect from the root to Signup */}
      <Route path="/" element={<Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;
