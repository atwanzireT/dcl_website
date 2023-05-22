import aboutimg from "../img/about.jpg"
import Image from "next/image";
import Link from "next/link";

export default function About_Content() {
    return (
        <>
            {/* About Area Start */}
            <div id="about">
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
                                            and smart solutions to modern day development challenges. Our managed services
                                            will simplify the management of your ICT, making your business more productive
                                            and reliable. We deliver the best possible solutions and suggestions for Large,
                                            Medium and Small Businesses to achieve the best results with the help of best
                                            TECHNOLOGY and the best IT INFRASTRUCTURE. DIGITAL CHRONICLES LTD is the perfect
                                            partner for all organizations who want their ICT infrastructure to get the most
                                            from their resources.
                                        </p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-11/12 mx-auto">
                            <div>
                                <h3 className="text-md">Our Vision</h3>
                                <p>
                                    To create opportunities that promote sustained economic development, using
                                    digital technologies across all sectors and demographic segments.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-md">Our Mission</h3>
                                <p>
                                    Providing improved quality and affordable smart solutions for modern day
                                    development challenges to a wide range of sectors and communities.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-md">Our Values</h3>
                                <p>
                                    We strive to maintain the following values while rendering the best service:
                                </p>
                                <ul className="ms-8">
                                    <li className="list-square">Transparency</li>
                                    <li className="list-square">Integrity</li>
                                    <li className="list-square">Teamwork</li>
                                    <li className="list-square">Accountability</li>
                                    <li className="list-square">Efficiency</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-md">Our Team</h3>
                                <p>
                                We are a team dedicated to helping customers achieve their goals and grow their 
                                business. We stick to a definite set of quality control measures and under no 
                                circumstances we would compromise that quality. This tendency earned us a wide 
                                range of clientele that includes almost every type of business. Get in touch 
                                with us today and find out for yourself.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Area End */}
        </>
    )
}