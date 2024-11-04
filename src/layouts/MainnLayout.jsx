import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import toast, { Toaster } from 'react-hot-toast';

const MainnLayout = () => {
  return (
    <div>
            <Toaster />

        {/* navbar */}
        <div className='h-16'>
         <NavBar></NavBar>
        </div>
        {/* main  */}
        <div className='min-h-[calc(100vh-292px)] container mx-auto px-12'>
          <Outlet/>
        </div>
        {/* Footer */}
        
        <Footer></Footer>
    </div>
  )
}

export default MainnLayout
