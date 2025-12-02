import Aos from 'aos'
import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Feedback = () => {
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess('Successfully Sent!')
    e.target.reset()
    setTimeout(() => setSuccess(''), 5000)
  }

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    })
  }, [])

  return (
    <div data-aos="zoom-in" className="flex justify-center px-2 my-15">
      <div className="card border w-full max-w-sm md:max-w-lg lg:max-w-xl shadow-2xl rounded-2xl pt-5">
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset space-y-3">
            <h2 className="text-xl font-semibold text-gray-700 text-center mb-2">Send Feedback</h2>

            {/* email */}
            <label className="label text-gray-700 font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-3 bg-black/10 border border-purple-600 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter your email"
              required
            />

            {/* feedback */}
            <label className="label text-gray-700 font-medium">Feedback</label>
            <textarea
              name="feedback"
              rows={5}
              className="w-full px-4 py-3 bg-black/10 border border-purple-600 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-400 outline-none resize-none"
              placeholder="Enter your feedback"
              required
            />

            {/* success message */}
            {success && (
              <div className="text-green-500 flex gap-1 text-center font-medium mt-2 transition-all">
                <Send />
                {success}
              </div>
            )}

            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary rounded-full mt-4 w-fit">
                Send Us
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Feedback
