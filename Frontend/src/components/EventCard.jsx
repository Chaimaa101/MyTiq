import React from "react";
import {
  FaCalendarDay,
  FaEuroSign,
  FaLocationDot,
  FaTicket,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const EventCard = ({ image,id,  title, date, place, capacity, price }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-3">
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-40 object-cover"
      />
      <div className="mt-3">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaCalendarDay className="text-gray-500" />
          {date}
        </p>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaLocationDot className="text-gray-500" />
          {place}
        </p>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaTicket className="text-gray-500" />
          {capacity}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold text-gray-900 flex items-center gap-1">
            <FaEuroSign className="text-gray-500" />
            {price} DH
          </span>

          <Link to={`/details/${id}`} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
            Voir details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
