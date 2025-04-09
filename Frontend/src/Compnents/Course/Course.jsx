import React from "react";
import list from "../../../public/list.json";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div className="max-w-screen-2xl  container mx-auto px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mt-20">
        <h1 className="text-2xl md:text-4xl font-semibold">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Welcome to our platform! We offer a wide range of courses to help you grow 
          in your career. Our expert-designed content ensures you gain practical 
          knowledge with hands-on experience. Explore our latest courses below!
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-lg 
                             hover:bg-pink-600 transition-all duration-300">
            Back
          </button>
        </Link>
      </div>

      {/* Course Cards Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
