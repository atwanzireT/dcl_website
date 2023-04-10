import Image from "next/image";
import aboutimg from "../img/about.jpg"

export default function About() {
    return (
        <>
            {/* About Area Start */}
            <div className="about__area section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 lg-mb-30">
                            <div className="about__area-left">
                                <div className="about__area-left-content">
                                    <h6>
                                        <span className="counter">25</span>+
                                    </h6>
                                    <p>Years Experience</p>
                                </div>
                                <div className="about__area-left-image">
                                    <Image src={aboutimg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__area-right">
                                <div className="about__area-right-title">
                                    <p className="section-top">About Company</p>
                                    <h2>Making IT a part of your business</h2>
                                    <p>
                                        Aliquam suscipit purus hendrerit erat auctor fermentum. Morbi
                                        pharetra orci tortor, nec tempus quam posuere ac. Aenean dapibus
                                        eget velit ut tristique.
                                    </p>
                                </div>
                                <div className="about__area-right-list">
                                    <div className="about__area-right-list-item">
                                        <div className="about__area-right-list-item-icon">
                                            <img src="assets/img/icon/about-1.png" alt="" />
                                        </div>
                                        <div className="about__area-right-list-item-text">
                                            <h4>Business improvement</h4>
                                        </div>
                                    </div>
                                    <div className="about__area-right-list-item center">
                                        <div className="about__area-right-list-item-icon">
                                            <img src="assets/img/icon/about-2.png" alt="" />
                                        </div>
                                        <div className="about__area-right-list-item-text">
                                            <h4>Network Administration</h4>
                                        </div>
                                    </div>
                                    <div className="about__area-right-list-item">
                                        <div className="about__area-right-list-item-icon">
                                            <img src="assets/img/icon/about-3.png" alt="" />
                                        </div>
                                        <div className="about__area-right-list-item-text">
                                            <h4>User Experience</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__area-right-contact">
                                    <div className="about__area-right-contact-item">
                                        <a className="theme-btn" href="services.html">
                                            Discover More
                                        </a>
                                    </div>
                                    <div className="about__area-right-contact-item">
                                        <div className="about__area-right-contact-item-call">
                                            <div className="about__area-right-contact-item-call-icon">
                                                <i className="flaticon-phone-call" />
                                            </div>
                                            <div className="about__area-right-contact-item-call-content">
                                                <span>Phone :</span>
                                                <p>
                                                    <a href="tel:+123-568-4758">+123-568-4758</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Area End */}
        </>

    )
}