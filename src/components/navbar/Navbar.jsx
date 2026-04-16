import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';


const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive
                            ? "bg-[#2D4F42] text-white font-semibold"
                            : "text-slate-500 hover:bg-slate-100"
                        }`
                    }
                >

                    <span className='flex items-center gap-3' ><IoHomeOutline />Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/timeline"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive
                            ? "bg-[#2D4F42] text-white font-semibold"
                            : "text-slate-600 hover:bg-slate-100"
                        }`
                    }
                >

                    <span className='flex items-center gap-2'><RiTimeLine />Timeline</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/stats"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive
                            ? "bg-[#2D4F42] text-white font-semibold"
                            : "text-slate-600 hover:bg-slate-100"
                        }`
                    }
                >

                    <span className='flex items-center gap-2'> <ImStatsDots /> Stats</span>
                </NavLink>
            </li>
        </>
    );

    return (
        <div className='bg-white border-b border-slate-100 '>
            <div className="navbar container mx-auto py-3">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box  mt-3 w-52 p-2 shadow gap-2 list-none">
                            {links}
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-start gap-2 text-center lg:text-left">
                        <span className="text-3xl font-bold tracking-tight text-[#1A2E35]">
                            Keen<span className="text-[#41a17c]">Keeper</span>
                        </span>
                    </div>
                </div>


                <div className="navbar-end hidden lg:flex">
                    <ul className="flex items-center gap-4 list-none  ">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;