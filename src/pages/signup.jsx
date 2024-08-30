import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/login");
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
          Signup
        </h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your name"
            />
          </div>
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
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <a
            href="#"
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
