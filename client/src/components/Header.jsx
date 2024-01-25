import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { v4 as uuid } from "uuid";
const Header = () => {
  return (
    <section className="bg-gray-200 container mx-auto flex justify-center h-[100px] items-center">
      <Link
        to={`document/${uuid()}`}
        className="bg-blue-500 px-3 py-2 rounded-md flex justify-between gap-6 text-white h-fit items-center text-lg font-bold"
      >
        <FaPlus className="" />
        <h2>Create Document</h2>
      </Link>
    </section>
  );
};

export default Header;
