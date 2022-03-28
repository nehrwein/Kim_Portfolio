import React from 'react'
import { AboutSection, AboutArticle, AboutHeadline, AboutList, AboutListItem } from './AboutElements'
import data from '../../data/data.json'

const About = () => {
  console.log(data.About)
  return (
    <AboutSection>
      {data.About?.map((item) => (
        <AboutArticle key={item.id}>
          <AboutHeadline>
            {item.headline}
          </AboutHeadline>
          <AboutList>
            {item.content?.map((element) => (
              <AboutListItem
                highlight={data.A_Highlight.indexOf(element)}
                key={element}
              >{element}
              </AboutListItem>
            ))}
          </AboutList>
        </AboutArticle>
      ))}
    </AboutSection>
  )
}

export default About