import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen' >
            {/* navbar section */}
            <Navbar></Navbar>
            {/* main section */}
            <main className='flex-1' >
            <Outlet></Outlet>
            </main>
          {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default Root;