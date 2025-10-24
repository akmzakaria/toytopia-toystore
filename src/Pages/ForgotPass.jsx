import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const ForgotPass = () => {
  const navigate = useNavigate();
  const { fotgotpass } = use(AuthContext);

  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');

  const handleReset = (e) => {
    e.preventDefault();
    // Redirect to Gmail with pre-filled "To" field
    // window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, '_blank');

    fotgotpass(email)
      .then(() => {
        toast.info('Reset email sent! Please check your email.');
        setTimeout(() => {
          window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');
        }, 2000);
      })
      .catch(() => {
        toast.warn('Something went wrong! Please try again later.');
      });
  };

  return (
    <div className="hero min-h-screen bg-linear-to-br from-black via-gray-900 to-purple-950">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold text-white mb-4">Reset Password</h1>

        <div className="card w-full max-w-sm bg-black/50 backdrop-blur-lg rounded-2xl border border-purple-500/30 shadow-2xl p-6">
          <form onSubmit={handleReset} className="flex flex-col gap-4">
            <label className="text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input bg-transparent border border-white text-white rounded-lg placeholder-gray-400"
              required
            />
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary rounded-full w-fit">
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Or</p>
          <Link to={-1} className="btn btn-outline btn-primary rounded-full mt-2">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
