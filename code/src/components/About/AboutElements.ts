import styled from 'styled-components'

export const AboutSection = styled.section`
  width: 90%;
  margin-left: 10px;

  @media (min-width: 668px) {
    margin: 0 auto;
    padding-bottom: 90px;
  }
`

interface AboutArticleProps {
  show: string;
  width: number;
}

export const AboutArticle = styled.article<AboutArticleProps>`
  padding-top: 90px;
  display: ${({ show, width }) => width < 668 && show === 'bigScreen' ?
   'none' : 
   width > 668 && show === 'mobile' ? 'none' : 'block'};
`

export const AboutHeadline = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  border-bottom: 3px solid var(--secondary);
  padding-bottom: 10px;

  @media (min-width: 668px) {
    font-size: 33px;
    line-height: 45px;
  }

  @media (min-width: 1024px) {
    font-size: 45px;
    line-height: 61px;
  }
`

export const AboutList = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
`

interface AlivsProps {
  highlight: number;
  list: boolean;
}

export const AboutListItem = styled.li<AlivsProps>`
  font-style: normal;
  list-style-type: ${({ highlight, list }) => !list || highlight > -1 ? 'none' : 'square'};
  color: whitesmoke;
  font-size: 18px;
  line-height: ${({ highlight }) => highlight > -1 ? '35px' : '21px'};
  margin-left: ${({ highlight, list }) => !list || highlight > -1 ? '-20px' : '10px'};

  @media (min-width: 668px) {
    font-size: 19px;
    line-height: ${({ highlight }) => highlight > -1 ? '44px' : '22px'};
  }

  @media (min-width: 1024px) {
    font-size: 21px;
    line-height: ${({ highlight }) => highlight > -1 ? '48px' : '24px'};
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
    font-size: 19px;
    line-height: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 21px;
    line-height: 24px;
  }
`