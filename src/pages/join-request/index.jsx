import React from 'react';

const JoinRequest = () => {
  // const [loading, setLoading] = useState(false);
  return (
    <div className="JoinRequest p-5">
      <div className="companyDetails flex flex-col md:flex-row p-12 px-6">
        <h4 class="mb-4 md:w-[30%]  text-2xl	 font-semibold text-gray-600 dark:text-gray-300">تفاصيل عن الشركة</h4>
        <div className="form w-full flex flex-col  px-4 py-8 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800  dark:text-gray-300">
          <label htmlFor="name" className="text-2xl">
            اسم الشركة
          </label>
          <input
            id="name"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
          />
          <label htmlFor="email" className="text-2xl">
            بريد الكتروني
          </label>
          <input
            id="email"
            type="email"
            className="block w-full  text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
          />
          <label htmlFor="password" className="text-2xl">
            كلمة سر
          </label>
          <input
            id="password"
            type="password"
            className="block w-full   text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
          />
          <div className="logo flex items-center	 ">
            <label htmlFor="picture" className="text-2xl">
              لوجو
            </label>
            <label htmlFor="picture" className="flex gap-2 items-center  ">
              <label
                htmlFor="picture"
                className=" py-2  font-medium leading-5  transition-colors     border border-transparent rounded-md   focus:outline-none   px-4 mr-6 cursor-pointer placeholder: ease-in duration-300
                hover:text-purple-600 
                 focus:border-purple-400 
                focus:shadow-outline-purple text-gray-300 dark:text-gray-300 
                hover:border-purple-600 
                bg-purple-600     
                hover:bg-transparent
                border-purple-600 text-2xl"
              >
                رفع صوره
              </label>
              <input type="file" id="picture" name="picture" accept="image/*" className="hidden" />
            </label>
          </div>
          <label htmlFor="mobilePhone" className="mt-5 text-2xl">
            رقم الهاتف
          </label>
          <input
            id="mobilePhone"
            type="text"
            className="block w-full  text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100  my-5"
          />
        </div>
      </div>
      <div className="companyLinks flex flex-col md:flex-row py-8 px-6">
        <h4 class="mb-4 md:w-[30%]  text-2xl	 font-semibold text-gray-600 dark:text-gray-300"> عام</h4>
        <div className="form w-full flex flex-col  px-4 py-8 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800  dark:text-gray-300">
          <label htmlFor="companyName" className="text-2xl">
            بريد الكتروني
          </label>
          <input
            id="companyName"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
          />
        </div>
      </div>
      <div className="companyLinks flex flex-col md:flex-row py-8 px-6">
        <h4 class="mb-4 md:w-[30%]  text-2xl	 font-semibold text-gray-600 dark:text-gray-300"> سوشيال ميديا</h4>
        <div className="form w-full flex flex-col  px-4 py-8 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800  dark:text-gray-300">
          <label htmlFor="companyName" className="text-2xl">
            رابط فيسبوك
          </label>
          <input
            id="companyName"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
          />
          <label htmlFor="youtube" className="text-2xl">
            رابط يوتيوب
          </label>
          <input
            id="youtube"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
          />
          <label htmlFor="twitter" className="text-2xl">
            رابط تويتر
          </label>
          <input
            id="twitter"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
          />
          <label htmlFor="instagram" className="text-2xl">
            رابط انستجرام
          </label>
          <input
            id="instagram"
            type="text"
            className="block w-full  placeholder: text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-gray-100 my-5 "
          />
        </div>{' '}
      </div>
      <input
        id="twitter"
        type="submit"
        value="ارسال"
        className="block w-fit  placeholder: ease-in duration-300  hover:text-purple-600  active:text-purple-600    focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 dark:text-gray-300 dark:focus:shadow-outline-gray form-input bg-purple-600 border rounded cursor-pointer hover:bg-transparent border-purple-600 mr-auto	ml-14 "
      />
    </div>
  );
};

export default JoinRequest;
