import React, { useState, useEffect } from 'react';
import logo from '/assets/logo.png'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "services" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Blogs", path: "blog" },
        { link: "Newsletters", path: "newsletter" },
    ];

    return (
        <header className={`w-full ${isSticky ? 'bg-white border-b' : 'md:bg-transparent'} fixed top-0 left-0 right-0`}>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-white duration-300' : ''}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="Chemcon Logo" className='w-10 inline-block' />
                        <span className='text-[#263238]'>Chemcon</span>
                    </a>

                    <ul className='md:flex space-x-12 hidden list-none'>
                        {navItems.map((item, index) => (
                            <li key={index} className='list-none'>
                                <Link to={item.path} smooth={true} duration={500} className='text-gray-900 hover:text-[#4CAF50] first:font-medium cursor-pointer'>
                                    {item.link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'> Register Now </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {isMenuOpen ? <FaTimes className='h-6 w-6 text-neutralDGrey' /> : <FaBars className='h-6 w-6 text-neutralDGrey' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'}`}>
                    {navItems.map((item, index) => (
                        <li key={index} className='list-none'>
                            <Link to={item.path} smooth={true} duration={500} className='text-brandPrimary hover:text-black first:font-medium cursor-pointer'>
                                {item.link}
                            </Link>
                        </li>
                    ))}
                    <div className='flex justify-center'>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'> Register Now </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
