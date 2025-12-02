import React, { useEffect } from 'react'
import { Link } from 'react-router'
import './Footer.css'
import { FaFacebook, FaXTwitter } from 'react-icons/fa6'
import { BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import appLogo from '/appLogo3.png'
import Aos from 'aos'

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    })
  }, [])

  return (
    <div className=" text-black bg-black/25">
      <div className="flex md:flex-row flex-col md:justify-around text-center max-w-[1400px] mx-auto gap-8 py-10">
        <div className="flex-2 flex-col">
          <div className="flex items-center gap-1 justify-center mb-3">
            <img className="w-8" src={appLogo} alt="" />
            <h2 className="font-bold">ToyTopia</h2>
          </div>

          <p className="px-10 text-sm md:text-[1rem] md:px-0">
            ToyTopia — a magical world of fun and imagination! Discover a wide collection of
            exciting, safe, and creative toys for kids of all ages. From cars to action figures,
            puzzles to plushies — every toy brings joy and adventure!
          </p>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 text-black">Company</h2>

          <Link>
            <p className="mb-2">About Us</p>
          </Link>
          <Link>
            <p className="mb-2">Our Mission</p>
          </Link>
          <Link>
            <p>Contact Sales</p>
          </Link>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 text-black">Services</h2>

          <Link>
            <p className="mb-2">Products & Services</p>
          </Link>
          <Link>
            <p className="mb-2">Customer Stories</p>
          </Link>
          <Link>
            <p>Buy Products</p>
          </Link>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 text-black">Information</h2>

          <Link>
            <p className="mb-2">Privacy Policy</p>
          </Link>
          <Link>
            <p className="mb-2">Terms & Conditions</p>
          </Link>
          <Link>
            <p>Join Us</p>
          </Link>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 text-black">Social Links</h2>

          <Link>
            <div className="flex items-center justify-center gap-2 mb-2">
              <BsTwitterX />
              <p>x-twitter</p>
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center gap-2 mb-2">
              <BsLinkedin></BsLinkedin>
              <p>LinkedIn</p>
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaFacebook></FaFacebook>
              <p>FaceBook</p>
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-xl">
                <CgMail></CgMail>
              </p>
              <p>app.support@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>
      <hr className="border-gray-600 max-w-[1400px] mx-auto" />

      <footer className="p-5 text-xs md:text-sm text-center">
        © 2025 ToyToia. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer
