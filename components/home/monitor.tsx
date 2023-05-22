import Image from "next/image"
import img1 from "../img/service.jpg"
import img2 from "../img/service6.jpg"
import img3 from "../img/service5.jpg"
import img4 from "../img/service4.png"
import Link from "next/link"

// const img4 =  require("../img/monitoring-4.jpg");

export default function Monitor() {
    return (
        <>
            {/* Monitoring Area Start */}
            <div className="project__area -mt-24">
                <div className="container-fluid pl-0 pr-0">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                            <div className="project__area-item project__area-item-hover">
                                <Image src={img1} alt="" width={500} height={500} />
                                <div className="project__area-overly">
                                    <h3>
                                        <Link href="project-details.html">Data Management</Link>
                                    </h3>
                                    <p>IT Technology</p>
                                    <div className="project__area-icon">
                                        <Link href="project-details.html">
                                            {" "}
                                            <i className="flaticon-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                            <div className="project__area-item project__area-item-hover">
                                <Image src={img2} alt="" width={500} height={500}/>
                                <div className="project__area-overly">
                                    <h3>
                                        <Link href="project-details.html">System Design</Link>
                                    </h3>
                                    <p>Technology</p>
                                    <div className="project__area-icon">
                                        <Link href="project-details.html">
                                            {" "}
                                            <i className="flaticon-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                            <div className="project__area-item project__area-item-hover">
                                <Image src={img3} alt="" width={500} height={500}/>
                                <div className="project__area-overly">
                                    <h3>
                                        <Link href="project-details.html">System Maintenence</Link>
                                    </h3>
                                    <p>Technology</p>
                                    <div className="project__area-icon">
                                        <Link href="project-details.html">
                                            {" "}
                                            <i className="flaticon-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="project__area-item project__area-item-hover">
                                <Image src={img4} alt="" width={500} height={500}/>
                                <div className="project__area-overly project__area-item-hover">
                                    <h3>
                                        <Link href="project-details.html">PaperLess Classes</Link>
                                    </h3>
                                    <p>IT Support</p>
                                    <div className="project__area-icon">
                                        <Link href="project-details.html">
                                            {" "}
                                            <i className="flaticon-arrow-right" />
                                        </Link>
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