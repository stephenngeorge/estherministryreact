import React from 'react'

import { HeroImage, HeroText } from './molecules'

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
        </div>
    )
}