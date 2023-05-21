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
                                <h2>Smart solutions for smart Cities !</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                            <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <Image className="mx-auto mt-4" src={service_1} alt="" width={500} height={500} />
                                </div>
                                <h3>
                                    <a className="text-lg" href="services-details.html">URBAN DEVELOPMENT <br /> ADVISORY SERVICES</a>
                                </h3>
                                <p>
                                    <li className="list-square ms-5">Property identification services.</li>
                                    <li className="list-square ms-5">Street CCTV systems implementation.</li>
                                    <li className="list-square ms-5">Settlement management solutions.</li>
                                    <li className="list-square ms-5">Traffic management strategies.</li>
                                    <li className="list-square ms-5">Street orderliness initiatives.</li>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                            <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <Image className="mx-auto mt-4" src={service_2} alt="" width={500} height={500} />
                                </div>
                                <h3>
                                    <a className="text-lg" href="services-details.html">EDUCATION INFRASTRACTURE <br /> DEVELOPMENT & DIGITAL LEARNING</a>
                                </h3>
                                <p>
                                    <li className="list-square ms-5">Installation of whiteboards, smart/intelligent boards, projectors, and automated bells.</li>
                                    <li className="list-square ms-5">Provision of electronic tablets and computers.</li>
                                    <li className="list-square ms-5">Training for teachers and learners in electronic teaching and learning.</li>
                                    <li className="list-square ms-5">ICT training for marginalized rural communities and women groups.</li>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__area-item">
                                <div className="services__area-item-icon">
                                    <Image className="mx-auto mt-4" src={service_3} alt="" width={500} height={500} />
                                </div>
                                <h3>
                                    <a className="text-lg" href="services-details.html"> Managed IT Services and Outsourcing</a>
                                </h3>
                                <p>
                                    <li className="list-square ms-5">Proactive maintenance of IT environments, including servers, routers, switches, personal computers, software, and storage.</li>
                                    <li className="list-square ms-5">Capacity planning and software updates.</li>
                                    <li className="list-square ms-5">Addressing email and network problems, network connectivity issues, data backups, PC failures, server hardware, website issues, and virus cleaning and protection.</li>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Area End */}
        </>

    )
}