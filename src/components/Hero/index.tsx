import React from 'react'
import { HeroContainer, HeroImage, HeroHeadlineContainer, HeroHeadline, HeroText, HeroTextContainer } from './HeroElements'

const Hero = () => {
  return (
    <>
    <HeroContainer id='home'>
      <HeroHeadlineContainer>
        <HeroHeadline>
          Kim Lind.
        </HeroHeadline>
        <HeroHeadline>
          Skribent, kommunikatör & PR-konsult.
        </HeroHeadline>
        <HeroHeadline>
          New York-bo.
        </HeroHeadline>
      </HeroHeadlineContainer> 
      <HeroImage />
      <HeroTextContainer>
        <HeroText>
          Finnes: Frilansskribent med bred erfarenhet av olika ämnesområden, bland annat byggindustri, life science, privatekonomi och sport.
        </HeroText>
        <HeroText>
          Sökes: Uppdrag på distans. 
        </HeroText>
      </HeroTextContainer>
    </HeroContainer>
    </>
  )
}

export default Hero 