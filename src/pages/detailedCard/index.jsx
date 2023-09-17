import React, { useState } from 'react';
import exPic from '../../assets/react.svg';

const DetailedCard = () => {
  const imgArr = [exPic, exPic, exPic, exPic, exPic, exPic];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickThumbnail = (index) => {
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    if (currentImageIndex < imgArr.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center">
      <div className="w-1/2 p-6">
        <h1 className="text-3xl font-bold mb-2 items-center text-gray-600 dark:text-gray-400">عنوان</h1>
        <p className="items-center text-gray-600 dark:text-gray-400">
          البرمجة الشبه مدمجة هي مجال مثير للغاية يجمع بين مهارات هندسة البرمجيات والهندسة الإلكترونية. يعمل مهندسو
          البرمجة الشبه مدمجة على تطوير البرمجيات التي تعمل داخل أجهزة مثل الميكروكنترولرات والأنظمة المدمجة. تشمل
          مهامهم تصميم البرامج، وتطويرها، واختبارها لضمان أداء النظام بكفاء
        </p>
        <p className=" items-center text-gray-600 dark:text-gray-400">
          البرمجة الشبه مدمجة هي مجال مثير للغاية يجمع بين مهارات هندسة البرمجيات والهندسة الإلكترونية. يعمل مهندسو
          البرمجة الشبه مدمجة على تطوير البرمجيات التي تعمل داخل أجهزة مثل الميكروكنترولرات والأنظمة المدمجة. تشمل
          مهامهم تصميم البرامج، وتطويرها، واختبارها لضمان أداء النظام بكفاء
        </p>
        <button className="rounded border border-indigo-600 px-12 py-3 text-lg font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 my-5 flex justify-center items-center gap-3 group">
          <span> طلب الخدمة </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-indigo-500 group-hover:fill-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 0v2h-18v18h-2v-20h20zm4 22.15l-1.85 1.85-8.906-9.196 1.85-1.85 8.906 9.196zm-6.718-5.902l-2.188-2.189-.745.746 2.188 2.189.745-.746zm.147 5.752h-11.429v-16h16v11.21l2 2.065v-15.275h-20v20h15.366l-1.937-2zm.86-11.987c.253.825.898 1.471 1.724 1.723-.825.252-1.471.897-1.724 1.723-.251-.826-.897-1.471-1.723-1.723.826-.252 1.472-.898 1.723-1.723zm-8.017 4.243c.333 1.095 1.191 1.951 2.285 2.285-1.094.334-1.952 1.191-2.285 2.285-.335-1.094-1.191-1.951-2.285-2.285 1.095-.334 1.951-1.19 2.285-2.285zm3.138-3.739c.177.584.635 1.041 1.219 1.219-.584.178-1.042.635-1.219 1.219-.179-.584-.636-1.041-1.22-1.219.584-.178 1.041-.635 1.22-1.219z" />
          </svg>{' '}
        </button>
      </div>
      <div className="w-1/2 p-6 min-w-0 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="relative">
          <img src={imgArr[currentImageIndex]} alt="Slider Image" className="rounded-lg w-96 m-auto" />
          {imgArr.length > 1 && (
            <>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white focus:outline-none py-2 text-xl font-medium leading-5 transition-colors duration-150 w-10"
                onClick={handlePrevImage}
              >
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  className="fill-indigo-600 "
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
                </svg>
              </button>
              <button className="absolute top-1/2 transform -translate-y-1/2 left-2 w-10 " onClick={handleNextImage}>
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  className="fill-indigo-600 "
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className="mt-4 flex justify-center space-x-2">
          {imgArr.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`w-12 h-12 rounded-full cursor-pointer border-2 ${
                currentImageIndex === index ? 'border-blue-600' : 'border-white'
              }`}
              onClick={() => handleClickThumbnail(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
