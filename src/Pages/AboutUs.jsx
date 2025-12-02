import React from 'react'
import { useNavigation } from 'react-router'
import Loading from './Loading'

const AboutUs = () => {
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }
  return (
    <div>
      <p>this is about us</p>
    </div>
  )
}

export default AboutUs
