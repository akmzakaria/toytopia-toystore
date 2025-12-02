import React from 'react'
import Home from '../Pages/Home'
import Navbar from '../Components/Navbar'
import Profile from '../Pages/Profile'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import { ToastContainer } from 'react-toastify'
import Loading from '../Pages/Loading'

const HomeLayout = () => {
  return (
    <div className="bg-[#E8FFF5]">
      <div className={'bg-[#E8FFF5] '}>
        <header className="sticky max-w-7xl mx-auto top-0 z-50">
          <Navbar></Navbar>
        </header>

        <main className="max-w-7xl mx-auto">
          <Outlet></Outlet>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  )
}

export default HomeLayout
