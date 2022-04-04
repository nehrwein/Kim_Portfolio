import React from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { AboutSection, AboutArticle, AboutHeadline, AboutList, AboutListItem, DownloadLink, DownloadBtn } from './AboutElements'
import data from '../../data/data.json'

const About = () => {
  return (
    <AboutSection id='about'>
      {data.About?.map((item) => (
        <AboutArticle 
          key={item.id}
          show={item.show}
        >
          <AboutHeadline>
            {item.subject}
          </AboutHeadline>
          <AboutList>
            {item.content?.map((element) => (
              <AboutListItem
                subject={data.e_subjects.indexOf(element)}
                highlight={data.A_Highlight.indexOf(element)}
                key={element}
                $list={item.list}
              >
                {element}
              </AboutListItem>
            ))}
          </AboutList>
          <DownloadLink
            href={item.href}
            target='_blank'
            rel='noreferrer'
          >
            <DownloadBtn 
              type='button'
              download={item.download}
            >
              <FaFileDownload />
              {item.download}
            </DownloadBtn>
          </DownloadLink>
        </AboutArticle>
      ))}
    </AboutSection>
  )
}

export default About