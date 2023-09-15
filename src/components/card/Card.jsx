import React from 'react';

const Card = ({ imageUrl, heading, description }) => {
  return (
    <div className="w-[90%] mx-auto sm:w-[80%] md:w-[32%] text-center md:text-start px-6 py-4 bg-white rounded-lg dark:bg-gray-900 shadow-xs  text-gray-600 dark:text-gray-400">
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
        <button className="flex items-center justify-between w-20 mt-auto px-4 py-2 text-lg font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          المزيد
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
