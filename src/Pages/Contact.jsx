import React from 'react'
import { useNavigation } from 'react-router'
import Loading from './Loading'

const Contact = () => {
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }
  return (
    <div>
      <p>This is contact</p>
    </div>
  )
}

export default Contact
