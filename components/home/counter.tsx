export default function Counter() {
    return (
        <>
            {/* Counter Area Start */}
            <div className="counter__area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 lg-mb-30">
                            <div className="counter__area-item">
                                <ul className="d-inline-flex align-items-center t-left">
                                    <li>
                                        <i className="flaticon-project-plan" />
                                    </li>
                                    <li>
                                        <h2>
                                            <span className="counter">12</span>
                                        </h2>
                                        <p>Completed Project</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 md-mb-30">
                            <div className="counter__area-item">
                                <ul className="d-inline-flex align-items-center t-left">
                                    <li>
                                        <i className="flaticon-customer-satisfaction" />
                                    </li>
                                    <li>
                                        <h2>
                                            <span className="counter">2</span>+
                                        </h2>
                                        <p>Country Coverage</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-mb-30">
                            <div className="counter__area-item">
                                <ul className="d-inline-flex align-items-center t-left">
                                    <li>
                                        <i className="flaticon-badge" />
                                    </li>
                                    <li>
                                        <h2>
                                            <span className="counter">3</span>+
                                        </h2>
                                        <p>Team Members</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter__area-item">
                                <ul className="d-inline-flex align-items-center t-left">
                                    <li>
                                        <i className="flaticon-team" />
                                    </li>
                                    <li>
                                        <h2>
                                            <span className="counter">5</span>
                                        </h2>
                                        <p>Happy Client</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter Area End */}
        </>

    )
}