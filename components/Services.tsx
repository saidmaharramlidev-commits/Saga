import Pic1 from "../public/reviewPic.avif"
import Pic2 from "../public/reviewPic2.jpg"
import Pic3 from "../public/reviewPic3.avif"
import Pic4 from "../public/reviewPic.jpg"
import Image from "next/image"
import CallMadeIcon from '@mui/icons-material/CallMade';










function Services() {
    return (
        <div id="homeServices">

            <div id="services">
                <h1 id="headerOfServices">Services</h1>
                <div id="service-wrapper">
                    <div className="service">
                        <h1>01</h1>
                        <h4>Example</h4>
                        <div className="ctaService">
                            <h5>More</h5>
                        </div>
                    </div>
                    <div className="service">
                        <h1>02</h1>
                        <h4>Example</h4>
                        <div className="ctaService">
                            <h5>More</h5>
                        </div>
                    </div>
                    <div className="service">
                        <h1>03</h1>
                        <h4>Example</h4>
                        <div className="ctaService">
                            <h5>More</h5>
                        </div>
                    </div>
                    <div className="service">
                        <h1>04</h1>
                        <h4>Example</h4>
                        <div className="ctaService">
                            <h5>More</h5>
                        </div>
                    </div>

                </div>


                <div id="whychoose">
                    <h1>Why should you choose Saga?</h1>
                    <div id="whychoose-divs">
                        <div className="whychoose-div">
                            <div className="picOfReview">
                                <Image className="pic" src={Pic1} alt="" />

                            </div>
                            <h2>Reason 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit possimus commodi? Voluptatibus modi consequatur nulla voluptatem error suscipit non.</p>
                            <div className="arrow-wrapper">
                                <CallMadeIcon className="arrow" />

                            </div>
                        </div>
                        <div className="whychoose-div">
                            <div className="picOfReview">
                                <Image className="pic" src={Pic2} alt="" />
                            </div>
                            <h2>Reason 2</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit possimus commodi? Voluptatibus modi consequatur nulla voluptatem error suscipit non.</p>
                            <div className="arrow-wrapper">
                                <CallMadeIcon className="arrow" />

                            </div>

                        </div>
                        <div className="whychoose-div">
                            <div className="picOfReview">
                                <Image className="pic" src={Pic3} alt="" />
                            </div>
                            <h2>Reason 3</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit possimus commodi? Voluptatibus modi consequatur nulla voluptatem error suscipit non.</p>
                            <div className="arrow-wrapper">
                                <CallMadeIcon className="arrow" />

                            </div>

                        </div>
                        <div className="whychoose-div">
                            <div className="picOfReview">
                                <Image className="pic" src={Pic4} alt="" />
                            </div>
                            <h2>Reason 4</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit possimus commodi? Voluptatibus modi consequatur nulla voluptatem error suscipit non.</p>
                            <div className="arrow-wrapper">
                                <CallMadeIcon className="arrow" />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services