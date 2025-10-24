import { Send } from 'lucide-react';
import React, { useState } from 'react';

const MailUs = () => {
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('Successfully Sent!');
    e.target.reset();
    setTimeout(() => setSuccess(''), 5000);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card border w-full max-w-sm md:max-w-lg lg:max-w-xl shadow-2xl rounded-2xl pt-5">
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset space-y-3">
            <h2 className="text-xl font-semibold text-center mb-2">Mail Us</h2>

            {/* email */}
            <label className="label font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-3 bg-black/30 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter your email"
              required
            />

            {/* feedback */}
            <label className="label font-medium">Feedback</label>
            <textarea
              name="feedback"
              rows={5}
              className="w-full px-4 py-3 bg-black/30 border border-purple-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none resize-none"
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
  );
};

export default MailUs;
