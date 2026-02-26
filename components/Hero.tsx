import HeroPic from "../public/heroPic.jpg"
import Image from "next/image"

function Hero() {
    return (
        <div id="mainHero">
            <Image id="heroImage" src={HeroPic} alt="Hero Picture" />


            <div id="heroText">
                <h1>Strong Legal Strategy. Reliable Representation.</h1>
                <p>We provide expert legal guidance across corporate, financial, and civil matters, delivering tailored solutions designed to protect your rights and advance your interests. With a commitment to integrity, precision, and strategic thinking, our team approaches every case with careful analysis and decisive action, ensuring our clients receive clear direction, strong advocacy, and results they can trust.</p>
            </div>
            <div id="heroCta">
                <h5>More Information</h5>
            </div>






        </div>
    )
}

export default Hero