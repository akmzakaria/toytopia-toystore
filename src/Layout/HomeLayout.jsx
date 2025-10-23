import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../Components/Navbar';
import Profile from '../Pages/Profile';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-1">
        <Navbar></Navbar>
      </header>

      <main className="">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
