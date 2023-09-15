import React from 'react';
import SearchForm from '../../components/seacrhForm/SearchForm';
import Categories from '../../components/categories/Categories';
import Card from '../../components/card/Card';
import exPic from '../../assets/react.svg';
const Services = () => {
  const cardData = [
    {
      imageUrl: exPic,
      heading: 'الخصائص',
      description: [
        {
          id: 0,
          value: 'الخاصية الاولى ',
        },
        {
          id: 1,
          value: 'الخاصية الثانية ',
        },
        {
          id: 2,
          value: 'الخاصية الثالثة ',
        },
      ],
    },
    {
      imageUrl: exPic,
      heading: 'الخصائص',
      description: [
        {
          id: 0,
          value: 'الخاصية الاولى ',
        },
        {
          id: 1,
          value: 'الخاصية الثانية ',
        },
      ],
    },
    {
      imageUrl: exPic,
      heading: 'الخصائص',
      description: [
        {
          id: 0,
          value: 'الخاصية الاولى ',
        },
        {
          id: 1,
          value: 'الخاصية الثانية ',
        },
        {
          id: 2,
          value: 'الخاصية الثالثة ',
        },
        {
          id: 3,
          value: 'الخاصية الرابعه ',
        },
        {
          id: 4,
          value: 'الخاصية الخامسة ',
        },
      ],
    },
    {
      imageUrl: exPic,
      heading: 'الخصائص',
      description: [
        {
          id: 0,
          value: 'الخاصية الاولى ',
        },
        {
          id: 1,
          value: 'الخاصية الثانية ',
        },
        {
          id: 2,
          value: 'الخاصية الثالثة ',
        },
        {
          id: 3,
          value: 'الخاصية الرابعه ',
        },
      ],
    },
    {
      imageUrl: exPic,
      heading: 'الخصائص',
      description: [
        {
          id: 0,
          value: 'الخاصية الاولى ',
        },
        {
          id: 1,
          value: 'الخاصية الثانية ',
        },
      ],
    },
    {
      imageUrl: exPic,
      heading: 'الخصائص',
      description: [
        {
          id: 0,
          value: 'الخاصية الاولى ',
        },
      ],
    },
  ];
  return (
    <>
      {/* <SearchForm /> */}
      <div className=" w-[90%] mx-auto bg-gray-50	 flex  flex-col md:flex-row  justify-center md:justify-evenly gap-12 p-6 dark:bg-gray-800">
        <Categories />

        <div className="cards w-[80%]   flex flex-wrap gap-6  justify-center content-center text-center   items-center sm:items-stretch   text-gray-600 dark:text-gray-400">
          {cardData &&
            cardData.map((card) => (
              <Card imageUrl={card.imageUrl} heading={card.heading} description={card.description} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
