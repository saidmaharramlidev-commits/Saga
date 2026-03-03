"use client"


import HeroOfEndpoints from "@/components/HeroOfEndpoints"
import Navbar from "@/components/Navbar"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Footer from "@/components/Footer";

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#d3f200",
                    },
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "white",
                    "&.Mui-focused": {
                        color: "#d3f200",
                    },
                },
            },
        },

        // 👇 THIS PART MAKES INPUT TEXT WHITE
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: "white",
                },
            },
        },
    },
});


function Contact() {


    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [message, setMessage] = useState<string>('')







    return (
        <div>
            <Navbar />
            <HeroOfEndpoints header="Contact" url="Home > Contact" />

            <div id="contact-wrapper">
                <div id="leftContact">
                    <h1>We’re here — contact us for cooperation or information.</h1>
                    <p style={{ marginTop: "50px" }}><EmailIcon />example@gmail.com</p>
                    <p><PhoneIcon />+1234567890</p>
                    <p><LocationOnIcon />Somewhere in the world</p>
                    <div id="footer-social-medias" style={{ marginTop: "50px" }}>
                        <div className="social-media-icon">
                            <InstagramIcon />
                        </div>
                        <div className="social-media-icon">
                            <FacebookIcon />
                        </div>
                        <div className="social-media-icon">
                            <LinkedInIcon />
                        </div>
                        <div className="social-media-icon">
                            <WhatsAppIcon />
                        </div>

                    </div>

                </div>
                <div id="rightContact">
                    <div id="mainContact">
                        <h2>If you have message</h2>
                        <ThemeProvider theme={theme}>
                            <TextField value={name} onChange={(e) => setName(e.target.value)} label="Name" />
                            <TextField value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} label="Phone Number" />
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
                            <TextField value={message} onChange={(e) => setMessage(e.target.value)} label="Message" multiline rows={4} />
                        </ThemeProvider>

                        <Button variant="contained" sx={{ color: "black", backgroundColor: "white", }}>Send Form</Button>
                    </div>


                </div>

            </div>

            <div id="location-wrapper">

                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps?q=40.4093,49.8671&z=13&output=embed"
                ></iframe>

            </div>

            <Footer />

        </div>
    )
}

export default Contact