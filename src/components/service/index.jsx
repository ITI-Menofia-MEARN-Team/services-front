import React from 'react';
import { Link } from 'react-router-dom';

import defaultImage from '../../assets/service.png';

const ServiceCard = ({ service }) => {
  return (
    <div className=" bg-white rounded-lg dark:bg-gray-800 shadow-md text-gray-600 dark:text-gray-400 overflow-hidden">
      <img
        src={service.images[0] ? `http://localhost:8000/uploads/service/${service.images[0]}` : defaultImage}
        className="w-full h-2/5 object-cover "
      />
      <div className="relative h-3/5 px-3">
        <div className="flex justify-between items-center my-2">
          <h6 className="text-gray-600 dark:text-gray-400 text-sm">{service.category?.name}</h6>
          <h6 className="text-blue-800 cursor-pointer text-sm">{service.company?.full_name.slice(0, 20)}..</h6>
        </div>
        <h2 className="font-bold text-lg">{service.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm ">{service.description.slice(0, 50)}.....</p>
        <Link to={`/service/${service._id}`} className="absolute bottom-1 left-0 ">
          <button className=" px-3 py-2 flex items-center justify-center gap-2 rounded bg-indigo-600 text-md font-medium transition hover:scale-105 text-white">
            <span>المزيد</span>
            <svg
              width="24"
              height="24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;