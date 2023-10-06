import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts';
import { acceptJoinRequests, deleteJoinRequests, getJoinRequests } from '../server/admin';
import { Spinner } from '../components';
import defaultImage from '../assets/service.png';
import { toast } from 'react-toastify';

const CompanyJoinRequests = () => {
  const [state, setState] = useState(false);
  const [joinRequests, setJoinRequests] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchJoins = async () => {
      const response = await getJoinRequests(user.token);

      setJoinRequests(response.data.joinRequests);
    };

    fetchJoins();
  }, [user, state]);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Africa/Cairo',
  };

  const handleRefuse = async (requestId) => {
    const response = await deleteJoinRequests(user.token, requestId);
    toast.success(response.message, {
      position: toast.POSITION.TOP_CENTER,
    });

    setState(!state);
  };
  const handleAccept = async (requestId) => {
    const response = await acceptJoinRequests(user.token, requestId);

    if (response.errors) {
      response.errors.forEach((error) =>
        toast.error(error.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
    }
    if (response.status === 'failed') {
      toast.error(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (response.status === 'Error') {
      toast.error(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (response.message) {
      toast.success('تم اضفة الشركة بنجاح', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setState(!state);
  };

  if (!joinRequests)
    return (
      <div className="w-full min-h-[80vh] overflow-x-auto flex justify-center items-center  pt-5">
        <Spinner />
      </div>
    );

  if (joinRequests?.length === 0)
    return (
      <div className="w-full min-h-[80vh] text-3xl overflow-x-auto flex justify-center items-center  pt-5">
        لا توجد بيانات
      </div>
    );

  return (
    <div className="w-full overflow-x-auto  pt-5">
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3">الشركة</th>
            <th className="px-4 py-3">البريد الالكتروني</th>
            <th className="px-4 py-3">الهاتف</th>
            <th className="px-4 py-3">التاريخ</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {joinRequests &&
            joinRequests.map((request) => {
              return (
                <tr key={request._id} className="text-gray-700 dark:text-gray-400">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-12 h-12 ml-3  md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={`${import.meta.env.VITE_API_BASE_URL}/uploads/user/${request.image[0]}`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 shadow-inner"></div>
                      </div>
                      <div>
                        <p className="font-semibold">{request.full_name}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-lg"> {request.email} </td>

                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold text-gray-600 dark:text-gray-400">
                      {request.phone_number}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-sm">
                    {new Intl.DateTimeFormat('ar-EG', options).format(new Date(request.createdAt))}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        onClick={() => handleAccept(request._id)}
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-green-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                      >
                        قبول
                      </button>
                      <button
                        onClick={() => handleRefuse(request._id)}
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
                      >
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
  );
};

export default CompanyJoinRequests;
