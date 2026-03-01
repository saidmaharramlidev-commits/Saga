import Logo from "../public/sliderLogo.jpg"
import Logo2 from "../public/heroLogo.jpg"
import Image from "next/image"


function Companies() {
    return (
        <div id="mainCompanies">
            <div id="container">
                <h1 id="headerOfCompanies">Our Partners</h1>
                <div className="logo-slider">
                    <div className="logo-track">
                        <Image className="sliderImg" src={Logo} alt="Logo" />
                        <Image className="sliderImg" src={Logo2} alt="Logo" />
                        <Image className="sliderImg" src={Logo} alt="Logo" />
                        <Image className="sliderImg" src={Logo2} alt="Logo" />
                        <Image className="sliderImg" src={Logo} alt="Logo" />
                        <Image className="sliderImg" src={Logo2} alt="Logo" />
                        <Image className="sliderImg" src={Logo} alt="Logo" />
                        <Image className="sliderImg" src={Logo2} alt="Logo" />
                        <Image className="sliderImg" src={Logo} alt="Logo" />
                        <Image className="sliderImg" src={Logo2} alt="Logo" />
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Companies