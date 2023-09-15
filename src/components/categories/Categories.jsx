const Categories = () => {
  const categoriesArr = ['تصنيف 1', 'تصنيف 2 ', 'تصنيف 3'];
  return (
    <div className="w-[90%] mx-auto md:w-[20%] sm:mr-5  h-[50vh]  bg-white rounded-lg dark:bg-gray-800 shadow-xs  text-gray-600 dark:text-gray-400 p-5">
      <h1 className="text-center text-2xl font-bold p-8	 mb-5">تصنيفات</h1>
      <ul className="  bg-white rounded-lg  shadow-xs dark:bg-gray-900 text-center font-bold w-full py-8  ">
        {categoriesArr.map((cat, index) => {
          return (
            <li key={index} className="flex justify-center	 items-center gap-2 mb-3">
              <label htmlFor="" className="text-lg ">
                {cat}
              </label>
              <input type="checkbox" className="mr-15" id={cat} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
