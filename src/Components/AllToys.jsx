import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ToyCard from './ToyCard';

const AllToys = () => {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center">
      <title>ToyTopia - All Toys</title>
      <h1 className="mt-2 text-xl md:text-3xl lg:text-5xl text-primary font-bold">All Toys</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-auto place-items-center gap-10">
        {data.map((toy) => (
          <div key={toy.toyId}>
            <ToyCard toy={toy}></ToyCard>
          </div>
        ))}
      </div>
      <Link to={-1} className="btn btn-primary rounded-full mt-5">
        Go Back
      </Link>
    </div>
  );
};

export default AllToys;
