import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);

  @media (min-width: 668px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
    width: 90%;
    margin-top: 100px;
  }
`

export const HeroHeadlineContainer = styled.div`
  z-index: 10;
  width: 100%;
  grid-area: 4 / 1 / 5 / 2;
  margin-left: 10px;

  @media (min-width: 668px) {
    grid-area: 6 / 1 / 9 / 10;
    margin-left: 0;
  }
`

export const HeroHeadline = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;

  @media (min-width: 668px) {
    font-size: 33px;
    line-height: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 50px;
    line-height: 57px;
  }
`

export const HeroTextContainer = styled.div`
  margin-top: 40px;
  margin-left: 10px;
  display: flex;
  max-width: 90vw;
  flex-direction: column;
  justify-content: space-around;
  grid-area: 5 / 1 / 6 / 2;

  @media (min-width: 668px) {
    grid-area: 8 / 1 / 11 / 10;
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    grid-area: 8 / 1 / 11 / 9;
  }
`

export const HeroText = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  @media (min-width: 668px) {
    font-size: 19px;
    line-height: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 21px;
    line-height: 24px;
  }
`

export const HeroImage = styled.img.attrs({
  src: '/assets/profilepic.jpg'
})`
  grid-area: 1 / 1 / 5 / 2;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  margin: 0;
  object-fit: cover;

  @media (min-width: 668px) {
    grid-area: 1 / 6 / 11 / 13;
    max-width: 547px;
    max-height: 690px;
  }

  @media (min-width: 1024px) {
    grid-area: 1 / 9 / 11 / 13;
  }

`