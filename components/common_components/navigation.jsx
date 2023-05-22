import Link from 'next/link';
import { useState } from 'react';
import { facebookIcon } from '../icons/facebook.png'
import { twitterIcon } from '../icons/twitter.png'
import { linkednIcon } from '../icons/linkedin.png'
import Image from 'next/image';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div>
                <div className='bg-gray-800 p-2'>
                    <div className="flex">
                        <div className="col">
                            <div className='text-white mx-2 row'>
                                <div className="col-auto ">
                                    <MapPinIcon className='w-7 h-7 text-white' />
                                </div>
                                <div className="col-auto -ms-7">
                                    RUHARO ROAD, LUGAZI
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className='sticky'>
                    <div className="navbar-container">
                        <div className="logo">
                            <Link className='text-lg' href="/">
                                DCL
                            </Link>
                        </div>
                        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                            <ul>
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
                            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
                            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
                        </div>
                    </div>
                </nav></div></>
    );
};

export default Navbar;

