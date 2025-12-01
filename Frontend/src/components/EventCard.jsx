import React from "react";

const EventCard = ({ image, title, date, price }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-3">
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-40 object-cover"
      />

      <div className="mt-3">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-500">{date}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold text-gray-900">{price}DH</span>
          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
