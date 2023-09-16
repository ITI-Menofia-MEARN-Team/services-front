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
    <div className="flex">
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
        <button className="w-full px-4 py-2  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          شراء
        </button>
      </div>
      <div className="w-1/2 p-6 min-w-0 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="relative">
          <img src={imgArr[currentImageIndex]} alt="Slider Image" className="rounded-lg w-96 m-auto" />
          {imgArr.length > 1 && (
            <>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white focus:outline-none py-2 text-xl font-medium leading-5 transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 pb-3 focus:shadow-outline-purple px-4"
                onClick={handlePrevImage}
              >
                &#8249;
              </button>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white focus:outline-none py-2 text-xl font-medium leading-5  transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 pb-3 focus:shadow-outline-purple px-4
                "
                onClick={handleNextImage}
              >
                &#8250;
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
