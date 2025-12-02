import React from 'react'
import Slider from '../Components/Slider'
import PopularToys from '../Components/PopularToys'
import StatsSection from '../Components/StatsSection'
import MailUs from '../Components/Feedback'
import Feedback from '../Components/Feedback'
import { AuthContext } from '../Provider/AuthProvider'
import Loading from './Loading'
import { useNavigation } from 'react-router'

const Home = () => {
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <div>
      <title>ToyTopia - Home</title>
      <Slider></Slider>
      <PopularToys></PopularToys>
      <StatsSection></StatsSection>
      <Feedback></Feedback>
    </div>
  )
}

export default Home
