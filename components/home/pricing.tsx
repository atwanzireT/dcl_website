import Image from "next/image";

export default function Pricing() {
    return (
        <>
            {/* Pricing Area Start */}
            <div className="pricing__area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="pricing__area-title section-title">
                                <p className="section-top">Pricing Plan</p>
                                <h2>Our Pricing Plan</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                            <div className="pricing__area-item">
                                <div className="pricing__area-price mb-60">
                                    <ul className="d-inline-flex align-items-center t-left">
                                        <li className="pricing__area-item-icon">
                                            <Image src="assets/img/icon/price-1.png" alt="" />
                                        </li>
                                        <li>
                                            <h3>Basic</h3>
                                            <h5>
                                                $19.00 <span> / Month</span>
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__area-content">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check" />
                                            Secure finance backup
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            Security management
                                        </li>
                                        <li>
                                            <i className="fas fa-check mb-20" />
                                            Unlimited Features
                                        </li>
                                    </ul>
                                </div>{" "}
                                <a className="price-btn" href="pricing.html">
                                    Discover More
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                            <div className="pricing__area-item">
                                <div className="pricing__area-price mb-60">
                                    <ul className="d-inline-flex align-items-center t-left">
                                        <li className="pricing__area-item-icon">
                                            <Image src="assets/img/icon/price-2.png" alt="" />
                                        </li>
                                        <li>
                                            <h3>Standard</h3>
                                            <h5>
                                                $59.00 <span> / Month</span>
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__area-content">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check" />
                                            Secure finance backup
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            Security management
                                        </li>
                                        <li>
                                            <i className="fas fa-check mb-20" />
                                            Unlimited Features
                                        </li>
                                    </ul>
                                </div>{" "}
                                <a className="price-btn" href="pricing.html">
                                    Discover More
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing__area-item">
                                <div className="pricing__area-price mb-60">
                                    <ul className="d-inline-flex align-items-center t-left">
                                        <li className="pricing__area-item-icon">
                                            <Image src="assets/img/icon/price-3.png" alt="" />
                                        </li>
                                        <li>
                                            <h3>Premium</h3>
                                            <h5>
                                                $79.00 <span> / Month</span>
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__area-content">
                                    <ul>
                                        <li>
                                            <i className="fas fa-check" />
                                            Secure finance backup
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            Security management
                                        </li>
                                        <li>
                                            <i className="fas fa-check mb-20" />
                                            Unlimited Features
                                        </li>
                                    </ul>
                                </div>{" "}
                                <a className="price-btn" href="pricing.html">
                                    Discover More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Area End */}
        </>

    )
}