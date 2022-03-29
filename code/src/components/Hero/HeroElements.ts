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
    margin-top: 80px;
  }
`

/* export const TextContainer = styled.div`
  
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 10;

  @media (min-width: 1024px) {
    grid-area: 4 / 1 / 7 / 10;
  }
`
 */

export const HeroHeadlineContainer = styled.div`
  z-index: 10;
  width: 100vw;
  grid-area: 4 / 1 / 5 / 2;

  @media (min-width: 668px) {
    grid-area: 6 / 1 / 9 / 10;
  }
`

export const HeroHeadline = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;

  @media (min-width: 668px) {
    font-size: 50px;
    line-height: 57px;
  }
`

export const HeroTextContainer = styled.div`
  margin-top: 40px;
  display: flex;
  width: 98%;
  flex-direction: column;
  justify-content: space-between;
  grid-area: 5 / 1 / 6 / 2;

  @media (min-width: 668px) {
    grid-area: 9 / 1 / 11 / 9;
  }
`

export const HeroText = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  @media (min-width: 668px) {
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
  margin: 0 -10px;
  object-fit: cover;

  @media (min-width: 668px) {
    grid-area: 1 / 8 / 11 / 13;
    width: 547px;
    height: 690px;
  }

`