import React from "react";
import { IoIosStar } from "react-icons/io";

const Ratings = ({ rating }: { rating: any }) => {
  rating = JSON?.parse(rating);

  return (
    <div className="gap flex items-center text-orange-400">
      {Array(4)
        .fill(1)
        .map((star, indx) => (
          <IoIosStar key={indx} />
        ))}
      <div className="pl-2 text-blue-900">{rating.count} ratings</div>
    </div>
  );
};

export default Ratings;
