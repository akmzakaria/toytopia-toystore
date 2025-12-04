import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router'
import Loading from './Loading'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const AboutUs = () => {
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
    <div className=" min-h-screen">
      {/* Header */}
      <header className=" py-6 text-center text-primary text-3xl md:text-4xl font-bold">
        ToyZone – About Us
      </header>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto bg-white mt-10 p-8 rounded-xl shadow-md">
        {/* Who We Are */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-bold">ToyZone</span>, your trusted online toy
            marketplace! We bring joy, creativity, and imagination to life with high-quality toys
            for kids of all ages. From educational toys to action figures and puzzles — we always
            bring the best for you.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple:{' '}
            <strong>
              Make kids happy while giving parents a safe, affordable, and reliable toy shopping
              experience.
            </strong>
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">Why Choose ToyZone?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Wide variety of toys for all ages</li>
            <li>Affordable prices</li>
            <li>Fast delivery across Bangladesh</li>
            <li>Safe and secure shopping experience</li>
            <li>Friendly customer support</li>
          </ul>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="bg-green-50 p-4 rounded-lg text-center shadow transition transform ease-in-out duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="font-semibold text-lg">AKM Zakaria</h3>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center shadow transition transform ease-in-out duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="font-semibold text-lg">Omar</h3>
              <p className="text-gray-600 text-sm">Product Manager</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center shadow transition transform ease-in-out duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="font-semibold text-lg">Support Team</h3>
              <p className="text-gray-600 text-sm">Customer Service</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs
