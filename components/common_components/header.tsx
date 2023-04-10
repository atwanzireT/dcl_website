function Header() {
    return (
        <>
            {/* Header Area Start */}
            <div className="header__area">
                <div className="header__area-topbar-area">
                    <div className="header__area-topbar custom-container">
                        <div className="header__area-topbar-left">
                            <div className="header__area-topbar-left-info md-mb-10">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="flaticon-placeholder" />
                                            9FW6+599 , United Kingdom
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="flaticon-email" />
                                            info.sarfox@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__area-topbar-right">
                            {/* <div className="header__area-topbar-right-language">
                                <select name="select">
                                    <option value={1}>English</option>
                                    <option value={2}>Hindi</option>
                                    <option value={3}>Tamil</option>
                                </select>
                            </div> */}
                            <div className="header__area-topbar-right-social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TopBar Area Start */}
                {/* Menu Bar Area Start */}
                <div className="header__area-menubar-area">
                    <div className="header__area-menubar custom-container">
                        <div className="header__area-menubar-logo">
                            <a href="index.html">
                                <h4>DCL</h4>
                                {/* <img src="assets/img/logo.png" alt=""> */}
                            </a>
                            <div className="responsive-menu" />
                        </div>
                        <div className="header__area-menubar-main-menu">
                            <ul id="mobilemenu">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Projects</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header__area-menubar-right">
                            <div className="header__area-menubar-right-search">
                                <div className="search">
                                    <span className="header__area-menubar-right-search-icon open">
                                        <i className="flaticon-search" />
                                    </span>
                                </div>
                                <div className="header__area-menubar-right-search-box">
                                    <form>
                                        <input type="search" placeholder="Search Here....." />
                                        <button type="submit">
                                            <i className="flaticon-search" />
                                        </button>
                                    </form>{" "}
                                    <span className="header__area-menubar-right-search-box-icon">
                                        <i className="flaticon-close" />
                                    </span>
                                </div>
                            </div>
                            <div className="header__area-menubar-right-hamburger">
                                <div className="hamburger-icon">
                                    <i className="fas fa-bars" />
                                </div>
                            </div>
                            <div className="header__area-menubar-right-btn">
                                <a className="theme-btn" href="contact.html">
                                    get a quote
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Hamburger Menu Start */}
                    <div className="hamburger-popup">
                        <div className="hamburger-close-btn">
                            <img src="assets/img/close.png" alt="" />
                        </div>
                        <div className="menu-box">
                            <div className="hamburger-popup-logo">
                                <a href="index.html">
                                    <img src="assets/img/logo.png" alt="" />
                                </a>
                            </div>
                            <p className="pb-30">
                                Proin cursus ex a vestibulum mattis. Vivamus in mauris dignissim,
                                imperdiet risus ac, congue nunc. Nullam feugiat id dolor id iaculis.
                                Maecenas diam justo, consectetur vitae enim non, maximus venenatis
                                nisl. Pellentesque habitant morbi tristique senectus et
                            </p>
                            <img src="assets/img/bar.jpg" alt="" />
                            <div className="contact__info">
                                <h3 className="mb-25">Contact Info</h3>
                                <div className="contact__info-list">
                                    <a href="tel:+1(002)568-958">
                                        <i className="flaticon-phone-call" />
                                        +1 (002) 568-958
                                    </a>
                                    <a href="#">
                                        <i className="flaticon-email" />
                                        info.sarfox@gmail.com
                                    </a>
                                    <a href="#">
                                        <i className="flaticon-placeholder" />
                                        9FW6+599 , United Kingdom
                                    </a>
                                </div>
                            </div>
                            <div className="follow__us">
                                <h3 className="mb-25">Follow Us</h3>
                                <div className="follow__us-social">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-overlay" />
                    {/* Hamburger Menu Start */}
                </div>
                {/* Menu Bar Area Start */}
            </div>
            {/* Header Area End */}
        </>

    )
}

export default Header;