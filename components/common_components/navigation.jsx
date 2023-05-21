import Link from 'next/link';
import { useState } from 'react';
import { facebookIcon } from '../icons/facebook.png'
import { twitterIcon } from '../icons/twitter.png'
import { linkednIcon } from '../icons/linkedin.png'
import Image from 'next/image';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div>
                <div className="header__area-topbar-area">
                    <div className="header__area-topbar custom-container">
                        <div className="header__area-topbar-left">
                            <div className="header__area-topbar-left-info md-mb-10">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <i className="flaticon-placeholder" />
                                            RUHARA ROAD, LUGAZI MBARARA
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:digitallighttech@gmail.com">
                                            <i className="flaticon-email" />
                                            digitallighttech@gmail.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__area-topbar-right">
                            <div className="header__area-topbar-right-social">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <Image src={facebookIcon} width={100} height={100} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <Image src={twitterIcon} width={100} height={100} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <Image src={linkednIcon} width={100} height={100} />
                                        </Link>
                                    </li>
                                </ul>
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
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
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

