import React, { use, useState } from 'react';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();

  const { createUser, googleSignIn, setUser, updateUser } = use(AuthContext);

  const [show, setShow] = useState(false);

  const handleToggleEye = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(user);
        toast.success('Registered Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });

        updateUser({ displayName: name, photoURL: url })
          .then((res) => {
            console.log(res.user);
            setUser({ ...user, displayName: name, photoURL: url });
            navigate('/');
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.data);
      });
  };

  const handleSignInGoogle = (e) => {
    e.preventDefault();

    googleSignIn()
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(res.user);
        toast.success('Signed In Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              {/* form */}
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input name="name" type="text" className="input" placeholder="Enter Your Name" />

                  {/* photoURL */}
                  <label className="label">Photo URL</label>
                  <input
                    name="url"
                    type="text"
                    className="input"
                    placeholder="Enter Your PhotoURL"
                  />

                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Enter Your Email"
                  />

                  {/* password */}
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      type={show ? 'text' : 'password'}
                      className="input"
                      placeholder="Enter Your Password"
                    />
                    <button
                      onClick={handleToggleEye}
                      className="cursor-pointer absolute top-3 right-5"
                    >
                      {show ? <LuEyeClosed /> : <LuEye />}
                    </button>
                  </div>
                  <div>
                    <label className="label">
                      <input name="terms" type="checkbox" className="checkbox" />
                      Accept Our Terms & Conditions!
                    </label>
                  </div>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn rounded-full btn-primary mt-4">
                    Register
                  </button>

                  {/* google login */}
                  <button
                    onClick={handleSignInGoogle}
                    className="btn rounded-full bg-white text-black border-[#e5e5e5]"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                </fieldset>
                {/* {error && <p className="text-red-700">{error}</p>} */}
                {/* {success && <p className="text-green-600">Account created successfully!</p>} */}
              </form>
              <p>
                Already have an account?{' '}
                <Link className="underline text-primary" to="/login">
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
