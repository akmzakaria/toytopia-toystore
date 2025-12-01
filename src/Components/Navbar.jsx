import React, { use } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'
import { toast } from 'react-toastify'
import appLogo from '/appLogo3.png'

const Navbar = () => {
  const navigate = useNavigate()
  const { user, logOut, setUser } = use(AuthContext)
  const links = (
    <nav className="flex flex-col md:flex-row">
      <li>
        <NavLink className={'text-black active:bg-black/15'} to={'/'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={'text-black active:bg-black/15'} to={'/alltoys'}>
          All Toys
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink className={'text-black active:bg-black/15'} to={'/profile'}>
              My Profile
            </NavLink>
          </li>
        </>
      )}
    </nav>
  )

  const handleLogOut = (e) => {
    e.preventDefault()
    logOut()
      .then(() => {
        toast.warn('Logged Out Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
        setUser(null)
        navigate('/login')
      })
      .catch(() => {
        toast.warn('Unable to log out. Please try again!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
      })
  }

  return (
    <div>
      <div className="navbar rounded-full bg-[#E8FFF5] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn hover:bg-black/5 active:bg-black/15 border-0 rounded-md btn-ghost md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm w-40 flex flex-col dropdown-content bg-[#E8FFF5] rounded-box z-1 mt-3 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={'/'}
            className="btn text-gray-700 hover:bg-black/5 hover:border-0 hover:rounded-full active:bg-black/15 bg-[#E8FFF5] border-0 rounded-full text-xl"
          >
            <img className="w-10" src={appLogo} alt="" />
            ToyTopia
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            {/* profile picture with hover name */}
            {user && (
              <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
                {user.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full bg-base-300 cursor-pointer object-cover"
                    src={user.photoURL}
                    alt="User"
                  />
                ) : (
                  <img
                    className="w-10 h-10 rounded-full bg-base-300 cursor-pointer object-cover"
                    src="https://img.icons8.com/?size=64&id=rrtYnzKMTlUr&format=png"
                    alt="Default User"
                  />
                )}
              </div>
            )}

            {/* ---------------------------------- */}
            {user ? (
              <Link
                onClick={handleLogOut}
                className="btn mr-5 btn-secondary rounded-full px-5 md:px-10"
              >
                Log Out
              </Link>
            ) : (
              <Link to={'/login'} className="btn btn-primary rounded-full px-5 md:px-10">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* {user && (
        <div className="flex flex-col px-6 pb-2 text-sm">
          <p>Name: {user.displayName}</p>
          <p>
            Email: <span className="text-primary">{user.email}</span>
          </p>
        </div>
      )} */}
    </div>
  )
}

export default Navbar
