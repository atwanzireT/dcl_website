import Image from "next/image";
import img from "../img/service3.jpg"


export default function WhyUs() {
    return (
        <>
            {/* Why Choose Ua  Area Start */}
            <div
                className="choose__ua section-padding"
                data-background="assets/img/choose.png"
            >
                <div
                    className="choose__ua-left"
                    data-background="assets/img/choose-us.jpg"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                        <div className="about__area-left-image">
                            <Image src={img} alt="" />
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="s-table">
                                <div className="s-tablec">
                                    <div className="choose__ua-right">
                                        <p className="section-top">Why Choose Us</p>
                                        <h2 className="mb-35">Our Information technology</h2>
                                        <div className="choose__ua-right-list">
                                            <div className="row">
                                                <div className="col-sm-6 mb-30">
                                                    <div className="choose__ua-right-list-icon  choose__ua-right-list-icon-hover">
                                                        <i className="flaticon-technical-support" />
                                                        <h4>
                                                        Expertise and 
                                                        <br />
                                                        Experience
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 sm-mb-30">
                                                    <div className="choose__ua-right-list-icon  choose__ua-right-list-icon-hover">
                                                        <i className="flaticon-customer-service" />
                                                        <h4>
                                                        Comprehensive 
                                                        <br />
                                                        Solutions
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 sm-mb-30">
                                                    <div className="choose__ua-right-list-icon  choose__ua-right-list-icon-hover">
                                                        <i className="flaticon-chip" />
                                                        <h4>
                                                        Customized 
                                                        <br />
                                                        Approach
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="choose__ua-right-list-icon choose__ua-right-list-icon-hover">
                                                        <i className="flaticon-networking" />
                                                        <h4>
                                                        Customer Service 
                                                        <br />
                                                        and Support
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose Ua Area End */}
        </>

    )
}