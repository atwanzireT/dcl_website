import Image from "next/image";
import Link from "next/link";
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
                                        Digital Chronicles Ltd is a forward-thinking company that offers digital
                                        and smart solutions to modern day development challenges. Our managed
                                        services will simplify the management of your ICT, making your business
                                        more productive and reliable. We deliver the best possible solutions and
                                        suggestions for Large, Medium and Small Businesses to achieve the best
                                        results with the help of best TECHNOLOGY and the best IT INFRASTRUCTURE.
                                        DIGITAL CHRONICLES LTD is the perfect partner for all organizations who
                                        want their ICT infrastructure to get the most from their resources.
                                    </p>
                                </div>
                                <div className="about__area-right-list">
                                    <div className="about__area-right-list-item">
                                        <div className="about__area-right-list-item-icon">
                                            {/* <Image src="assets/img/icon/about-1.png" alt="" /> */}
                                        </div>
                                        <div className="about__area-right-list-item-text">
                                            <h4>Business improvement</h4>
                                        </div>
                                    </div>
                                    <div className="about__area-right-list-item center">
                                        <div className="about__area-right-list-item-icon">
                                            {/* <Image src="assets/img/icon/about-2.png" alt="" /> */}
                                        </div>
                                        <div className="about__area-right-list-item-text">
                                            <h4>Network Administration</h4>
                                        </div>
                                    </div>
                                    <div className="about__area-right-list-item">
                                        <div className="about__area-right-list-item-icon">
                                            {/* <Image src="assets/img/icon/about-3.png" alt="" /> */}
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
                                                <span className="text-blue-950">Phone :</span>
                                                <Link href="tel:+256 704936443">+256 704936443</Link>
                                                <span> / </span>
                                                <Link href="tel:+256 759412127">+256 759412127</Link>
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
