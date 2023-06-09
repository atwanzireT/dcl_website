import Image from "next/image";

export default function Footer() {
    return (
        <>
            {/* Footer Area Start */}
            <div
                className="footer__area pt-100 pb-100"
                data-background="assets/img/footer.png"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 md-mb-30">
                            <div className="footer__area-footer-widget">
                                <div className="footer__area-logo">
                                    <a href="index.html">
                                        {/* <Image src="assets/img/footer-logo.png" alt=""  /> */}
                                    </a>
                                </div>
                                <div className="footer__area-content">
                                    <p>
                                        To create opportunities that promote sustained economic development, 
                                        using digital technologies across all sectors and demographic segments.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 fo-b col-md-4">
                            <div className="footer__area-footer-widget">
                                <div className="footer__area-title">
                                    <h3>Company</h3>
                                </div>
                                <div className="footer__area-footer-menu">
                                    <ul>
                                        <li>
                                            <a href="#html">- Data Management</a>
                                        </li>
                                        <li>
                                            <a href="#html">- System Design</a>
                                        </li>
                                        <li>
                                            <a href="#html">- System Maintainence</a>
                                        </li>
                                        <li>
                                            <a href="#html">- Paperless Classes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
                            <div className="footer__area-footer-widget">
                                <div className="footer__area-title">
                                    <h3>Information</h3>
                                </div>
                                <div className="footer__area-contact-info">
                                    <div className="footer__area-contact-info-item d-inline-flex mb-20">
                                        <div className="footer__area-contact-info-item-icon">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <div className="footer__area-contact-info-item-text">
                                            <a href="tel:+256704936443">+256 704936443</a>
                                        </div>
                                    </div>
                                    <div className="footer__area-contact-info-item d-inline-flex mb-20">
                                        <div className="footer__area-contact-info-item-icon">
                                            <i className="fas fa-envelope" />
                                        </div>
                                        <div className="footer__area-contact-info-item-text">
                                            <a href="#">digitallighttech@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="footer__area-contact-info-item d-inline-flex">
                                        <div className="footer__area-contact-info-item-icon">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <div className="footer__area-contact-info-item-text">
                                            <a href="#">RUHARA ROAD, LUGAZI MBARARA</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer__area-footer-widget">
                                <div className="footer__area-title">
                                    <h3>Get In Touch</h3>
                                </div>
                                <form action="#">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <button type="submit" className="theme-banner-btn">
                                        submit Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Area End */}
            {/* Copyright Area Start */}
            <div className="footer__area-bottom">
                <div className="container">
                    <div className="row align-items-center pt-40 pb-40">
                        <div className="col-xl-6 col-lg-6 col-md-7 md-mb-20">
                            <div className="footer__area-bottom-left">
                                <p>
                                    Copyright © 2022 - <a href="index.html">DCL</a> All Right
                                    Reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-5">
                            <div className="footer__area-bottom-right t-right">
                                <ul className="d-inline-flex">
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
                                            <i className="fab fa-linkedin-in mr-0" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright Area End */}
            {/* scroll_up_btn */}
            <div className="scroll-top">
                {" "}
                <i className="flaticon-up-arrow" />
            </div>
        </>

    )
}