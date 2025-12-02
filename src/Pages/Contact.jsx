import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router'
import Loading from './Loading'

const Contact = () => {
  //   const navigation = useNavigation()

  //   if (navigation.state === 'loading') {
  //     return <Loading></Loading>
  //   }

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
      <p>This is contact</p>
    </div>
  )
}

export default Contact
