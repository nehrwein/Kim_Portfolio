import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 0 auto;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width: 90%
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
`

export const HeroHeadline = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
`

export const HeroTextContainer = styled.div`
  margin-top: 40px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HeroText = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`

export const HeroImage = styled.img.attrs({
  src: '/assets/profilepic.jpg'
})`
  grid-area: 1 / 1 / 5 / 2;
  height: 100vh;
  width: 100vw;
  margin: 0 -10px;
  object-fit: cover;

  @media (min-width: 1024px) {
    grid-area: 1 / 8 / 7 / 13;
    width: 547px;
    height: 690px;
    object-fit: cover;
  }

`