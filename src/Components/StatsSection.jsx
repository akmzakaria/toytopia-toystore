import Aos from 'aos'
import React, { useEffect } from 'react'

const StatsSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    })
  }, [])

  return (
    <div
      data-aos="zoom-in"
      className="text-center p-10 md:p-20 bg-black/10 text-gray-800 rounded-2xl "
    >
      <div className="md:max-w-[1600px] mx-auto ">
        <h1 className="mb-5 text-xl md:text-5xl font-bold">Trusted by Millions, Built for You</h1>

        <div className="flex flex-col md:flex-row md:justify-around gap-10">
          <div className="flex flex-col text-xs md:text-[1rem] md:gap-3">
            <p>Total Sales</p>
            <h1 className="font-extrabold text-2xl md:text-6xl">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="flex flex-col text-xs md:text-[1rem] md:gap-3">
            <p>Total Reviews</p>
            <h1 className="font-extrabold text-2xl md:text-6xl">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="flex flex-col text-xs md:text-[1rem] md:gap-3">
            <p>Available Products</p>
            <h1 className="font-extrabold text-2xl md:text-6xl">132+</h1>
            <p>31 more coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
