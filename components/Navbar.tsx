"use client"



import Image from "next/image"
import Logo from "../public/navbarLogo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setBlogChoosed, setBlogNumber, setNavbar, setNavbarMode } from "@/redux/counterSlice";
import { useRouter } from "next/navigation";


function Navbar() {


    const { isNavbarOpen, navbarMode } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()
    const router = useRouter()







    return (
        <div id="mainNavbar">
            <div id="navbar">
                <div id="logo-wrapper" onClick={() => {
                    router.push("/")
                    dispatch(setNavbarMode("home"))
                }}>
                    <Image id="logo" src={Logo} alt="Logo" />
                </div>
                <div id="endpoints" className={isNavbarOpen ? "active" : ''}>
                    <div id="sidebar-logo-wrapper" onClick={() => {
                        router.push("/")
                        dispatch(setNavbarMode("home"))
                    }}>
                        <Image id="sidebar-logo" src={Logo} alt="Logo" />
                    </div>
                    <a href="#" className={navbarMode == "home" ? "activeEndpoint" : ''}
                        onClick={() => {
                            dispatch(setNavbarMode("home"))
                            router.push("/")
                        }}>Home</a>
                    <a href="#" className={navbarMode == "about" ? "activeEndpoint" : ''}
                        onClick={() => {
                            dispatch(setNavbarMode("about"))
                            router.push("/about")
                        }}>About</a>
                    <a href="#" className={navbarMode == "services" ? "activeEndpoint" : ''}
                        onClick={() => {
                            dispatch(setNavbarMode("services"))
                            router.push("/services")
                        }}>Services</a>
                    <a href="#" className={navbarMode == "blog" ? "activeEndpoint" : ''}
                        onClick={() => {
                            dispatch(setNavbarMode("blog"))
                            router.push("/blog")
                            dispatch(setBlogChoosed(false))
                            dispatch(setBlogNumber(0))
                        }}>Blog</a>
                    <a href="#" className={navbarMode == "contact" ? "activeEndpoint" : ''}
                        onClick={() => {
                            dispatch(setNavbarMode("contact"))
                            router.push("/contact")
                        }}>Contact</a>



                    <div id="mobileCtas">
                        <div id="firstCta" onClick={() => router.push("/seminar-register")}>Seminar Registration</div>
                        <div id="secondCta" onClick={() => router.push("/check-trademark")}>Check Trademark</div>
                    </div>
                </div>

                <div id="navbarCtas">
                    <div id="firstCta" onClick={() => router.push("/seminar-register")}
                    >Seminar Registration</div>
                    < div id="secondCta" onClick={() => router.push("/check-trademark")}>Check Trademark</div>
                </div>

                <button id="toggle-wrapper" onClick={() => dispatch(setNavbar())}>
                    <MenuIcon id="toggle" />

                </button>

            </div>

        </div >
    )
}

export default Navbar