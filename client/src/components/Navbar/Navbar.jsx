// import React, { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Link } from 'react-router-dom';
// import { IoPersonCircle } from "react-icons/io5";

// // main logo
// import mainLogo from "/main_logo/main_logo.png";
// // main logo

// const Navbar = () => {

//     const { user, logOut } = useContext(AuthContext);

//     const handleLogOut = () => {
//         logOut()
//             .then()
//             .catch(error => {
//                 console.error(error);
//             });
//     };

//     const links = <>
//         <li><Link to="/" className='font-semibold text-white'>Home</Link></li>
//         <li><Link to="/category" className='font-semibold text-white'>Category</Link></li>
//         {/* {
//             user ?
//                 <li><Link to="/dashboard" className='font-semibold text-white'>Dashboard</Link></li>
//                 :
//                 <div></div>
//         } */}
//         {user && <li><Link to="/dashboard" className='font-semibold text-white'>Dashboard</Link></li>}
//         <li><Link to="/contact" className='font-semibold text-white'>Contact</Link></li>
//         <li><Link to="/about" className='font-semibold text-white'>About</Link></li>
//     </>;

//     return (
//         <div className='pb-[4.3rem]'>
//             <div className="navbar bg-emerald-500 fixed z-50">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             {links}
//                         </ul>
//                     </div>
//                     <Link to="/">
//                         <img className='w-12' src={mainLogo} alt="main logo" />
//                     </Link>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {links}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <div className="flex-none">
//                         <div className="z-50 dropdown dropdown-end">
//                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                 <div className="text-5xl rounded-full">
//                                     <IoPersonCircle />
//                                 </div>
//                             </div>
//                             <ul
//                                 tabIndex={0}
//                                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                                 {
//                                     user ?
//                                         <li><Link to="/account-details">Account Details</Link></li>
//                                         :
//                                         <></>
//                                 }
//                                 <li><Link>Dark Mode</Link></li>
//                                 {
//                                     user ?
//                                         <>
//                                             <li><Link onClick={handleLogOut}>Log Out</Link></li>
//                                         </>
//                                         :
//                                         <li><Link to="/login">Log In</Link></li>
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar


import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, Navigate } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';
import mainLogo from '/main_logo/main_logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().catch(error => {
            console.error(error);
        });
    };

    const links = (
        <>
            <li><Link to="/" className='font-semibold text-white'>Home</Link></li>
            <li><Link to="/category" className='font-semibold text-white'>Category</Link></li>
            {
                user ? 
                    <li><Link to="/dashboard" className='font-semibold text-white'>Dashboard</Link></li> 
                    :
                    <></>
            }
            <li><Link to="/contact" className='font-semibold text-white'>Contact</Link></li>
            <li><Link to="/about" className='font-semibold text-white'>About</Link></li>
        </>
    );

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
                        <img className='w-12' src={mainLogo} alt="main logo" />
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
                                    <IoPersonCircle />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {user && <li><Link to="/account-details">Account Details</Link></li>}
                                <li><Link>Dark Mode</Link></li>
                                {user ? (
                                    <>
                                        <li><Link onClick={handleLogOut}>Log Out</Link></li>
                                    </>
                                ) : (
                                    <li><Link to="/login">Log In</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
