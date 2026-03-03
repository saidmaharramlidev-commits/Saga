"use client"





import Image from "next/image"
import logo from "@/public/navbarLogo.png"
import { Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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



function CheckTrademark() {




    const [seminarEmail, setEmail] = useState<string>('')
    const [seminarPhoneNumber, setPhoneNumber] = useState<string>('')
    const [seminarCompany, setCompany] = useState<string>('')
    const [buyer, setBuyer] = useState("")
    const [field, setField] = useState("")
    const [contactPerson, setContactPerson] = useState("")


    const router = useRouter()




















    return (
        <div id="main-check-trademark">

            <div id="seminarNavbar">
                <Image id="logo-seminar" alt="logo" src={logo} onClick={() => router.push("/")} />

            </div>

            <div id="textFieldsOfSeminar">
                <ThemeProvider theme={theme}>
                    <TextField onChange={(e) => setCompany(e.target.value)} value={seminarCompany} className="fieldInSeminar" label="Company Name" />
                    <TextField onChange={(e) => setBuyer(e.target.value)} value={buyer} className="fieldInSeminar" label="The name/word you want to buy the item for" />
                    <TextField onChange={(e) => setField(e.target.value)} value={field} className="fieldInSeminar" label="Field of Activity" />

                    <TextField onChange={(e) => setContactPerson(e.target.value)} value={contactPerson} className="fieldInSeminar" label="Contact Person's Full Name" />
                    <TextField onChange={(e) => setPhoneNumber(e.target.value)} value={seminarPhoneNumber} className="fieldInSeminar" label="Phone Number" />
                    <TextField onChange={(e) => setEmail(e.target.value)} value={seminarEmail} className="fieldInSeminar" label="Email" />
                </ThemeProvider>

                <div id="whereDidYou-wrapper">
                    <h3>Contact Person's Position</h3>
                    <input type="text" />

                </div>

                <div id="cta-wrapper-seminar">
                    <Button variant="contained" sx={{ color: "black", backgroundColor: "#D3F200" }}>Submit</Button>
                </div>


            </div>

        </div>
    )
}

export default CheckTrademark