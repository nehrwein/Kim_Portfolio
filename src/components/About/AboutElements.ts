import styled from 'styled-components'

interface AboutArticleProps {
  show: string;
}

interface AlivsProps {
  highlight: number;
  $list: boolean;
}

interface DownloadProps {
  download: string;
}

export const AboutSection = styled.section`
  width: 90%;
  margin-left: 10px;

  @media (min-width: 668px) {
    margin: 0 auto;
    padding-bottom: 90px;
  }
`

export const AboutArticle = styled.article<AboutArticleProps>`
  padding-top: 90px;
  display: ${({ show }) =>  show === 'bigScreen' ? 'none' : 'block'};

  @media (min-width: 668px) {
    display: ${({ show }) =>  show === 'mobile' ? 'none' : 'block'};
  }
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

export const AboutListItem = styled.li<AlivsProps>`
  font-style: normal;
  list-style-type: ${({ highlight, $list }) => !$list || highlight > -1 ? 'none' : 'square'};
  color: whitesmoke;
  font-size: 18px;
  line-height: ${({ highlight }) => highlight > -1 ? '35px' : '21px'};
  margin-left: ${({ highlight, $list }) => !$list || highlight > -1 ? '-20px' : '10px'};

  @media (min-width: 668px) {
    font-size: 19px;
    line-height: ${({ highlight }) => highlight > -1 ? '44px' : '22px'};
  }

  @media (min-width: 1024px) {
    font-size: 21px;
    line-height: ${({ highlight }) => highlight > -1 ? '48px' : '24px'};
  }
`

export const DownloadLink = styled.a`
  text-decoration: none;
`

export const DownloadBtn = styled.button<DownloadProps>`
  display: ${({ download }) => download ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;
  width: 135px;
  margin-top: 20px;
  background: #8a7c8c;
  border-radius: 5px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  outline: none;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: whitesmoke;
  padding: 5px 4px 3px 4px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.04);
    box-shadow: 14px 10px 34px 1px rgba(0, 0, 0, 0.24);
  }

  @media (min-width: 668px) {
    font-size: 19px;
    width: 140px;
  }

  @media (min-width: 1024px) {
    font-size: 21px;
    width: 155px;
  }
`
