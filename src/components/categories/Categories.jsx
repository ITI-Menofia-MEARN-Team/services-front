import { useEffect, useState } from 'react';
import { getAllCategories } from '../../server/guest';

const Categories = ({ handleFilter }) => {
  const [data, setData] = useState([]);
  const categories = data?.data?.categories;
  console.log('categories: ', categories);

  useEffect(() => {
    getAllCategories().then((res) => setData(res));
  }, []);

  const [check, setCheck] = useState(null);
  useEffect(() => {
    handleFilter(check);
  }, [check]);

  return (
    <div className="sticky w-[90%]  md:w-[20%]  shadow-xs  text-gray-600 dark:text-gray-400  ">
      <h1 className="rounded-full border border-indigo-600 rounded-r-none px-12 py-1 text-2xl font-medium text-indigo-600 text-center">
        الفئات
      </h1>
      <ul className=" rounded-lg  shadow-xs dark:bg-gray-900 text-center font-bold w-full py-8  ">
        <li
          key={'all'}
          onClick={() => setCheck('all')}
          className={`w-full flex justify-between items-center mb-3 cursor-pointer ${
            check === 'all' ? 'text-green-400 ' : 'fill-gray-500'
          }`}
        >
          <span className="w-4/5 cursor-pointer">الكل</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-10 transition duration-300 ease-in-out stroke-none ${
              check === 'all' ? 'fill-green-400 ' : 'fill-gray-500'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
              fill-rule="nonzero"
            />
          </svg>
        </li>
        {categories &&
          categories.map((category) => {
            return (
              <li
                key={category._id}
                onClick={() => setCheck(category._id)}
                className={`w-full flex justify-between items-center mb-3 cursor-pointer ${
                  check === category._id ? 'text-green-400 ' : 'fill-gray-500'
                }`}
              >
                <span className="w-4/5 cursor-pointer">{category.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-10 transition duration-300 ease-in-out stroke-none ${
                    check === category._id ? 'fill-green-400 ' : 'fill-gray-500'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
                    fill-rule="nonzero"
                  />
                </svg>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
