import React from 'react'
import { AboutSection, AboutArticle, AboutHeadline, AboutList, AboutListItem } from './AboutElements'
import data from '../../data/data.json'

const About = () => {
  //AboutContainer
  //h3 -> bottemline visible
  //strich
  //ul
  return (
    <AboutSection>
      <AboutArticle>
        <AboutHeadline>
          Kompetens
        </AboutHeadline>
        <AboutList>
          {data.Kompetens?.map((item) => (
            <AboutListItem key={item}>{item}</AboutListItem>
          ))}
        </AboutList>
      </AboutArticle>
      <AboutArticle>
        <AboutHeadline>
          Arbetslivserfarenhet
        </AboutHeadline>
        <AboutList>
          {data.Arbetslivserfarenhet?.map((item) => (
            <AboutListItem key={item}>{item}</AboutListItem>
          ))}
        </AboutList>
      </AboutArticle>
      <AboutArticle>
        <AboutHeadline>
          Utbildning i urval
        </AboutHeadline>
        <AboutList>
          {data.UtbildningShort?.map((item) => (
            <AboutListItem key={item}>{item}</AboutListItem>
          ))}
        </AboutList>
      </AboutArticle>
    </AboutSection>
  )
}

export default About