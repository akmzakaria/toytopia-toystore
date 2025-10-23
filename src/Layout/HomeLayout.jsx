import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../Components/Navbar';
import Profile from '../Pages/Profile';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
  return (
    <div>
      <header>
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
