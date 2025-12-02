import React, { useEffect, useState } from 'react'
import Slider from '../Components/Slider'
import PopularToys from '../Components/PopularToys'
import StatsSection from '../Components/StatsSection'
import MailUs from '../Components/Feedback'
import Feedback from '../Components/Feedback'
import { AuthContext } from '../Provider/AuthProvider'
import Loading from './Loading'

const Home = () => {
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
    <div>
      <title>ToyZone - Home</title>
      <Slider></Slider>
      <PopularToys></PopularToys>
      <StatsSection></StatsSection>
      <Feedback></Feedback>
    </div>
  )
}

export default Home
