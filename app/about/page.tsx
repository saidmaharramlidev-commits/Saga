import HeroOfEndpoints from "@/components/HeroOfEndpoints"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import whoAreWePic from "@/public/whoAreWePic.jpg"
import Statistic from "@/components/Statistic"
import member1 from "@/public/member1.jpg"
import member2 from "@/public/member2.jpg"
import member3 from "@/public/member3.jpg"
import Footer from "@/components/Footer"

function About() {
    return (
        <div id="mainAbout">
            <Navbar />
            <HeroOfEndpoints header="About" url="Home > About" />

            <div id="about-container">

                <div id="whoAreWe-wrapper">
                    <div id="leftWhoAreWe">
                        <Image id="picOfWhoAreWe" src={whoAreWePic} alt="pic" />
                    </div>
                    <div id="rightWhoAreWe">
                        <div className="infoOfWhoWeAre">
                            <h2>Who are we</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti vitae nam, eveniet optio consequatur, sed odit dignissimos inventore nisi fugiat repudiandae ab expedita. Dolores qui culpa sit quia tenetur magni reiciendis natus minus, quibusdam blanditiis consectetur, unde iste. Quam!</p>
                        </div>
                        <div className="infoOfWhoWeAre">
                            <h2>Mission</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti vitae nam, eveniet optio consequatur, sed odit dignissimos inventore nisi fugiat repudiandae ab expedita. Dolores qui culpa sit quia tenetur magni reiciendis natus minus, quibusdam blanditiis consectetur, unde iste. Quam!</p>
                        </div>
                        <div className="infoOfWhoWeAre">
                            <h2>Vision</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti vitae nam, eveniet optio consequatur, sed odit dignissimos inventore nisi fugiat repudiandae ab expedita. Dolores qui culpa sit quia tenetur magni reiciendis natus minus, quibusdam blanditiis consectetur, unde iste. Quam!</p>
                        </div>
                    </div>

                </div>

                <Statistic />

                <h1 id="headerOfTeam">Our Team</h1>

                <div id="team-wrapper">

                    <div className="memberOfTeam">
                        <Image className="memberPhoto" src={member1} alt="member" />
                        <div className="workerinfosummary">
                            <h1>Said Maharramli</h1>
                            <h3>Worker</h3>
                        </div>

                        <div className="infoOfMember">
                            <div className="topOfInfo">
                                <h1>Said Maharramli</h1>
                                <h3>Worker</h3>

                            </div>
                            <div className="bottomOfInfo">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus ipsa vel, corrupti aliquam eos, magnam animi similique quia quis excepturi quod, obcaecati nobis autem atque facere molestias laboriosam veniam error. Fugit delectus corrupti iusto dicta quas cum dolorem, repudiandae modi optio? Repudiandae reprehenderit voluptates, nemo quasi et ab voluptatibus!</p>

                            </div>

                        </div>
                    </div>
                    <div className="memberOfTeam">
                        <Image className="memberPhoto" src={member2} alt="member" />
                        <div className="workerinfosummary">
                            <h1>Said Maharramli</h1>
                            <h3>Worker</h3>
                        </div>
                        <div className="infoOfMember">
                            <div className="topOfInfo">
                                <h1>Said Maharramli</h1>
                                <h3>Worker</h3>

                            </div>
                            <div className="bottomOfInfo">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus ipsa vel, corrupti aliquam eos, magnam animi similique quia quis excepturi quod, obcaecati nobis autem atque facere molestias laboriosam veniam error. Fugit delectus corrupti iusto dicta quas cum dolorem, repudiandae modi optio? Repudiandae reprehenderit voluptates, nemo quasi et ab voluptatibus!</p>

                            </div>

                        </div>
                    </div>
                    <div className="memberOfTeam">
                        <Image className="memberPhoto" src={member3} alt="member" />
                        <div className="workerinfosummary">
                            <h1>Said Maharramli</h1>
                            <h3>Worker</h3>
                        </div>
                        <div className="infoOfMember">
                            <div className="topOfInfo">
                                <h1>Said Maharramli</h1>
                                <h3>Worker</h3>

                            </div>
                            <div className="bottomOfInfo">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus ipsa vel, corrupti aliquam eos, magnam animi similique quia quis excepturi quod, obcaecati nobis autem atque facere molestias laboriosam veniam error. Fugit delectus corrupti iusto dicta quas cum dolorem, repudiandae modi optio? Repudiandae reprehenderit voluptates, nemo quasi et ab voluptatibus!</p>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <Footer />




        </div>
    )
}

export default About