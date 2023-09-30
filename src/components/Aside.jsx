import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts';

const Aside = () => {
  const { user } = useContext(AuthContext);
  // Url State
  const { pathname } = useLocation();
  const ActiveLinkElement = () => (
    <span
      className="absolute inset-y-0 right-0 w-1 bg-purple-600 rounded-tl-lg rounded-bl-lg"
      aria-hidden="true"
    ></span>
  );
  const activeLinkStyle = 'text-gray-800 dark:text-gray-100';
  const linkStyle =
    'inline-flex items-center w-full text-md font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200';
  const linkClassName = ({ isActive }) => {
    return `${linkStyle} ${isActive ? activeLinkStyle : ''}`;
  };

  return (
    <aside className="z-20 min-h-screen  hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block ">
      <div className="h-full  grid grid-rows-[50px_1fr_100px]  py-4 text-gray-500 dark:text-gray-400">
        <a className="mr-6 text-5xl font-bold text-gray-800 dark:text-gray-200">خدمات</a>
        <ul className=" mt-10">
          <li className="relative px-6 py-3">
            {pathname === '/dashboard/orders' && <ActiveLinkElement />}
            <NavLink to={'/dashboard/orders'} className={linkClassName}>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="m22 8c0-.478-.379-1-1-1h-13c-.62 0-1 .519-1 1v13c0 .621.52 1 1 1h13c.478 0 1-.379 1-1zm-16-2h13.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-13.75c-.53 0-1 .47-1 1v13.75c0 .414.336.75.75.75s.75-.336.75-.75zm-2.5-2.5h13.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.25c-.53 0-1 .47-1 1v14.25c0 .414.336.75.75.75s.75-.336.75-.75z"
                  fill-rule="nonzero"
                />
              </svg>
              <span className="mr-4">طلبات</span>
            </NavLink>
          </li>
          <li className="relative px-6 py-3">
            {pathname === '/dashboard' && <ActiveLinkElement />}
            <NavLink to={'/dashboard'} className={linkClassName}>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="mr-4">خدماتي</span>
            </NavLink>
          </li>
          <li className="relative px-6 py-3">
            {pathname === '/dashboard/add-service' && <ActiveLinkElement />}
            <NavLink to={'/dashboard/add-service'} className={linkClassName}>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm6.75 6.752h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                  fillRule="nonzero"
                />
              </svg>
              <span className="mr-4">اضافة خدمة جديدة</span>
            </NavLink>
          </li>
          {user?.user?.role === 'Admin' && (
            <>
              <li className="relative px-6 py-3">
                {pathname === '/dashboard/add-new-company' && <ActiveLinkElement />}
                <NavLink to={'/dashboard/add-new-company'} className={linkClassName}>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm6.75 6.752h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                      fillRule="nonzero"
                    />
                  </svg>
                  <span className="mr-4">اضافة شركة جديدة</span>
                </NavLink>
              </li>
              <li className="relative px-6 py-3">
                {pathname === '/dashboard/add-new-company2' && <ActiveLinkElement />}
                <NavLink to={'/dashboard/add-new-company2'} className={linkClassName}>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="m22 8c0-.478-.379-1-1-1h-13c-.62 0-1 .519-1 1v13c0 .621.52 1 1 1h13c.478 0 1-.379 1-1zm-16-2h13.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-13.75c-.53 0-1 .47-1 1v13.75c0 .414.336.75.75.75s.75-.336.75-.75zm-2.5-2.5h13.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.25c-.53 0-1 .47-1 1v14.25c0 .414.336.75.75.75s.75-.336.75-.75z"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <span className="mr-4">طلبات الانضمام</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {/* <div className="px-6 my-6  ">
          <button className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            تسجيل الخروج
            <span className="mr-2" aria-hidden="true">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 2v2h12v16h-12v2h14v-20h-14zm0 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z" />
              </svg>
            </span>
          </button>
        </div> */}
      </div>
    </aside>
  );
};

export default Aside;
