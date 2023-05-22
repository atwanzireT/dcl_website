import Link from "next/link";

export default function About_Banner() {
    return (
            <>
                {/* Page Banner Area Start */}
                <div className="page__banner" data-background="assets/img/page-banner.png">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page__banner-content">
                                    <h1>About Us</h1>
                                    <div className="page__banner-menu">
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <i className="flaticon-home-icon-silhouette" /> Home -{" "}
                                                </Link>
                                            </li>
                                            <li> About</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Banner Area End */}
            </>
    )
}