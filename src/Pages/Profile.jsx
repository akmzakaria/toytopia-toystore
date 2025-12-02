import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import { FaUserAlt } from 'react-icons/fa'
import Aos from 'aos'
import { useNavigation } from 'react-router'
import Loading from './Loading'

const Profile = () => {
  const { user, setUser, auth } = use(AuthContext)
  const [name, setName] = useState(user?.displayName || '')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '')
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isUpdating, setIsUpdating] = useState(false)

  const handleUpdateProfile = (e) => {
    e.preventDefault()

    if (!name.trim() || !photoURL.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      setTimeout(() => {
        setStatus({ type: 'error', message: '' })
      }, 3000)
      return
    }

    setIsUpdating(true)
    setStatus({ type: '', message: '' })

    updateProfile(auth.currentUser, { displayName: name, photoURL })
      .then(() => {
        setUser((prev) => ({ ...prev, displayName: name, photoURL }))
        setStatus({ type: 'success', message: 'Profile updated successfully!' })
        setTimeout(() => {
          setStatus({ type: 'success', message: '' })
        }, 3000)
      })
      .catch(() => {
        // console.log(err);
        setStatus({ type: 'error', message: 'Error updating profile' })
        setTimeout(() => {
          setStatus({ type: 'error', message: '' })
        }, 3000)
      })
      .finally(() => {
        setIsUpdating(false)
      })
  }

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    })
  }, [])

  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <Loading></Loading>
  }

  return (
    <div data-aos="zoom-in" className="mt-10 mb-30 flex items-center justify-center p-6 text-white">
      <title>ToyZone - Profile</title>

      <div className="bg-white backdrop-blur-xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.3)] rounded-3xl p-8 w-full max-w-md text-center transition duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]">
        {/* Profile Picture */}
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={'user'}
            className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] mb-4 object-cover"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-purple-700 flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(168,85,247,0.6)]">
            <FaUserAlt className="text-white text-4xl" />
          </div>
        )}

        {/* User Info */}
        <h2 className="text-3xl font-bold text-purple-400 mb-1">
          {user?.displayName || 'Guest User'}
        </h2>
        <p className="text-gray-600 mb-4">{user?.email || 'No email available'}</p>

        {/* Update Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-black/10 border border-purple-600 text-black rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 bg-black/10 border border-purple-600 text-black rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter new photo URL"
            />
          </div>

          <button
            type="submit"
            disabled={isUpdating}
            className={`w-full py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
              isUpdating
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]'
            }`}
          >
            {isUpdating ? 'Saving...' : 'Save Changes'}
          </button>
        </form>

        {/* Message */}
        {status.message && (
          <p
            className={`mt-3 font-medium transition-all duration-300 ${
              status.type === 'success'
                ? 'text-green-400 animate-pulse'
                : 'text-red-400 animate-bounce'
            }`}
          >
            {status.message}
          </p>
        )}

        <div className="mt-6 text-sm text-gray-400 text-center">
          <p>
            Welcome to <span className="text-purple-400 font-semibold">ToyZone</span>
          </p>
          <p>Where imagination shines bright!</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
