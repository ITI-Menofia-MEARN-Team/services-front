import React from 'react';

const Card = ({ imageUrl, header, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-60 cursor-pointer w-80">
      <img src={imageUrl} alt={header} className="w-80 h-20" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{header}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
