import React from 'react';
import SearchForm from '../../components/seacrhForm/SearchForm';
import Categories from '../../components/categories/Categories';
import Card from '../../components/card/Card';
import exPic from '../../assets/react.svg';
const Services = () => {
  const cardData = [
    {
      imageUrl: exPic,
      header: 'Card Header',
      description: 'This is a generic card component with a photo, header, and description.',
    },
    {
      imageUrl: exPic,
      header: 'Card Header',
      description: 'This is a generic card component with a photo, header, and description.',
    },
    {
      imageUrl: exPic,
      header: 'Card Header',
      description: 'This is a generic card component with a photo, header, and description.',
    },
    {
      imageUrl: exPic,
      header: 'Card Header',
      description: 'This is a generic card component with a photo, header, and description.',
    },
    {
      imageUrl: exPic,
      header: 'Card Header',
      description: 'This is a generic card component with a photo, header, and description.',
    },
    {
      imageUrl: exPic,
      header: 'Card Header',
      description: 'This is a generic card component with a photo, header, and description.',
    },
  ];
  return (
    <>
      <SearchForm />
      <div className=" flex gap-4">
        <Categories />
        <div className="cards flex flex-wrap gap-4 ">
          {cardData &&
            cardData.map((card) => (
              <Card imageUrl={card.imageUrl} header={card.header} description={card.description} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
