import React, { useEffect, useState } from 'react';

import Categories from './Categories';

import { getAllServices } from '../server/guest';
import ServiceCard from './ServiceCard';
import { Spinner } from '.';
import { useLocation } from 'react-router-dom';

const Services = ({ servicesProp, withCategory = false }) => {
  const { pathname } = useLocation();
  const [myArray, setMyArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setMyArray(servicesProp);
    setServices(servicesProp);
    console.log('myArray: ', myArray);
    console.log('services: ', services);
    setLoading(false);
  }, [pathname, servicesProp]);

  const handleFilter = (categoryID) => {
    if (categoryID === 'all') return setServices(myArray);
    const filteredArray = myArray?.filter((service) => {
      return service?.category?._id === categoryID;
    });
    setServices(filteredArray);
  };

  if (loading) return <Spinner />;
  else
    return (
      <>
        {/* services */}
        <div className=" w-[95%] flex flex-col md:flex-row justify-start  gap-10 py-5 bg-gray-50	dark:bg-gray-900">
          {withCategory && <Categories handleFilter={handleFilter} />}

          <div className="w-full grid grid-cols-4 gap-4 justify-start items-center sm:items-stretch   text-gray-600 dark:text-gray-400">
            {services && services.map((service) => <ServiceCard key={service._id} service={service} />)}
          </div>
        </div>
      </>
    );
};

export default Services;
