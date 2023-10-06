import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth';
import { getOrders } from '../server/company';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/service.png';
import { Spinner } from '../components';

const CompanyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);

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
      setOrders(response.data.orders);
    });
  }, []);

  if (!orders)
    return (
      <div className="w-full min-h-[80vh] overflow-x-auto flex justify-center items-center  pt-5">
        <Spinner />
      </div>
    );

  if (orders?.length === 0)
    return (
      <div className="w-full min-h-[80vh] text-3xl overflow-x-auto flex justify-center items-center  pt-5">
        لا توجد بيانات
      </div>
    );

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs mt-5">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">المستخدم</th>
              <th className="px-4 py-3">الخدمه</th>
              {/* <th className="px-4 py-3">الوصف</th> */}
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
                            src={
                              order.user?.image
                                ? `${import.meta.env.VITE_API_BASE_URL}/uploads/user/${order.user?.image?.[0]}`
                                : defaultImage
                            }
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
                    {/* <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold text-gray-600 dark:text-gray-400">
                        {order.service?.description.slice(0, 20)}....
                      </span>
                    </td> */}
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
                        <Link
                          to={`/dashboard/order/${order?._id}`}
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                        >
                          عرض
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyOrders;
