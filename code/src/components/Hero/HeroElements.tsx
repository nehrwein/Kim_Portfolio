import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
  width: 90%
`

export const TextContainer = styled.div`
  grid-area: 4 / 1 / 7 / 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 10;
  color: whitesmoke
`


export const HeroHeadline = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  margin: 0;
`

export const HeroText = styled.h2`
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
`

export const HeroImage = styled.img.attrs({
  src: '/assets/profilepic.jpg'
})`
  grid-area: 1 / 8 / 7 / 13;
  width: 547px;
  height: 690px;
  object-fit: cover;
`