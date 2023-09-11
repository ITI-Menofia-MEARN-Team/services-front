const Aside = () => {
  return (
    <div className=" w-1/6 bg-gray-300 my-10 flex flex-col justify-evenly items-center">
      <div className="w-40 h-40 mt-3 mx-auto bg-black rounded"></div>
      <ul className="mt-20 text-center   w-[80%] font-bold">
        <li className="mb-5 p-5  rounded-md  transition duration-300 hover:bg-black hover:text-white cursor-pointer ">
          <a href="/" className="text-xl transition duration-300  ">
            الطلبات
          </a>
        </li>
        <li className="mb-5  p-5 rounded-md  transition duration-300 hover:bg-black hover:text-white cursor-pointer ">
          <a href="/" className="text-xl transition duration-300 ">
            الخدمات
          </a>
        </li>
        <li className="mb-5 p-5 rounded-md   transition duration-300 hover:bg-black hover:text-white cursor-pointer ">
          <a href="/" className="text-xl transition duration-300  ">
            أضف خدمة
          </a>
        </li>
      </ul>
      <button className="px-10 py-5 font-bold border-2 border-black rounded-5 cursor-pointer transition duration-500 group hover:text-white hover:bg-black">
        تسجيل الخروج
      </button>
    </div>
  );
};

export default Aside;
