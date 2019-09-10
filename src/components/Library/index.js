import React from 'react'

import { CallToAction, HeroImage, HeroText } from './01-molecules'

import RowenaImage from '../../assets/Rowena_1.jpg'

export default () =>  {
    return (
        <div className="library-page">
            <HeroImage  altText="rowena speaking"
                        divHeight={ 76 }
                        imageUrl={ RowenaImage }
            />
            <HeroText   additionalClasses={["angled-div"]}
                        bodyText="Some body copy here"
                        headingText="Esther Ministry"
                        variation="angled"
            />
            <CallToAction   buttonLink="https://google.co.uk"
                            buttonText="GET IN TOUCH"
                            headingText="Find Out More"
                            paragraphText="enquire about booking a course"
            />
        </div>
    )
}