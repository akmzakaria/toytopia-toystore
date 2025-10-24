import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../Components/Navbar';
import Profile from '../Pages/Profile';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
  return (
    <div className="bg-linear-to-br from-black via-gray-900 to-purple-950">
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
