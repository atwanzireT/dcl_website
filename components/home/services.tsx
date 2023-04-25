import Image from "next/image"
import service_1 from "../img/icon/services-1.png"
import service_2 from "../img/icon/services-2.png"
import service_3 from "../img/icon/services-3.png"
export default function Services() {
    return (
        <>
            {/* Services Area Start */}
            <div
                className="services__area section-padding"
                data-background="assets/img/shape.png"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="services__area-title section-title">
                                <p className="section-top">Best Services</p>
                                <h2>Continuously we offer the best Services for progress!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                            <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <Image src={service_1} alt="" width={500} height={500} />
                                </div>
                                <h3>
                                    <a href="services-details.html">Cyber Security</a>
                                </h3>
                                <p>Phasellus aliquam fermentum tincidunt. Duis accumsan,</p>{" "}
                                <a href="services-details.html">Read More</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                            <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <Image src={service_2} alt="" width={500} height={500}/>
                                </div>
                                <h3>
                                    <a href="services-details.html">Cloud Solutions</a>
                                </h3>
                                <p>Phasellus aliquam fermentum tincidunt. Duis accumsan,</p>{" "}
                                <a href="services-details.html">Read More</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <Image src={service_3} alt="" width={500} height={500}/>
                                </div>
                                <h3>
                                    <a href="services-details.html">Data Recovery</a>
                                </h3>
                                <p>Phasellus aliquam fermentum tincidunt. Duis accumsan,</p>{" "}
                                <a href="services-details.html">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Area End */}
        </>

    )
}