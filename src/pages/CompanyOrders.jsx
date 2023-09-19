import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth';
import { getOrders } from '../server/company';

const CompanyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Africa/Cairo',
  };

  useEffect(() => {
    getOrders(user?.user.id, user.token).then((response) => {
      console.log('response: ', response.data.orders);
      setOrders(response.data.orders);
    });
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs mt-5">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">المستخدم</th>
              <th className="px-4 py-3">الخدمه</th>
              <th className="px-4 py-3">الوصف</th>
              <th className="px-4 py-3">التاريخ</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {orders &&
              orders.map((order) => {
                return (
                  <tr key={order._id} className="text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        {/* <!-- Avatar with inset shadow --> */}
                        <div className="relative hidden w-12 h-12 ml-3  md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={order.user?.picture ? `http://localhost:8000/${order.user?.picture}` : defaultImage}
                            alt=""
                            loading="lazy"
                          />
                          <div className="absolute inset-0 shadow-inner"></div>
                        </div>
                        <div>
                          <p className="font-semibold">{order.user?.full_name}</p>
                          {/* <p className="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-lg">{order.service?.title} </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold text-gray-600 dark:text-gray-400">
                        {order.service?.description.slice(0, 20)}....
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {new Intl.DateTimeFormat('ar-EG', options).format(new Date(order.createdAt))}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <button
                          to={'/'}
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-green-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                        >
                          قبول
                        </button>
                        <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg focus:outline-none focus:shadow-outline-gray">
                          رفض
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
        {/* <span className="flex items-center col-span-3">Showing 21-30 of 100</span>
                    <span className="col-span-2"></span> */}
        {/* <!-- Pagination --> */}
        {/* <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Previous"
                                    >
                                        <svg className="w-4 h-4 fill-current"  viewBox="0 0 20 20">
                                            <path
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                                </li>
                                <li>
                                    <span className="px-3 py-1">...</span>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                                </li>
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Next"
                                    >
                                        <svg className="w-4 h-4 fill-current"  viewBox="0 0 20 20">
                                            <path
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span> */}
      </div>
    </div>
  );
};

export default CompanyOrders;