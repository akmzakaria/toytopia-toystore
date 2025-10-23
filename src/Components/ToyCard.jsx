import React from 'react';
import { Link } from 'react-router';
import img from '../assets/green-black_car.webp';
import { MdEventAvailable } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const ToyCard = ({ toy }) => {
  return (
    <div>
      <div className="flex flex-col shadow rounded-xl w-[150px] md:w-[300px] gap-2 p-4 bg-white">
        <img className="w-full rounded-2xl" src={img} alt="" />
        <h3 className=" text-[#001931] font-medium md:text-xl">{toy.toyName}</h3>
        <p className="text-[#001931]">Price: {toy.price}$</p>
        <div className="flex justify-between text-xs md:text-[1rem] font-medium">
          <p className="text-[#00D390] flex gap-1 items-center">
            <MdEventAvailable />
            {toy.availableQuantity}
          </p>
          <p className="text-[#FF8811] flex items-center gap-1">
            <FaStar></FaStar>
            {toy.rating}
          </p>
        </div>
        <Link to={`/toydetails/${toy.toyId}`} className="text-[#6c38e6]">
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
