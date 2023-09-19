import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getSingleService } from '../server/guest';
import { AuthContext } from '../contexts/Auth';
import { placeOrder } from '../server/user';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const { user } = useContext(AuthContext);
  console.log('user: ', user);

  const handleOrder = () => {
    setLoading(true);

    if (user === null) {
      toast.error('لازم تسجل الاول ', {
        position: toast.POSITION.TOP_LEFT,
      });
      return navigate('/login');
    }

    const data = {
      user: user.user.id,
      company: service?.company?._id,
      service: service?._id,
      total_price: 500,
    };
    console.log('data: ', data);

    placeOrder(data, user.token).then((res) => {
      if (res.status === 'success') {
        setLoading(false);
        setSent(true);
        toast.success('تم ارسال طلبك بنجاح', {
          position: toast.POSITION.TOP_LEFT,
        });
      }

      setTimeout(() => setSent(false), 2000);
    });
  };

  const { id } = useParams();
  console.log('id: ', id);
  const [service, setService] = useState({});
  console.log('service: ', service);

  useEffect(() => {
    getSingleService(id).then((res) => setService(res.data.service));
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickThumbnail = (index) => {
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    if (currentImageIndex < service?.images?.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Africa/Cairo',
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center">
      <div className="w-1/2 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 items-center text-gray-600 dark:text-gray-400">{service.title}</h1>
            <p className="items-center text-sm text-gray-500 dark:text-gray-600 mb-5">
              {new Intl.DateTimeFormat('ar-EG', options).format(new Date(service.createdAt || 2015))}
            </p>
          </div>
          <div className="text-2xl font-medium text-indigo-600  ">{service.price} جنيه</div>
        </div>
        <p className="items-center text-gray-600 dark:text-gray-400">{service.description}</p>
        <div className="py-4">
          {/* <ol>
            {
              service && service?.props?.map(prop => <li key={prop._id}>{prop.title}</li>)
            }
          </ol> */}
        </div>
        <div className="flex justify-start items-center gap-4">
          <button
            onClick={handleOrder}
            disabled={loading}
            className="rounded border border-indigo-600 px-12 py-3 text-lg font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 my-5 flex justify-center items-center gap-3 disabled:bg-indigo-900 disabled:opacity-[0.7] group"
          >
            <span> طلب الخدمة </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-indigo-500 group-hover:fill-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 0v2h-18v18h-2v-20h20zm4 22.15l-1.85 1.85-8.906-9.196 1.85-1.85 8.906 9.196zm-6.718-5.902l-2.188-2.189-.745.746 2.188 2.189.745-.746zm.147 5.752h-11.429v-16h16v11.21l2 2.065v-15.275h-20v20h15.366l-1.937-2zm.86-11.987c.253.825.898 1.471 1.724 1.723-.825.252-1.471.897-1.724 1.723-.251-.826-.897-1.471-1.723-1.723.826-.252 1.472-.898 1.723-1.723zm-8.017 4.243c.333 1.095 1.191 1.951 2.285 2.285-1.094.334-1.952 1.191-2.285 2.285-.335-1.094-1.191-1.951-2.285-2.285 1.095-.334 1.951-1.19 2.285-2.285zm3.138-3.739c.177.584.635 1.041 1.219 1.219-.584.178-1.042.635-1.219 1.219-.179-.584-.636-1.041-1.22-1.219.584-.178 1.041-.635 1.22-1.219z" />
            </svg>
          </button>
          {loading && (
            <div className=" flex items-center justify-center">
              <svg
                className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {sent && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-12 transition duration-300 ease-in-out stroke-none fill-green-400 
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
          )}
        </div>
      </div>
      <div className="w-1/2 p-6 min-w-0 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="relative">
          <div>
            <img
              src={`http://localhost:8000/uploads/service/${service.images?.[currentImageIndex]}`}
              alt="Slider Image"
              className="rounded-lg w-[500px] h-[400px] object-cover m-auto"
            />
          </div>
          {service.images?.length > 1 && (
            <>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white focus:outline-none py-2 text-xl font-medium leading-5 duration-150 w-20 transition hover:scale-105"
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
              <button
                className="absolute top-1/2 transform -translate-y-1/2 left-2 w-20 transition hover:scale-105"
                onClick={handleNextImage}
              >
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
        <div className="mt-4 flex justify-center items-center gap-2">
          {service.images?.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:8000/uploads/service/${img}`}
              alt="Thumbnail"
              className={`w-28 h-16 object-cover  rounded cursor-pointer border-2 ${
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

export default ServiceDetails;
