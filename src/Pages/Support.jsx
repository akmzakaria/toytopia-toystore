import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router'
import Loading from './Loading'
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa'

const Support = () => {
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
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
        ToyZone Support & Help Center
      </h1>
      <p className="text-center text-gray-600 mb-10">
        We're here to help you with anything you need. Choose a topic below.
      </p>

      {/* Sections */}
      <div className="space-y-10">
        {/* ORDER SUPPORT */}
        <section className="bg-base-100 p-6 rounded-xl shadow-md transition transform ease-in-out duration-300 hover:shadow-xl hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">📦 Order Support</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Track Your Order:</strong> Use our tracking page to get real-time updates.
            </p>
            <p>
              <strong>Cancel or Change an Order:</strong> You can modify or cancel within{' '}
              <b>1 hour</b>
              of placing the order.
            </p>
          </div>
        </section>

        {/* PAYMENT SUPPORT */}
        <section className="bg-base-100 p-6 rounded-xl shadow-md transition transform ease-in-out duration-300 hover:shadow-xl hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">💰 Payment & Billing</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Accepted Payments:</strong> Cash on Delivery, bKash, Nagad, Cards & Online
              Banking.
            </p>
            <p>
              <strong>Failed Payment:</strong> Refunds are processed within <b>3–5 working days</b>.
            </p>
          </div>
        </section>

        {/* SHIPPING */}
        <section className="bg-base-100 p-6 rounded-xl shadow-md transition transform ease-in-out duration-300 hover:shadow-xl hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">🚚 Shipping & Delivery</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Inside Dhaka:</strong> 1–2 days
            </p>
            <p>
              <strong>Outside Dhaka:</strong> 3–5 days
            </p>
            <p>
              <strong>Delivery Charge:</strong> ৳60 (Dhaka), ৳120 (Outside Dhaka)
            </p>
          </div>
        </section>

        {/* RETURNS */}
        <section className="bg-base-100 p-6 rounded-xl shadow-md transition transform ease-in-out duration-300 hover:shadow-xl hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">🔄 Returns & Refunds</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              Return damaged or incorrect items within <b>7 days</b>.
            </p>
            <p>We’ll arrange pickup or send a replacement.</p>
          </div>
        </section>

        {/* SAFETY */}
        <section className="bg-base-100 p-6 rounded-xl shadow-md transition transform ease-in-out duration-300 hover:shadow-xl hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3">👶 Product Safety</h2>

          <p className="text-gray-700">
            All toys are non-toxic, kid-safe, and quality-checked. Need help choosing a toy? Contact
            us anytime!
          </p>
        </section>
      </div>
    </div>
  )
}

export default Support
