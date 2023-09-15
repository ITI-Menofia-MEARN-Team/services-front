const Categories = () => {
  const categoriesArr = ['تصنيف 1', 'تصنيف 2 ', 'تصنيف 3'];
  return (
    <div className="w-[90%] mx-auto md:w-[20%] sm:mr-5  bg-white rounded-lg dark:bg-gray-800 shadow-xs  text-gray-600 dark:text-gray-400 ">
      <h1 className="text-center text-2xl font-bold	 mb-5">تصنيفات</h1>
      <ul className="min-h-[40vh] bg-white rounded-lg  shadow-xs dark:bg-gray-900 text-center p-20 font-bold w-full">
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
