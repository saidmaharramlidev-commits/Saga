"use client"



import Image from "next/image"
import Logo from "../public/navbarLogo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setNavbar } from "@/redux/counterSlice";

function Navbar() {


    const { isNavbarOpen } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()










    return (
        <div id="mainNavbar">
            <div id="navbar">
                <div id="logo-wrapper">
                    <Image id="logo" src={Logo} alt="Logo" />
                </div>
                <div id="endpoints" className={isNavbarOpen ? "active" : ''}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>

                <div id="navbarCtas">
                    <div id="firstCta"
                    >Seminar Registration</div>
                    < div id="secondCta">Check Trademark</div>
                </div>

                <div id="toggle-wrapper" onClick={() => dispatch(setNavbar())}>
                    <MenuIcon id="toggle" />

                </div>

            </div>

        </div >
    )
}

export default Navbar