import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 p-4 shadow-lg rounded-xl 
                      transform hover:scale-105 transition-all duration-300 ease-in-out 
                      dark:bg-slate-900 dark:text-white dark:border dark:border-gray-700">
        <figure className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-md shadow-md">
            NEW
          </div>
        </figure>
        <div className="card-body mt-3">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="px-4 py-2 rounded-lg bg-white text-black dark:text-black font-medium 
                               hover:bg-pink-600 dark:hover:bg-pink-400 transition-all duration-300">
              ${item.price}
            </div>
            <button className="px-4 py-2 rounded-lg bg-pink-500 text-white font-medium 
                               hover:bg-pink-600 dark:hover:bg-pink-400 transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
