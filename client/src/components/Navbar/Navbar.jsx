import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircle } from "react-icons/io5";

// main logo
import mainLogo from "/main_logo/main_logo.png";
// main logo

const Navbar = () => {

    const links = <>
        <li><Link to="/" className='font-semibold text-white'>Home</Link></li>
        <li><Link to="/category" className='font-semibold text-white'>Category</Link></li>
        <li><Link to="/contact" className='font-semibold text-white'>Contact</Link></li>
        <li><Link to="/about" className='font-semibold text-white'>About</Link></li>
    </>
    return (
        <div className='pb-[4.3rem]'>

            <div className="navbar bg-emerald-500 fixed z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/">
                        <img className='w-12' src={mainLogo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        
                        <div className="z-50 dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="text-5xl rounded-full">
                                    {/* <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                                    <IoPersonCircle className="" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link to="/login">Login</Link></li>
                                <li><Link>Dark Mode</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Navbar;