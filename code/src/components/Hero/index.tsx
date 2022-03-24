import React from 'react'
import { HeroContainer, HeroImage, HeroHeadline, HeroText, TextContainer } from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroHeadline>
          Jag är Kim Lind,
        </HeroHeadline>
        <HeroHeadline>
          skribent, kommunikatör & PR-konsult
        </HeroHeadline>
        <HeroHeadline>
          New York-bo
        </HeroHeadline>
        <HeroText>
          Finnes: Frilansskribent med bred erfarenhet av olika ämnesområden, bland annat byggindustri, life science, privatekonomi och sport.
        </HeroText>
        <HeroText>
          Sökes: Uppdragsgivare på distans. 
        </HeroText>
      </TextContainer>
      <HeroImage />
    </HeroContainer>
  )
}

export default Hero 