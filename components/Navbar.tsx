"use client"



import Image from "next/image"
import Logo from "../public/navbarLogo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setNavbar, setNavbarMode } from "@/redux/counterSlice";

function Navbar() {


    const { isNavbarOpen, navbarMode } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()










    return (
        <div id="mainNavbar">
            <div id="navbar">
                <div id="logo-wrapper">
                    <Image id="logo" src={Logo} alt="Logo" />
                </div>
                <div id="endpoints" className={isNavbarOpen ? "active" : ''}>
                    <a href="" className={navbarMode == "home" ? "activeEndpoint" : ''}
                        onClick={() => dispatch(setNavbarMode("home"))}>Home</a>
                    <a href="" className={navbarMode == "about" ? "activeEndpoint" : ''}
                        onClick={() => dispatch(setNavbarMode("about"))}>About</a>
                    <a href="" className={navbarMode == "services" ? "activeEndpoint" : ''}
                        onClick={() => dispatch(setNavbarMode("services"))}>Services</a>
                    <a href="" className={navbarMode == "blog" ? "activeEndpoint" : ''}
                        onClick={() => dispatch(setNavbarMode("blog"))}>Blog</a>
                    <a href="" className={navbarMode == "contact" ? "activeEndpoint" : ''}
                        onClick={() => dispatch(setNavbarMode("contact"))}>Contact</a>
                </div>

                <div id="navbarCtas">
                    <div id="firstCta"
                    >Seminar Registration</div>
                    < div id="secondCta">Check Trademark</div>
                </div>

                <button id="toggle-wrapper" onClick={() => dispatch(setNavbar())}>
                    <MenuIcon id="toggle" />

                </button>

            </div>

        </div >
    )
}

export default Navbar