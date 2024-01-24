import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="container mx-auto flex h-screen items-center justify-center w-screen">
      {" "}
      <form className="flex flex-col  border-1 rounded-xl shadow-sm p-5 bg-gray-200 gap-5 text-center justify-center items-center w-[400px]">
        <input
          type="Email"
          placeholder="Enter email"
          className="input input-bordered w-full "
          required
        />

        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full "
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          className="input input-bordered w-full "
        />
        <button className="btn btn-block bg-blue-600 hover:bg-blue-800 px-3 py-2 rounded-md text-white font-bold">
          Sign Up
        </button>

        <p>
          Havs an account ?{" "}
          <Link to="/signIn" className="underline cursor-pointer">
            Sign In
          </Link>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
