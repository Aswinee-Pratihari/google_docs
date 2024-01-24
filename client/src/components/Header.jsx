import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
const Header = () => {
  const id = Math.floor(Math.random(0, 10000) * 10000);
  return (
    <section className="bg-gray-200 container mx-auto flex justify-center h-[100px] items-center">
      <Link
        to={`document/${id}`}
        className="bg-blue-500 px-3 py-2 rounded-md flex justify-between gap-6 text-white h-fit items-center text-lg font-bold"
      >
        <FaPlus className="" />
        <h2>Create Document</h2>
      </Link>
    </section>
  );
};

export default Header;
