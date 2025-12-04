import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router'
import Loading from './Loading'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
        Contact ToyZone
      </h1>
      <p className="text-center text-gray-600 mb-10">
        We're always ready to assist you. Feel free to reach out anytime!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* CONTACT INFO */}
        <div className="space-y-6 bg-base-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">📞 Get in Touch</h2>

          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-primary" />
            <p className="text-gray-700">+880 1XXX-XXXXXX</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-primary" />
            <p className="text-gray-700">support@toyzone.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-primary" />
            <p className="text-gray-700">Dhaka, Bangladesh</p>
          </div>

          <h3 className="font-semibold mt-6">Follow us</h3>
          <div className="flex items-center gap-5 text-primary text-2xl">
            <FaFacebook className="cursor-pointer hover:text-blue-600 duration-200" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 duration-200" />
          </div>

          <p className="text-gray-500 mt-6">
            Support Hours: <b>Every day, 9 AM – 10 PM</b>
          </p>
        </div>

        {/* CONTACT FORM */}
        <form className="bg-base-100 p-6 rounded-xl shadow-md space-y-5">
          <h2 className="text-2xl font-semibold mb-4">✉️ Send Us a Message</h2>

          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              className="textarea textarea-bordered w-full h-32"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button className="btn btn-primary w-full text-white">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
