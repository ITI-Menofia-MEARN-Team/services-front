import React, { useContext, useEffect, useState } from 'react';
import defaultImage from '../assets/service.png';
import { AuthContext } from '../contexts/Auth';
import { deleteService, getServices } from '../server/company';
import { Link } from 'react-router-dom';
import { Spinner } from '../components';
import { toast } from 'react-toastify';

const CompanyService = () => {
  const [data, setData] = useState(null);
  const [deleteServiceState, setDeleteServiceState] = useState(false);
  const { user } = useContext(AuthContext);

  const services = data?.data?.services;

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
  }, [deleteServiceState]);

  const handleDelete = async (serviceId) => {
    const response = await deleteService(user.token, serviceId);
    if (response.status === 204) {
      toast.success('تم حذف الخدمة بنجاح', {
        position: toast.POSITION.TOP_CENTER,
      });
      setDeleteServiceState((prev) => !prev);
    }
  };

  if (!services)
    return (
      <div className="w-full min-h-[80vh] overflow-x-auto flex justify-center items-center  pt-5">
        <Spinner />
      </div>
    );

  if (services?.length === 0)
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
              <th className="px-4 py-3">الخدمة</th>
              <th className="px-4 py-3">السعر</th>
              {/* <th className="px-4 py-3">الوصف</th> */}
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
                                ? `${import.meta.env.VITE_API_BASE_URL}/uploads/service/${service.images[0]}`
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
                    <td className="px-4 py-3 text-sm">{service.price} جنيه </td>
                    {/* <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold text-gray-600 dark:text-gray-400">
                        {service.description.slice(0, 20)}....
                      </span>
                    </td> */}
                    <td className="px-4 py-3 text-sm">
                      {new Intl.DateTimeFormat('ar-EG', options).format(new Date(service.updatedAt))}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <Link
                          to={`/dashboard/service/${service._id}`}
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
                        <button
                          onClick={() => handleDelete(service._id)}
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                        >
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
    </div>
  );
};

export default CompanyService;
