import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ imageUrl, heading, description }) => {
  return (
    <div className="w-[90%] mx-auto sm:w-[80%] md:w-[32%] text-center md:text-start px-6 py-4 bg-white rounded-lg  shadow-xs dark:bg-gray-800 ">
      <img src={imageUrl} className="w-80 h-20  " />
      <div className="flex flex-col justify-between h-[80%] px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{heading}</h2>
        <ul className="flex flex-col">
          {description.map((desc) => {
            return (
              <div className="flex gap-2 my-3">
                <span>{desc.id + 1} -</span>
                <li>{desc.value}</li>
              </div>
            );
          })}
        </ul>
        <Link to="/detailed-service"> 
        <button className="flex self-end items-center justify-between w-20 mt-auto px-4 py-2 text-lg font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          المزيد
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
