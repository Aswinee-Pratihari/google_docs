import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main className="flex justify-center items-center  h-screen">
      <form className="flex flex-col  border-1 rounded-xl shadow-sm p-5 bg-gray-300 gap-10 text-center justify-center items-center w-[400px] ">
        <input
          type="text"
          placeholder="Enter email"
          className="input input-bordered w-full "
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          className="input input-bordered w-full "
        />
        <button className="btn btn-block bg-blue-600 hover:bg-blue-800 px-3 py-2 rounded-md text-white font-bold">
          Log In
        </button>

        <p>
          Havs an account ?{" "}
          <Link to="/signUp" className="underline cursor-pointer">
            Sign Up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default SignIn;
