const Categories = () => {
  const categoriesArr = ['تصنيف 1', 'تصنيف 2 ', 'تصنيف 3'];
  return (
    <div className="w-1/6">
      <h1 className="text-center text-2xl font-bold	 mb-5">تصنيفات</h1>
      <ul className="min-h-[40vh] bg-gray-300 text-center p-20 font-bold w-full">
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
