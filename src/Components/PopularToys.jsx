import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router'
import ToyCard from './ToyCard'
import Aos from 'aos'

const PopularToys = () => {
  const data = useLoaderData()

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    })
  }, [])

  return (
    <div className="max-w-7xl mx-auto">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="text-center text-primary text-xl md:text-5xl font-bold mt-10 md:mt-12 md:mb-8 mb-3"
      >
        Popular Toys
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-4 md:mx-auto place-items-center px-5 md:px-0 gap-5">
        {data.slice(0, 8).map((toy) => (
          <div key={toy.toyId}>
            <ToyCard toy={toy}></ToyCard>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 pb-12">
        <Link data-aos="zoom-in" to="/alltoys" className="btn btn-primary rounded-full mt-4 w-fit">
          Show All
        </Link>
      </div>
    </div>
  )
}

export default PopularToys
