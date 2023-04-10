import Image from "next/image"
import img1 from "../img/monitoring-1.jpg"
import img2 from "../img/monitoring-2.jpg"
import img3 from "../img/monitoring-3.jpg"
import img4 from "../img/monitoring-4.jpg"

// const img4 =  require("../img/monitoring-4.jpg");

export default function Monitor() {
    return (
        <>
            {/* Monitoring Area Start */}
            <div className="project__area">
                <div className="container-fluid pl-0 pr-0">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                            <div className="project__area-item">
                                <Image src={img1} alt="" />
                                <div className="project__area-overly">
                                    <h3>
                                        <a href="project-details.html">Cyber security</a>
                                    </h3>
                                    <p>IT Technology</p>
                                    <div className="project__area-icon">
                                        <a href="project-details.html">
                                            {" "}
                                            <i className="flaticon-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                            <div className="project__area-item project__area-item-hover">
                                <Image src={img2} alt="" />
                                <div className="project__area-overly">
                                    <h3>
                                        <a href="project-details.html">Data Recovery</a>
                                    </h3>
                                    <p>Technology</p>
                                    <div className="project__area-icon">
                                        <a href="project-details.html">
                                            {" "}
                                            <i className="flaticon-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                            <div className="project__area-item">
                                <Image src={img4} alt="" />
                                <div className="project__area-overly">
                                    <h3>
                                        <a href="project-details.html">IT Management</a>
                                    </h3>
                                    <p>Technology</p>
                                    <div className="project__area-icon">
                                        <a href="project-details.html">
                                            {" "}
                                            <i className="flaticon-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="project__area-item">
                                <Image src={img3} alt="" />
                                <div className="project__area-overly">
                                    <h3>
                                        <a href="project-details.html">Cloud Services</a>
                                    </h3>
                                    <p>IT Support</p>
                                    <div className="project__area-icon">
                                        <a href="project-details.html">
                                            {" "}
                                            <i className="flaticon-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Monitoring Area End */}
        </>

    )
}