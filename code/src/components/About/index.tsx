import { useState, useEffect } from 'react'
import { AboutSection, AboutArticle, AboutHeadline, AboutList, AboutListItem, PdfDownload } from './AboutElements'
import data from '../../data/data.json'

const About = () => {
  const [width, setWidth] = useState(0)

  // useEffect is needed for updating window.innerWidth on resize
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
    }

    window.addEventListener("resize", updateWindowDimensions)
  
    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
    }
  }, [])
  

  return (
    <AboutSection id='about'>
      {data.About?.map((item) => (
        <AboutArticle 
          key={item.id}
          show={item.show}
          width={width}
        >
          <AboutHeadline>
            {item.subject}
          </AboutHeadline>
          <AboutList>
            {item.content?.map((element) => (
              <AboutListItem
                highlight={data.A_Highlight.indexOf(element)}
                key={element}
                list={item.list}
              >
                {element}
              </AboutListItem>
            ))}
          </AboutList>
          <PdfDownload 
            href={item.href}
            target="_blank">
             {item.download}
          </PdfDownload>
        </AboutArticle>
      ))}
    </AboutSection>
  )
}

export default About