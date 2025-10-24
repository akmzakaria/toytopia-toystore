import React from 'react';
import { Link } from 'react-router';
import './Footer.css';

const Footer = () => {
  return (
    <div className=" text-[#A1A1AA] bg-linear-to-b from-black/35 via-black/30 to-black/10">
      <div className="flex md:flex-row flex-col md:justify-around text-center max-w-[1400px] mx-auto gap-8 py-10">
        <div className="flex-2 flex-col">
          <h2 className="font-bold mb-3 text-white">ToyTopia</h2>

          <p className="px-10 text-sm md:text-[1rem] md:px-0">
            ToyTopia — a magical world of fun and imagination! Discover a wide collection of
            exciting, safe, and creative toys for kids of all ages. From cars to action figures,
            puzzles to plushies — every toy brings joy and adventure!
          </p>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 text-white">Company</h2>

          <Link>
            <p className="mb-2">About Us</p>
          </Link>
          <Link>
            <p className="mb-2">Our Mission</p>
          </Link>
          <Link>
            <p>Contact Saled</p>
          </Link>
        </div>

        <div className="flex-1 flex-col text-sm md:text-[1rem]">
          <h2 className="font-bold mb-3 text-white">Services</h2>

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
          <h2 className="font-bold mb-3 text-white">Information</h2>

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
          <h2 className="font-bold mb-3 text-white">Social Links</h2>

          <Link>
            <p className="mb-2">
              <i className="fa-brands fa-x-twitter"></i> x-twitter
            </p>
          </Link>
          <Link>
            <p className="mb-2">
              <i className="fa-brands fa-linkedin-in"></i> LinkedIn
            </p>
          </Link>
          <Link>
            <p className="mb-2">
              <i className="fa-brands fa-facebook-f"></i> FaceBook
            </p>
          </Link>
          <Link>
            <p>
              <i className="fa-regular fa-envelope"></i> app.support@gmail.com
            </p>
          </Link>
        </div>
      </div>
      <hr className="border-gray-600 max-w-[1400px] mx-auto" />

      <footer className="p-5 text-xs md:text-sm text-center">
        © 2025 ToyToia. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
