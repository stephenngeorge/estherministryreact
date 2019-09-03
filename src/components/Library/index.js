import React from 'react'

import { CallToAction, HeroImage, HeroText } from './01-molecules'

import RowenaImage from '../../assets/Rowena_1.jpg'

export default () =>  {
    return (
        <div className="library-page">
            <HeroImage  image_url={ RowenaImage }
                        div_height={ 76 }
                        alt_text="rowena speaking"
            />
            <HeroText   heading_text="Esther Ministry"
                        body_text="Some body copy here"
            />
            <CallToAction   heading_text="Find Out More"
                            paragraph_text="enquire about booking a course"
            />
        </div>
    )
}