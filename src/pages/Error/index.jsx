import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <main class="h-[50vh] w-screen flex justify-center items-center">
      <div class="container flex flex-col justify-center items-center ">
        <svg class="w-12 h-12 mt-8 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <h1 class="text-6xl py-2 font-semibold text-gray-700 dark:text-gray-200">404</h1>
        <p class="text-gray-700 dark:text-gray-300 py-2">الصفحه غير متوفره.</p>
        <NavLink
          class="flex items-center justify-between  px-4 py-2 text-lg font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          to={'/'}
        >
          الرئيسيه
        </NavLink>
      </div>
    </main>
  );
};

export default Error;
