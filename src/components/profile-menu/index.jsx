import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';

const ProfileMenu = () => {
  // toggle Menu
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  // isLogged
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <button onClick={toggleMenu} className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={`http://localhost:8000/uploads/user/${user.user.picture}`}
          alt=""
        />
      </button>
      {menuOpen && (
        <ul className="absolute left-0 w-40 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700">
          <li className="flex">
            <Link
              className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              to={'/profile'}
            >
              <svg
                className="w-4 h-4 ml-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>{user.user.full_name}</span>
            </Link>
          </li>

          <li className="flex">
            <Link
              className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              to={'/'}
              onClick={logout}
            >
              <svg
                className="w-4 h-4 ml-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              <span>تسجيل الخروج</span>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default ProfileMenu;
