import styled from 'styled-components'

export const AboutSection = styled.section`
  @media (min-width: 668px) {
    margin: 0 auto;
    width: 90%;
    padding-bottom: 90px;
  }
`

interface AboutArticleProps {
  show: number;
  width: number;
}

export const AboutArticle = styled.article<AboutArticleProps>`
  padding-top: 90px;
  display: ${({ show, width }) => width < 668 && show === 1 ? 'none' : 'block'};
`

export const AboutHeadline = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  border-bottom: 3px solid var(--secondary);
  padding-bottom: 10px;

  @media (min-width: 668px) {
    font-size: 45px;
    line-height: 61px;
  }
`

export const AboutList = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`

interface AlivsProps {
  highlight: number;
}

export const AboutListItem = styled.li<AlivsProps>`
  font-style: normal;
  font-weight: ${({ highlight }) => highlight > -1 ? 700 : 400};
  color: ${({ highlight }) => highlight > -1 ? 'var(--secondary)' : 'whitesmoke'};
  font-size: 18px;
  line-height: 21px;

  @media (min-width: 668px) {
    font-size: 21px;
    line-height: 24px;
  }
`

export const PdfDownload = styled.a`
  font-family: 'Open Sans';
  display: block;
  color: whitesmoke;
  margin-top: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  :hover {
    color: var(--secondary);
    transition: 0.2s ease-in-out;
  }

  @media (min-width: 668px) {
    font-size: 21px;
    line-height: 24px;
  }
`