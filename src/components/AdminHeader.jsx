import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../contexts/DarkMode';
import ProfileMenu from './ProfileMenu';
import { AuthContext } from '../contexts/Auth';
import { searchForServices } from '../server/company';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState({});
  const [searchToggle, setSearchToggle] = useState(false);

  // search
  const setSearchedResults = async (querySearch) => {
    const result = await searchForServices(user.token, querySearch);
    setSearch(result.data);
  };

  // dark mode ?
  const lightModeIconPath =
    'M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z';
  const darkModeIconPath =
    'M12 0c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z';
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // jsx
  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <button className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/*  */}
        {/* Search */}
        <div className="block relative w-3/5 max-w-7xl  focus-within:text-purple-500 mx-3">
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
            name='search'
            className="w-full pr-8 pl-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
            type="text"
            placeholder=" ابحث عن خدمة "
            onKeyUp={(e) => {
              setSearchToggle(true);
              setSearchedResults(e?.target?.value);
            }}
          />

          {/* search results */}
          {searchToggle && (
            <div
              className="flex  overflow-y-scroll h-[50vh] absolute -end-[9%] z-10 mt-2 w-[50vw] divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-2xl dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white"
              onMouseLeave={() => {
                setSearchToggle(false);
              }}
            >
              {/* orders */}
              {/* <div className="p-2 flex-1">
              <strong className="block p-2 text-2xl font-medium uppercase text-gray-400">
                شركات
              </strong>

              {search?.companies && search?.companies.map(company => {
                return <Link
                  key={company._id}
                  to={`company/${company._id}`}
                  className="block rounded-lg px-4 py-2 text-sm    hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={() => setSearchToggle(false)}
                >
                  {company.full_name}
                </Link>
              })}



            </div> */}
              {/* services */}
              <div className="p-2 flex-1">
                <strong className="block p-2 text-2xl font-medium uppercase text-gray-400">خدمات</strong>

                {search?.services &&
                  search?.services.map((service) => {
                    return (
                      <Link
                        key={service._id}
                        to={`service/${service._id}`}
                        className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                        onClick={() => setSearchToggle(false)}
                      >
                        {service.title}
                      </Link>
                    );
                  })}
              </div>
            </div>
          )}
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

          {/* <!-- Profile menu --> */}
          <li className="relative">
            <ProfileMenu />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AdminHeader;
