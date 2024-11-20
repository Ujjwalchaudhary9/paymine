import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaServicestack, FaInfoCircle, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import logo from '../assets/logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility on mobile

    let links = [
        { link: "Home", path: "/", icon: <FaHome /> },
        { link: "Software", path: "/software", icon: <FaPhoneAlt /> },
        { link: "API Solution", path: "/solution", icon: <FaPhoneAlt /> },
        { link: "Services", path: "/services", icon: <FaServicestack /> },
        { link: "About Us", path: "/about", icon: <FaInfoCircle /> },
        { link: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
    ];

    const handleLogin = () => {
        navigate('/login'); // Navigate to login page
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the mobile menu
    };

    return (
        <div className="relative flex justify-between items-center p-4 shadow-md shadow-blue-400 bg-white border-b-2  ">
            <div className="w-36 mt-1">
                <img src={logo} alt="Logo" className="w-full" />
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-2xl">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="  hidden lg:flex space-x-6">
                <ul className="flex space-x-6 py-4">
                    {links.map((link, index) => (
                        <li key={index} >
                            <Link to={link.path} className="flex items-center space-x-1 text-blue-950  font-semibold hover:scale-105 hover:text-blue-600">

                                <span>{link.link}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    className="border-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-90"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className={`lg:hidden absolute z-10 top-20  right-0 w-[25%] bg-white shadow-lg transition-all ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className="space-y-4 p-4">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                                onClick={() => setMenuOpen(false)} // Close menu on click
                            >
                                {link.icon}
                                <span>{link.link}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="px-3">
                    <button
                        className="w-full border-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
