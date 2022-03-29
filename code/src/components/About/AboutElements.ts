import styled from 'styled-components'

export const AboutSection = styled.section`
`

export const AboutArticle = styled.article`
  padding-top: 90px;
`

export const AboutHeadline = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  border-bottom: 1px solid;
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
  font-family: 'Domine';
  font-style: normal;
  font-weight: ${({ highlight }) => highlight > -1 ? 700 : 400};
  color: ${({ highlight }) => highlight > -1 ? 'white' : 'whitesmoke'};
  font-size: 18px;
  line-height: 21px;

  @media (min-width: 668px) {
    font-size: 21px;
    line-height: 24px;
  }
`

export const PdfDownload = styled.a`
  display: block;
  color: white;
  margin-top: 20px;
  font-family: 'Domine';
  font-style: normal;
  font-weight: 700;
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