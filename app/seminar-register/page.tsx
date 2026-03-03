"use client"




import { Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import logo from "@/public/navbarLogo.png"
import { useState } from "react";
import { useRouter } from "next/navigation";



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





function SeminarRegister() {


    const [seminarName, setName] = useState<string>('')
    const [seminarSurname, setSurname] = useState<string>('')
    const [seminarEmail, setEmail] = useState<string>('')
    const [seminarPhoneNumber, setPhoneNumber] = useState<string>('')
    const [seminarRole, setRole] = useState<string>('')
    const [seminarCompany, setCompany] = useState<string>('')

    const router = useRouter()



















    return (
        <div id="mainSeminarRegister">
            <div id="seminarNavbar">
                <Image id="logo-seminar" alt="logo" src={logo} onClick={() => router.push("/")} />

            </div>

            <div id="textFieldsOfSeminar">
                <ThemeProvider theme={theme}>
                    <TextField onChange={(e) => setName(e.target.value)} value={seminarName} className="fieldInSeminar" label="Name" />
                    <TextField onChange={(e) => setSurname(e.target.value)} value={seminarSurname} className="fieldInSeminar" label="Surname" />
                    <TextField onChange={(e) => setCompany(e.target.value)} value={seminarCompany} className="fieldInSeminar" label="Company" />
                    <TextField onChange={(e) => setRole(e.target.value)} value={seminarRole} className="fieldInSeminar" label="Role" />
                    <TextField onChange={(e) => setPhoneNumber(e.target.value)} value={seminarPhoneNumber} className="fieldInSeminar" label="Phone Number" />
                    <TextField onChange={(e) => setEmail(e.target.value)} value={seminarEmail} className="fieldInSeminar" label="Email" />
                </ThemeProvider>

                <div id="whereDidYou-wrapper">
                    <h3>Where did you learn about seminar?</h3>
                    <input type="text" />

                </div>

                <div id="cta-wrapper-seminar">
                    <Button variant="contained" sx={{ color: "black", backgroundColor: "#D3F200" }}>Send</Button>
                </div>


            </div>

        </div>
    )
}

export default SeminarRegister