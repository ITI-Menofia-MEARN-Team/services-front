import React from 'react';
import { Link } from 'react-router-dom';

const CompanyJoinRequests = () => {
  return (
    <div className="w-full overflow-x-auto  pt-5">
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3">المستخدم</th>
            <th className="px-4 py-3">الخدمه</th>
            <th className="px-4 py-3">الوصف</th>
            <th className="px-4 py-3">التاريخ</th>
            <th className="px-4 py-3">الحالة</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div className="relative hidden w-12 h-12 ml-3  md:block">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="assets/images/user.png"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 shadow-inner"></div>
                </div>
                <div>
                  <p className="font-semibold">محمد ابراهيم عبد الرحيم</p>
                </div>
              </div>
            </td>

            <td className="px-4 py-3 text-lg">خدمة الفلاتر </td>

            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold text-gray-600 dark:text-gray-400">اهلا بيكم يا جدعاان</span>
            </td>

            <td className="px-4 py-3 text-sm">سورى اجمد عم الطري</td>

            <td className="px-4 py-3">
              <div className="flex items-center space-x-4 text-sm">
                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-green-600 rounded-lg  focus:outline-none focus:shadow-outline-gray">
                  قبول
                </button>
                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg focus:outline-none focus:shadow-outline-gray">
                  رفض
                </button>
                <Link className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray">
                  عرض
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyJoinRequests;
