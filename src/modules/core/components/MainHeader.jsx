import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsBell, BsGear, BsPerson, BsSearch, BsList, BsKanban, BsCalendar } from 'react-icons/bs';

function MainHeader({ onViewChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            role="banner"
            className="App-header bg-gradient-to-r from-teal-700 to-green-200 shadow-sm border-b border-gray-200 flex flex-row md:flex-row flex-col h-10 w-full max-w-none mx-0 justify-between items-center px-4"
        >
            {/* Logo */}
            <div className="w-full md:w-auto font-semibold text-lg text-gray-600" data-testid="app-navigation-home-logo">
                DocEase
            </div>

            {/* Search Field (hide in mobile) */}
            <div className="search-field hidden md:block w-full md:w-1/3 mx-2">
                <div className="relative">
                    <input
                        type="text"
                        className="bg-opacity-80 hover:bg-white focus:bg-white backdrop-blur-md border border-gray-200 rounded-lg w-full px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search"
                    />
                    <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                </div>
            </div>

            {/* Hamburger menu icon (mobile only) */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    className="text-white hover:text-blue-300 focus:outline-none"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Menú de navegación */}
            <nav
                role="actions"
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
            >
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
                    <li className="hover:bg-gray-800  rounded-full p-2 transition-colors duration-200">
                        <a href="#">
                            <BsBell size={20} className="text-gray-600 " />
                        </a>
                    </li>
                    <li className="hover:bg-gray-800 rounded-full p-2 transition-colors duration-200">
                        <a href="">
                            <BsGear size={20} className="text-gray-600 " />
                        </a>
                    </li>
                    <li className="hover:bg-gray-800 rounded-full p-2 transition-colors duration-200">
                        <a href="">
                            <BsPerson size={20} className=" text-gray-600 " />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;