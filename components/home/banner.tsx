import Link from "next/link";

export default function Banner() {
    return (
        <>
            {/* Banner Area Start */}
            <div className="banner__area" data-background="assets/img/banner.jpg">
                <div className="container">
                    <div className="row -mt-32">
                        <div className="col-xl-12">
                            <div className="banner__area-title">
                                <span>We Provide the best services</span>
                                <h2>We proactively create and maintain the IT environment</h2>
                                <Link className="theme-btn" href="contact.html">
                                    Free Consulting
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Area End */}
        </>

    )
}