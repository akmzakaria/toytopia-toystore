import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router'
import ToyCard from './ToyCard'
import Aos from 'aos'
import Loading from '../Pages/Loading'

const AllToys = () => {
  const data = useLoaderData()

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    })
  }, [])

  // const navigation = useNavigation()

  // if (navigation.state === 'loading') {
  //   return <Loading></Loading>
  // }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="max-w-[1400px] mx-auto mb-5">
      <title>ToyZone - All Toys</title>
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="mt-2 text-xl md:text-3xl text-center lg:text-5xl text-primary font-bold"
      >
        All Toys
      </h1>
      <div className="max-w-[1400px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-4 md:mx-auto place-items-center px-5 md:px-0 gap-5">
        {data.map((toy) => (
          <div key={toy.toyId}>
            <ToyCard toy={toy}></ToyCard>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link data-aos="zoom-in" to={-1} className="btn btn-primary rounded-full mt-5">
          Go Back
        </Link>
      </div>
    </div>
  )
}

export default AllToys
