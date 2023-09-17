import React, { useEffect, useState } from 'react';

import Categories from '../../components/categories/Categories';

import { getAllServices } from '../../server/guest';
import ServiceCard from '../../components/service';
const Services = () => {
  const [data, setData] = useState([]);
  const myArray = data?.data?.services;
  const [services, setServices] = useState(myArray);

  console.log('services: ', services);
  useEffect(() => {
    getAllServices().then((res) => {
      setData(res);
      setServices(res?.data?.services);
    });
  }, []);

  const handleFilter = (categoryID) => {
    if (categoryID === 'all') return setServices(myArray);
    const filteredArray = myArray?.filter((service) => {
      return service?.category?._id === categoryID;
    });
    setServices(filteredArray);
  };

  return (
    <>
      {/* <SearchForm /> */}
      <div className=" w-[95%] flex flex-col md:flex-row justify-start  gap-10 py-5 bg-gray-50	dark:bg-gray-900">
        <Categories handleFilter={handleFilter} />

        <div className="w-full grid grid-cols-4 gap-4 justify-start items-center sm:items-stretch   text-gray-600 dark:text-gray-400">
          {services && services.map((service) => <ServiceCard service={service} />)}
        </div>
      </div>
    </>
  );
};

export default Services;
