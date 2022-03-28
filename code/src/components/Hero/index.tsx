import React from 'react'
import { HeroContainer, HeroImage, HeroHeadlineContainer, HeroHeadline, HeroText, HeroTextContainer } from './HeroElements'

const Hero = () => {
  return (
    <>
    <HeroContainer>
      <HeroHeadlineContainer>
        <HeroHeadline>
          Jag är Kim Lind,
        </HeroHeadline>
        <HeroHeadline>
          skribent, kommunikatör & PR-konsult
        </HeroHeadline>
        <HeroHeadline>
          New York-bo
        </HeroHeadline>
      </HeroHeadlineContainer> 
      <HeroImage />
    </HeroContainer>
    <HeroTextContainer>
      <HeroText>
        Finnes: Frilansskribent med bred erfarenhet av olika ämnesområden, bland annat byggindustri, life science, privatekonomi och sport.
      </HeroText>
      <HeroText>
        Sökes: Uppdragsgivare på distans. 
      </HeroText>
    </HeroTextContainer>
    </>
  )
}

export default Hero 