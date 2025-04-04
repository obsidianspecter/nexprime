import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const navItems = ["Home", "About", "Services", "Projects", "Meet Our Family", "Contact Us"];
    
    const getLink = (item) => {
        if (item === "Home") return "/";
        if (item === "Meet Our Family") return "/meet-our-family";
        if (item === "Contact Us") return "/#contactus";
        
        // Direct links to main page components
        if (item === "About") return "/#about";
        if (item === "Services") return "/#services";
        if (item === "Projects") return "/#projects";
        
        return `#${item.replace(" ", "").toLowerCase()}`;
    };

    const isRouterLink = (item) => {
        return item === "Home" || item === "Meet Our Family";
    };

    const handleNavClick = (item) => {
        setIsOpen(false);
        
        // If we're navigating to a section but not already on the home page
        if (!isRouterLink(item) && window.location.pathname !== "/") {
            // Navigate to home page with the hash in the URL
            navigate(getLink(item));
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed w-full z-[70] top-0 text-white backdrop-blur-md shadow-lg">
            {/* Top bar */}
            <div className="py-2 px-4 sm:px-6 flex justify-between items-center">
                <Link to="/" className="text-lg font-logo">NEXORIS</Link>
                <div className="sm:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="text-xl cursor-pointer"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
                {/* Desktop nav */}
                <nav className="hidden sm:flex gap-6">
                    {navItems.map((item, index) => (
                        isRouterLink(item) ? (
                            <Link
                                key={index}
                                to={getLink(item)}
                                className="hover:border-blue-400 border-transparent border-b-2 pb-1 transition-colors duration-300"
                                onClick={() => handleNavClick(item)}
                            >
                                {item}
                            </Link>
                        ) : (
                            <a
                                key={index}
                                href={getLink(item)}
                                className="hover:border-blue-400 border-transparent border-b-2 pb-1 transition-colors duration-300"
                                onClick={() => handleNavClick(item)}
                            >
                                {item}
                            </a>
                        )
                    ))}
                </nav>
            </div>

            {/* Mobile menu */}
            <div
                className={`absolute top-0 right-0 w-full h-screen sm:hidden flex flex-col items-center bg-[#00031D] transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                {/* Close Button Inside */}
                <button
                    onClick={toggleMenu}
                    className="self-end text-2xl mt-4 mr-4 bg-white hover:bg-red-600 hover:text-white text-black p-1 rounded-full transition-all duration-100 ease-in-out"
                    aria-label="Close menu"
                >
                    <FiX />
                </button>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 text-left pl-8 pr-8 mt-8 w-full">
                    {navItems.map((item, index) => (
                        isRouterLink(item) ? (
                            <Link
                                key={index}
                                to={getLink(item)}
                                onClick={() => handleNavClick(item)}
                                className="hover:scale-105 border-b-2 pb-3 pt-3 p-2 text-2xl hover:text-3xl border-gray-600 hover:border-white hover:bg-blue-500/20 font-raleway transition-all ease-in-out"
                            >
                                {item.toUpperCase()}
                            </Link>
                        ) : (
                            <a
                                key={index}
                                href={getLink(item)}
                                onClick={() => handleNavClick(item)}
                                className="hover:scale-105 border-b-2 pb-3 pt-3 p-2 text-2xl hover:text-3xl border-gray-600 hover:border-white hover:bg-blue-500/20 font-raleway transition-all ease-in-out"
                            >
                                {item.toUpperCase()}
                            </a>
                        )
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
