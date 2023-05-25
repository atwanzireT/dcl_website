import Image from "next/image"
import img1 from "../img/service.jpg"
import img2 from "../img/service6.jpg"
import img3 from "../img/service5.jpg"
import img4 from "../img/service4.png"
import Link from "next/link"

// const img4 =  require("../img/monitoring-4.jpg");

export default function Projects() {
    return (
        <>
            <>
                {/* Blog Area Start */}
                <div className="blog__area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="blog__area-title section-title">
                                    <p className="section-top">Our Activities &amp; Projects</p>
                                    <h2>Our Activities &amp; Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 xl-mb-30">
                                <div className="blog__area-item">
                                    <div className="blog__area-image">
                                        <img src="assets/img/blog-2.jpg" alt="" />
                                    </div>
                                    <div className="blog__area-content">
                                        <h3>
                                            <a href="news-single.html">
                                                SCHOOLS DIGITAL LEARNING
                                            </a>
                                        </h3>
                                        <p>Learners of Regilets Kashenshero undergoing training for digital learning. Digital
                                            Chronicle’s maiden smart learning project in a rural setting.
                                            Digital learning is the solution to uplifting the level of rural schools to match global
                                            education standards.</p>{" "}
                                        <a href="news-single.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 lg-mb-30">
                                <div className="blog__area-item">
                                    <div className="blog__area-image">
                                        <img src="assets/img/blog-3.jpg" alt="" />
                                    </div>
                                    <div className="blog__area-content">
                                        <h3>
                                            <a href="news-single.html">
                                                TEACHER ICT SKILLS TRAINING
                                            </a>
                                        </h3>
                                        <p>‘When Teachers become ICT Students, schools become smarter’. An
                                            education philosophy by DCL demonstrated at Kabateraine staff training.</p>{" "}
                                        <a href="news-single.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="blog__area-item">
                                    <div className="blog__area-image">
                                        <img src="assets/img/blog-1.jpg" alt="" />
                                    </div>
                                    <div className="blog__area-content">
                                       
                                        <h3>
                                            <a href="news-single.html">
                                                YOUTH START-UP ICT INTEGRATION
                                            </a>
                                        </h3>
                                        <p>DCL Staff celebrating a successful ICT-Integrated Youth Start-Up bootcamp.
                                            An initiative of Hive Colab.</p>{" "}
                                        <a href="news-single.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog Area End */}
            </>

        </>

    )
}