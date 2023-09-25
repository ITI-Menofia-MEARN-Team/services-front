import React from 'react';

const Profile = () => {
  return (
    <div className="profile  flex flex-col sm:flex-row justify-evenly p-10 bg-gray-100 min-h-screen dark:bg-gray-900 ">
      <div className="info px-10 py-7 text-center w-full  sm:w-2/5 md:w-1/5 bg-white   dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded mb-4">
        <h3 className="userName mb-5  font-bold text-2xl"> الاسم </h3>
        <p className="mb-4 text-sm">اسم المستخدم@</p>
        <div className="text-center mb-10">
          <img src="src/assets/user.png" alt="" className="w-[70%] mx-auto" />
        </div>
        <button className="py-2 mb-4 font-medium leading-5 transition-colors border border-transparent rounded-md focus:outline-none px-4  cursor-pointer placeholder:ease-in duration-300 hover:text-purple-600 focus:border-purple-400 focus:shadow-outline-purple text-gray-300 dark:text-gray-300hover:border-purple-600  bg-purple-600 hover:bg-transparent border-purple-600 text-md">
          ارفع صورة
        </button>
        <p className="flex flex-col">
          <span className="mb-2 font-bold text-lg">مستخدم منذ </span>
          19 سبتمبر 2019
        </p>
      </div>
      <div className="edit-info info px-10 py-7   w-full  sm:w-2/5 md:w-3/5 bg-white   dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
        <h1 className=" font-bold text-lg">تعديل الملف الشخصي</h1>
        <div className="form w-full flex flex-wrap flex-col md:flex-row justify-between  py-8 mb-8 bg-white rounded-lg  dark:bg-gray-800  dark:text-gray-300">
          <div className="w-full md:w-2/5">
            <label htmlFor="fullName" className="text-md">
              الاسم بالكامل
            </label>
            <input
              id="fullName"
              type="text"
              className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
            />
          </div>
          <div className="w-full md:w-2/5">
            <label htmlFor="userName" className="text-md">
              اسم المستخدم
            </label>
            <input
              id="userName"
              type="text"
              className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
            />
          </div>
          <div className="w-full md:w-2/5">
            <label htmlFor="password" className="text-md">
              الرقم السري
            </label>
            <input
              id="password"
              type="password"
              className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
            />
          </div>
          <div className="w-full md:w-2/5">
            <label htmlFor="email" className="text-md">
              البريد الالكترونى
            </label>
            <input
              id="email"
              type="email"
              className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
            />
          </div>
          <div className="w-full md:w-2/5">
            <label htmlFor="phone" className="text-md">
              رقم الهاتف
            </label>
            <input
              id="phone"
              type="text"
              className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
            />
          </div>
        </div>

        <button className="py-2 mb-4 font-medium leading-5 transition-colors border border-transparent rounded-md focus:outline-none px-4  cursor-pointer placeholder:ease-in duration-300 hover:text-purple-600 focus:border-purple-400 focus:shadow-outline-purple text-gray-300 dark:text-gray-300hover:border-purple-600  bg-purple-600 hover:bg-transparent border-purple-600 text-md">
          تحديث البيانات
        </button>
      </div>
    </div>
  );
};

export default Profile;
