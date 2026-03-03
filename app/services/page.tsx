"use client"



import MessageIcon from '@mui/icons-material/Message';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import InterestsIcon from '@mui/icons-material/Interests';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


import HeroOfEndpoints from "@/components/HeroOfEndpoints"
import Navbar from "@/components/Navbar"
import { useState } from "react"
import {
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Collapse
} from "@mui/material"
import Footer from '@/components/Footer';



type ActiveSub = {
    parent: number
    child: number
} | null




function Services() {


    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClick = (index: number): void => {
        setOpenIndex((prev) => (prev === index ? null : index))
    }

    const sidebarItems = [
        {
            title: "Web Development",
            sub: ["Frontend Development", "Backend Development", "E-Commerce Solutions"]
        },
        {
            title: "Digital Marketing",
            sub: ["SEO Optimization", "Social Media Management", "Paid Advertising"]
        },
        {
            title: "UI / UX Design",
            sub: ["UI Design", "UX Research", "Wireframing & Prototyping"]
        },
        {
            title: "IT Consulting",
            sub: ["Cloud Architecture", "Cybersecurity Consulting", "System Audit & Optimization"]
        }
    ]

    const [activeSub, setActiveSub] = useState<string>('')


    const handleSubClick = (subTitle: string): void => {
        setActiveSub(subTitle)
    }
















    return (
        <div id="mainServicesPage">
            <Navbar />
            <HeroOfEndpoints header="Services" url="Home > Services" />


            <div id="service-infos">
                <div id="service-sidebar">

                    <List>
                        {sidebarItems.map((item, index) => (
                            <div key={index}>
                                <ListItemButton onClick={() => handleClick(index)}>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>

                                <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {item.sub.map((subItem, subIndex) => (
                                            <ListItemButton
                                                onClick={() => handleSubClick(subItem)}
                                                sx={{ pl: 4 }}
                                                key={subIndex}
                                            >
                                                <ListItemText primary={subItem} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </div>
                        ))}
                    </List>

                </div>

                <div id="service-info">
                    <h1 style={{ padding: "30px" }}>{activeSub}</h1>
                    <p style={{ padding: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo delectus nostrum ad inventore esse molestiae sequi voluptatibus voluptatem, minus praesentium iure temporibus harum nesciunt eligendi, dignissimos consequuntur illo dolor deleniti, saepe expedita eos! Incidunt magni eos nemo maxime perferendis voluptates amet repellat ullam hic ipsum ut aut, nulla ducimus excepturi aperiam sequi officia aliquam iste optio cumque architecto unde praesentium? Ducimus et accusamus temporibus iure blanditiis laborum debitis dolor dignissimos fugit repudiandae ab modi ullam, voluptates, cumque nesciunt earum doloribus? Ullam eligendi architecto qui ducimus ipsum eveniet, modi mollitia adipisci. Cupiditate accusamus odio animi illo necessitatibus alias corporis deleniti natus corrupti, et cum debitis ut eaque consequuntur eos praesentium distinctio. Perferendis, nemo eum quae tenetur corrupti, similique deserunt id ut praesentium modi architecto, illo animi quisquam odit atque asperiores numquam assumenda dolore nam impedit tempora. Odit dolores libero sapiente, labore aperiam ratione veritatis alias sed, voluptates commodi, atque maiores. Reprehenderit repellat labore deserunt harum cumque possimus quibusdam similique dolor fugiat distinctio officia quas quaerat a, doloremque perferendis in. Quaerat esse totam nostrum ex aut iure consequuntur deleniti quibusdam inventore repellendus odit pariatur fugiat in, deserunt incidunt consectetur. Fugit suscipit hic magni ad eveniet ut tempore qui modi, eligendi sit.</p>

                </div>

            </div>


            <div id="application-process-wrapper">
                <h1
                >Our application process</h1>

                <div id="process-wrapper">
                    <div className="process">

                        <div className="emoji-wrapper">
                            <MessageIcon />

                        </div>



                        <h1>Step 1</h1>
                        <p style={{ padding: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo tempora est magni ipsam quasi id ut quaerat possimus voluptas.</p>

                    </div>
                    <div className="process">

                        <div className="emoji-wrapper">
                            <InterestsIcon />

                        </div>



                        <h1>Step 2</h1>
                        <p style={{ padding: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo tempora est magni ipsam quasi id ut quaerat possimus voluptas.</p>

                    </div>
                    <div className="process">

                        <div className="emoji-wrapper">
                            <AssignmentIndIcon />

                        </div>



                        <h1>Step 3</h1>
                        <p style={{ padding: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo tempora est magni ipsam quasi id ut quaerat possimus voluptas.</p>

                    </div>
                    <div className="process">

                        <div className="emoji-wrapper">
                            <EmojiPeopleIcon />

                        </div>



                        <h1>Step 4</h1>
                        <p style={{ padding: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo tempora est magni ipsam quasi id ut quaerat possimus voluptas.</p>

                    </div>
                    <div className="process">

                        <div className="emoji-wrapper">
                            <HeadsetMicIcon />

                        </div>



                        <h1>Step 5</h1>
                        <p style={{ padding: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo tempora est magni ipsam quasi id ut quaerat possimus voluptas.</p>

                    </div>

                </div>


            </div>
            <Footer />




        </div >
    )
}

export default Services