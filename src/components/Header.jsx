import { useEffect, useState } from 'react';
import AuthenticationButtons from './AuthenticationButtons';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkMode';
import ProfileMenu from './ProfileMenu';
import { AuthContext } from '../contexts/Auth';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(AuthContext);
  console.log('user: ', user);

  useEffect(() => {
    if (user) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [user]);

  const isActiveLink = ({ isActive }) => {
    return `hover:text-purple-600 hover:dark:text-purple-300 transition text-lg relative ${isActive
        ? 'font-bold text-purple-600 dark:text-purple-300  before:absolute before:top-[120%] before:w-full before:h-1 before:dark:bg-purple-300 before:bg-purple-600 '
        : 'text-gray-900 dark:text-white  '
      }`;
  };

  // dark mode ?
  const lightModeIconPath =
    'M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z';
  const darkModeIconPath =
    'M12 0c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z';
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // jsx
  return (
    <header className="z-10 py-1  bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/*  */}
        <button className="p-1 -ml-1 mr-5 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Logo */}
        <a className="mr-6 text-5xl font-bold text-gray-800 dark:text-gray-200">خدمات</a>

        {/* links */}
        <div className="hidden lg:block  mx-10">
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <NavLink className={isActiveLink} to={'/'}>
                  تصفح
                </NavLink>
              </li>
              <li>
                <NavLink className={isActiveLink} to={'/join-request'}>
                  طلب الانضمام
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search */}
        <div className="hidden lg:block relative w-1/4 max-w-xl  focus-within:text-purple-500 mx-3">
          <div className="absolute inset-y-0 flex items-center pr-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            className="w-full pr-8 pl-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
            type="text"
            placeholder="ابحث عن خدمة"
          />
        </div>
        {/*  */}
        <ul className="flex items-center flex-shrink-0 space-x-6 gap-5">
          {/* toggle */}
          <li onClick={toggleDarkMode} className="relative">
            <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={`${isDarkMode ? darkModeIconPath : lightModeIconPath}`} />
              </svg>
            </button>
          </li>
          {isLoggedIn ? (
            <>
              {/* <!-- Profile menu --> */}
              <li className="relative">
                <ProfileMenu />
              </li>
            </>
          ) : (
            <AuthenticationButtons />
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
