import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ToyCard from './ToyCard';

const AllToys = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-[1400px] mx-auto">
      <title>ToyTopia - All Toys</title>
      <h1 className="mt-2 text-xl md:text-3xl text-center lg:text-5xl text-primary font-bold">
        All Toys
      </h1>
      <div className="max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-auto place-items-center px-5 gap-5">
        {data.map((toy) => (
          <div key={toy.toyId}>
            <ToyCard toy={toy}></ToyCard>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={-1} className="btn btn-primary rounded-full mt-5">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AllToys;
