import { useContext, useEffect, useState } from 'react';
import { deleteUser, getAllUsers } from '../server/admin';
import { AuthContext } from '../contexts';

const Companies = () => {
  const { user } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState(null);

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
    // Use an async function to fetch and set users

    const fetchAllUsers = async () => {
      try {
        const users = await getAllUsers(user.token);
        const filteredUsers = users.data.users.filter((user) => user.role === 'Company');
        console.log(filteredUsers);
        setAllUsers(filteredUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div>
      <table className="w-full whitespace-no-wrap mt-5">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3"> الشركة </th>
            <th className="px-4 py-3"> البريد الاكترونى </th>
            <th className="px-4 py-3">تاريخ الانضمام</th>
            <th className="px-4 py-3">الحالة</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {allUsers &&
            allUsers.map((user) => {
              return (
                <tr key={user.id} className="text-gray-700 dark:text-gray-400">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-12 h-12 ml-3  md:block">
                        <img className="object-cover w-full h-full rounded-full" src={user.image} loading="lazy" />

                        <div className="absolute inset-0 shadow-inner"></div>
                      </div>
                      <div>
                        <p className="font-semibold">{user.full_name}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-lg"> {user.email} </td>

                  <td className="px-4 py-3 text-sm">
                    {new Intl.DateTimeFormat('ar-EG', options).format(new Date(user.createdAt))}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        onClick={() => deleteUser(user.token, user._id)}
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-green-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                      >
                        حذف
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

export default Companies;
