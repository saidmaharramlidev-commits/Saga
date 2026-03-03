"use client"


import Image from "next/image"
import logo from "../public/navbarLogo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setNavbarMode } from "@/redux/counterSlice";










function Footer() {


    const router = useRouter()
    const dispatch = useDispatch()





    return (
        <div id="mainFooter">

            <div id="containerFooter">
                <div id="topFooter">
                    <div id="footer-logo">
                        <Image src={logo} alt="Logo" style={{ width: "70%", height: "70%" }} />
                    </div>
                    <div className="endpointsFooter">
                        <h2>Quick Links</h2>
                        <a href="#" onClick={() => {
                            router.push("/")
                            dispatch(setNavbarMode("home"))

                        }}>Home</a>
                        <a href="#" onClick={() => {
                            router.push("/about")
                            dispatch(setNavbarMode("about"))

                        }}>About</a>
                        <a href="#" onClick={() => {
                            router.push("/blog")
                            dispatch(setNavbarMode("blog"))

                        }}>Blog</a>
                        <a href="#" onClick={() => {
                            router.push("/contact")
                            dispatch(setNavbarMode("contact"))

                        }}>Contact</a>

                    </div>

                    <div className="endpointsFooter">
                        <h2>Services</h2>
                        <a href="#" onClick={() => {
                            router.push('/services')
                            dispatch(setNavbarMode("services"))
                        }}>Service 1</a>
                        <a href="#" onClick={() => {
                            router.push('/services')
                            dispatch(setNavbarMode("services"))
                        }}>Service 2</a>
                        <a href="#" onClick={() => {
                            router.push('/services')
                            dispatch(setNavbarMode("services"))
                        }}>Service 3</a>
                        <a href="#" onClick={() => {
                            router.push('/services')
                            dispatch(setNavbarMode("services"))
                        }}>Service 4</a>

                    </div>

                    <div className="endpointsFooter">
                        <h2>Contact</h2>
                        <p><EmailIcon />example@gmail.com</p>
                        <p><PhoneIcon />+1234567890</p>
                        <p><LocationOnIcon />Somewhere in the world</p>
                        <div id="footer-social-medias">
                            <div className="social-media-icon" >
                                <InstagramIcon />
                            </div>
                            <div className="social-media-icon" >
                                <FacebookIcon />
                            </div>
                            <div className="social-media-icon" >
                                <LinkedInIcon />
                            </div>
                            <div className="social-media-icon" >
                                <WhatsAppIcon />
                            </div>

                        </div>

                    </div>



                </div>
                <div id="bottomFooter">
                    <p>saga.vercel.app | All rights reserved.</p>

                </div>

            </div>

        </div>
    )
}

export default Footer