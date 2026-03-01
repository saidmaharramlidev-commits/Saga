import React from 'react'
import Image from 'next/image'
import pic from "../public/heroImageOfendpoints.jpg"

function HeroOfEndpoints({ header, url }: {
    header: string,
    url: string
}) {
    return (
        <div id='mainHeroOfEndpoints'>
            <Image id='imgOfHeroEndpoints' src={pic} alt='hero' />
            <h1>{header}</h1>
            <h4>{url}</h4>

        </div>
    )
}

export default HeroOfEndpoints