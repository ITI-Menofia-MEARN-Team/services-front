import React from 'react';

const AddNewCompany = () => {
  return (
    <div className="mt-10">
      <div className="form w-full p-8 flex flex-wrap flex-col md:flex-row justify-evenly  py-8 mb-8 bg-white rounded-lg  dark:bg-gray-800  dark:text-gray-300">
        <div className="w-full md:w-2/5 mb-3">
          <label htmlFor="fullName" className="text-md">
            اسم الشركة
          </label>
          <input
            id="fullName"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-3"
          />
        </div>
        <div className="w-full md:w-2/5 mb-3">
          <label htmlFor="userName" className="text-md">
            اسم المستخدم
          </label>
          <input
            id="userName"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-3 "
          />
        </div>
        <div className="w-full md:w-2/5 mb-3">
          <label htmlFor="password" className="text-md">
            الرقم السري
          </label>
          <input
            id="password"
            type="password"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-3 "
          />
        </div>
        <div className="w-full md:w-2/5 mb-3">
          <label htmlFor="email" className="text-md">
            البريد الالكترونى
          </label>
          <input
            id="email"
            type="email"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-3 "
          />
        </div>
        <div className="w-full md:w-2/5 mb-3">
          <label htmlFor="phone" className="text-md">
            رقم الهاتف
          </label>
          <input
            id="phone"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-3 "
          />
        </div>
        <div className="w-full md:w-2/5 mb-1  self-end ">
          <label htmlFor="picture" className="flex gap-2 items-center">
            <label
              htmlFor="picture"
              className="py-2 mb-5 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 cursor-pointer"
            >
              شعار الشركة
            </label>
            <input type="file" id="picture" name="images" accept="image/*" className="hidden" multiple />
          </label>
        </div>
      </div>
      <button className="py-2 mb-4 font-medium leading-5 transition-colors border border-transparent rounded-md focus:outline-none px-4  cursor-pointer placeholder:ease-in duration-300 hover:text-purple-600 focus:border-purple-400 focus:shadow-outline-purple text-gray-300 dark:text-gray-300hover:border-purple-600  bg-purple-600 hover:bg-transparent border-purple-600 text-md">
        أضف شركة
      </button>
    </div>
  );
};

export default AddNewCompany;
