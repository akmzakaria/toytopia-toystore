import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { MdEventAvailable, MdOutlinePriceCheck } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { Send } from 'lucide-react';

const ToyDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const fltData = data.find((data) => data.toyId == id);

  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('Successfully Submitted!');
    e.target.reset();
    setTimeout(() => setSuccess(''), 5000);
  };

  return (
    <div className="min-h-screen pb-5">
      <div className="max-w-5xl mx-auto">
        <title>ToyTopia - Toy Details</title>
        {/* toy details */}
        <div className="flex md:flex-row flex-col items-center md:gap-10 gap-5 p-5 md:p-15">
          <img
            className="rounded-lg object-cover h-60 w-60 md:h-80 md:w-80 shadow-lg"
            src={fltData.pictureURL}
          />

          <div className="flex flex-col gap-3 md:gap-5">
            <h3 className="font-bold text-center md:text-start text-2xl md:text-3xl">
              {fltData.toyName}
            </h3>
            <p className="text-sm text-center md:text-left text-gray-400">
              Category: <span className="font-medium text-white">{fltData.subCategory}</span>
            </p>
            <p className="text-sm md:text-lg text-center md:text-start text-gray-300">
              Seller: <span className="text-white font-semibold">{fltData.sellerName}</span>
            </p>
            <p className="text-sm md:text-lg text-center md:text-start text-gray-300">
              Email: <span className="text-[#753de8] font-semibold">{fltData.sellerEmail}</span>
            </p>

            <div className="flex justify-center md:justify-start gap-6 md:gap-10 mt-2">
              <div className="flex flex-col justify-center items-center md:gap-2">
                <div className="flex gap-1 items-center text-green-400">
                  <MdEventAvailable className="text-2xl" />
                  <p className="text-sm">Available</p>
                </div>
                <h1 className="font-extrabold md:text-3xl">{fltData.availableQuantity}</h1>
              </div>

              <div className="flex flex-col justify-center items-center md:gap-2">
                <div className="flex gap-1 items-center text-yellow-400">
                  <FaStar className="text-2xl" />
                  <p className="text-sm">Ratings</p>
                </div>
                <h1 className="font-extrabold md:text-3xl">{fltData.rating}</h1>
              </div>

              <div className="flex flex-col justify-center items-center md:gap-2">
                <div className="flex gap-1 items-center text-[#753de8]">
                  <MdOutlinePriceCheck className="text-3xl" />
                  <p className="text-sm">Price</p>
                </div>
                <h1 className="font-extrabold md:text-3xl">{fltData.price} $</h1>
              </div>
            </div>

            <p className="text-gray-300 mt-3">{fltData.description}</p>
          </div>
        </div>

        {/* form  */}
        <div className="flex justify-center mt-10">
          <div className="card border w-full max-w-sm shadow-2xl rounded-2xl pt-5">
            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset space-y-3">
                <h2 className="text-xl font-semibold text-center mb-2">Try It Out</h2>

                {/* name */}
                <label className="label font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 bg-black/30 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none"
                  placeholder="Enter your name"
                  required
                />

                {/* email */}
                <label className="label font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-black/30 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none"
                  placeholder="Enter your email"
                  required
                />

                {/* success message */}
                {success && (
                  <div className="text-green-500 flex gap-1 text-center font-medium mt-2 transition-all">
                    <Send />
                    {success}
                  </div>
                )}

                <div className="flex justify-center">
                  <button type="submit" className="btn btn-primary rounded-full mt-4 w-fit">
                    Try Now
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        {/* back button */}
        <div className="text-center mt-6">
          <p className="text-gray-400">Or</p>
          <Link to={-1} className="btn btn-outline btn-primary rounded-full mt-2">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
