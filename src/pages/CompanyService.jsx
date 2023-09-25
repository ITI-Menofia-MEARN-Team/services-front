import React, { useContext, useEffect, useState } from 'react';
import defaultImage from '../assets/service.png';
import { AuthContext } from '../contexts/Auth';
import { getServices } from '../server/company';
import { Link } from 'react-router-dom';

const CompanyService = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  console.log('user: ', user);

  const services = data?.data?.services;
  console.log('services: ', services);

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
    getServices(user.user.id).then((response) => {
      setData(response);
    });
  });

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs mt-5">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">الخدمة</th>
              <th className="px-4 py-3">السعر</th>
              <th className="px-4 py-3">الوصف</th>
              <th className="px-4 py-3"> اخر تعديل</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {services &&
              services.map((service) => {
                return (
                  <tr key={service._id} className="text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        {/* <!-- Avatar with inset shadow --> */}
                        <div className="relative hidden w-12 h-12 ml-3  md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={
                              service.images[0]
                                ? `http://localhost:8000/uploads/service/${service.images[0]}`
                                : defaultImage
                            }
                            alt=""
                            loading="lazy"
                          />
                          <div className="absolute inset-0 shadow-inner"></div>
                        </div>
                        <div>
                          <p className="font-semibold">{service.title}</p>
                          {/* <p className="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{service.price}جنيه </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold text-gray-600 dark:text-gray-400">
                        {service.description.slice(0, 20)}....
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {new Intl.DateTimeFormat('ar-EG', options).format(new Date(service.updatedAt))}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <Link
                          to={`/dashboard/orders/${service._id}/fromOrder`}
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                        >
                          عرض
                        </Link>
                        <Link
                          to={`/dashboard/service/edit/${service._id}`}
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-yellow-400 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                        >
                          تعديل
                        </Link>
                        <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg focus:outline-none focus:shadow-outline-gray">
                          مسح
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

export default CompanyService;
