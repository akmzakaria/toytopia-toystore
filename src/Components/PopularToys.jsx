import React from 'react'
import { Link, useLoaderData } from 'react-router'
import ToyCard from './ToyCard'

const PopularToys = () => {
  const data = useLoaderData()

  return (
    <div className="max-w-[1400px] mx-auto">
      <h1 className="text-center text-primary text-xl md:text-5xl font-bold mt-10 md:mt-12 md:mb-8 mb-3">
        Popular Toys
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-4 md:mx-auto place-items-center px-5 gap-5">
        {data.slice(0, 8).map((toy) => (
          <div key={toy.toyId}>
            <ToyCard toy={toy}></ToyCard>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 pb-12">
        <Link
          to="/alltoys"
          className="btn bg-linear-to-r from-[#6d10ac] to-[#9c47d4] border-0 rounded-full"
        >
          Show All
        </Link>
      </div>
    </div>
  )
}

export default PopularToys
