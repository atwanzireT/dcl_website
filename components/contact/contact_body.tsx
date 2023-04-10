export default function Contact_Body() {
    return (
        <>
            {/* Page Banner Area Start */}
            <div className="page__banner" data-background="assets/img/page-banner.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__banner-content">
                                <h1>Contact Us</h1>
                                <div className="page__banner-menu">
                                    <ul>
                                        <li>
                                            <a href="index.html">
                                                <i className="flaticon-home-icon-silhouette" /> Home -{" "}
                                            </a>
                                        </li>
                                        <li> Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Banner Area End */}
            {/* Contact Details Start */}
            <div className="contact__list section-padding">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 lg-mb-30 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="contact__list-item">
                                <div className="contact__list-item-icon">
                                    <img src="assets/img/icon/locations.png" alt="" />
                                </div>
                                <p>Sandell St, London SE1 8NH, United Kingdom</p>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 md-mb-30 wow fadeInUp"
                            data-wow-delay=".8s"
                        >
                            <div className="contact__list-item">
                                <div className="contact__list-item-icon">
                                    <img src="assets/img/icon/phone-call.png" alt="" />
                                </div>
                                <a href="tel:+123-568-4758">
                                    <p>+123-568-4758</p>
                                </a>
                                <a href="tel:+123-508-4008">
                                    <p>+123-508-4008</p>
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="1.2s"
                        >
                            <div className="contact__list-item">
                                <div className="contact__list-item-icon">
                                    <img src="assets/img/icon/email.png" alt="" />
                                </div>
                                <a href="#">
                                    <p>beorx@gmail.com</p>
                                </a>
                                <a href="#">
                                    <p>info.beorx@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Details End */}
            {/* Contact Form Start */}
            <div className="contact__form">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact__form t-center">
                                <div className="contact__form-form">
                                    <div className="contact__form-form-title">
                                        {" "}
                                        <span className="section-top">Get in Touch</span>
                                        <h2>Always ready for your solutions</h2>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 mb-30">
                                                <div className="contact__form-form-group icon">
                                                    {" "}
                                                    <i className="far fa-user" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 md-mb-30">
                                                <div className="contact__form-form-group icon">
                                                    {" "}
                                                    <i className="far fa-envelope-open" />
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        placeholder="Your Email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 lg-mb-30">
                                                <div className="contact__form-form-group icon">
                                                    {" "}
                                                    <i className="far fa-address-book" />
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Subject"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-30">
                                                <div className="contact__form-form-group icon">
                                                    {" "}
                                                    <i className="far fa-comments" />
                                                    <textarea
                                                        name="message"
                                                        rows={8}
                                                        placeholder="Message"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="contact__form-form-group">
                                                    <button className="theme-btn" type="submit" name="button">
                                                        Submit Now <i className="flaticon-send" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form End */}
            {/* Map Area Start */}
            <div className="contact__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2602733086333!2d-0.12800118409026112!3d51.508440818447816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50056253c5cc0d3d!2s9C3XGV5F%2B9M!5e0!3m2!1sen!2sbd!4v1639466450977!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    // allowFullScreen=""
                    loading="lazy"
                    width={600}
                    height={450}
                />
            </div>
            {/* Map Area End */}
            {/* scroll_up_btn */}
            <div className="scroll-top">
                {" "}
                <i className="flaticon-up-arrow" />
            </div>
            {/* scroll_up_btn end */}
            {/* Main JS */}
            {/* Bootstrap JS */}
            {/* Counterup */}
            {/* Popper JS */}
            {/* Progressbar JS */}
            {/* Magnific JS */}
            {/* Swiper JS */}
            {/* Waypoints */}
            {/* Mean menu */}
            {/* Nice Select */}
            {/* WOW JS */}
            {/* Custom JS */}
        </>
    )
}