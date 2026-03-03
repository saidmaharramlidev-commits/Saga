"use client"


import HeroOfEndpoints from "@/components/HeroOfEndpoints"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import blogPic from "@/public/blogPic.jpg"
import Footer from "@/components/Footer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setBlogChoosed, setBlogNumber } from "@/redux/counterSlice"







function Blog() {



    const blog1Info = (
        <div>
            <div id="infoAboutBlog">
                <h1>The role of intellectual property in company</h1>
                <p>Today, one of the most important factors that determine a company's true strength and position in the market is its intellectual property resources. These resources, which are invisible but immeasurable, such as innovation, knowledge, reputation and creativity, form the mainstay of a company's long-term development. That is why the concept of intellectual property is now considered an integral part of a company's management and development strategies.</p>
                <h3>What is intellectual property?</h3>
                <p>Intellectual property is a set of rights that are the result of human creativity and that give a company an economic, innovative, and strategic advantage. This concept includes patents (including industrial designs and utility models), trademarks, copyrights, and trade secrets.

                    Patents – Patents provide legal protection for inventions, utility models, and industrial designs. Patents allow a company to protect and profit from technological innovations it creates.

                    Trademarks – Brand elements that provide recognition of products or services, differentiate a company from its competitors. This increases both customer loyalty and the company's value by creating trust in the market.

                    Copyright – It provides protection for software, text, design, music and other creative works.

                    Trade secrets – Special information, technology, production methods and strategies collected within the company create an advantage over competitors.

                    These assets are in many cases more important than physical resources, as they provide a company's market differentiation, credibility, and long-term competitive advantage.</p>

                <h3>Why is intellectual property so important?</h3>
                <p>As the dynamics of competition in the global marketplace change, the value of companies is increasingly measured by their intellectual assets. Investors and partners are now focusing not only on material resources, but also on innovation potential, brand credibility, and knowledge base.

                    For example, companies in industries such as technology and fashion derive a large portion of their value from their patents, designs, and brands. On the other hand, a highly trusted brand creates customer loyalty, which leads to long-term revenue stability.

                </p>
                <h3>How should intellectual property be managed?</h3>
                <p>Intellectual property becomes real value not only when it is created, but also when it is properly managed and protected. Companies must systematically identify these resources, implement legal protection mechanisms, and evaluate their commercialization potential.

                    An intellectual property audit plays a crucial role in this process. This audit analyzes a company's intellectual property portfolio, reduces legal risks, determines the real market value of existing intellectual assets, and ensures their protection.</p>
                <h3>Ways to Increase the Potential of Intellectual Property</h3>
                <li>Registration and legal protection: The value of intellectual property is determined not only by its creation, but also by its legal protection. The official registration of patents, trademarks, industrial designs and copyrights gives a company two main advantages: first, it prevents competitors from illegally using these resources, and second, these rights create a market value for commercialization, that is, it becomes possible to generate additional income through patent or brand licensing.</li>
                <li>Strengthening brand image: A strong brand not only increases sales but also the market value of the company. Brand value is also an important indicator for investors, as a reliable and well-known brand increases market prestige, expands opportunities for cooperation with new partners, and ensures long-term income stability.</li>
                <li>Licensing and commercialization: Proper commercialization of intellectual property creates new sources of revenue for the company.</li>
                <li>Patent license: The company can license its patented technology to other companies for use and earn revenue in return.</li>

            </div>
            <h1 style={{ color: "white", padding: "30px", fontFamily: "arial" }}>Other Blogs</h1>
        </div>
    )











    const { blogNumber, blogChoosed } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()





    return (
        <div id="mainBlogPage">
            <Navbar />
            <HeroOfEndpoints header="Blog" url="Home > Blog" />

            {blogChoosed == false ? (<div id="blogFirst" onClick={() => {
                dispatch(setBlogNumber(1))
                dispatch(setBlogChoosed(true))

            }}>
                <Image id="blog-pic" src={blogPic} alt="blog" />
                <p>The role of intellectual property in company</p>

            </div>) : ''}
            {blogNumber == 1 ? blog1Info : ''}



            <Footer />

        </div>
    )
}

export default Blog