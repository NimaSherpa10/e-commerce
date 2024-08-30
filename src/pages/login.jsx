import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic for handling login (authentication, etc.)
    // If login is successful, redirect to the home page
    navigate("/home");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.apparelentrepreneurship.com/wp-content/uploads/2019/03/apparel_entrepreneurship_read_this_before_starting_a_clothing_line.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
