import React from 'react'
import { useNavigation } from 'react-router'
import Loading from './Loading'

const Support = () => {
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <div>
      <p>This is support</p>
    </div>
  )
}

export default Support
