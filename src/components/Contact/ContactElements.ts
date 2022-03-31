import styled from 'styled-components'

export const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
  margin: 90px 0 0 10px;
  border-top: 3px solid var(--secondary);
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  a {
    color: white;
    display: block;
  }

  a:hover {
    color: var(--secondary);
    transition: 0.2s ease-in-out;
  }

  @media (min-width: 668px) {
    margin: 90px auto 0 auto;
    font-size: 20px;
    line-height: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 21px;
    line-height: 29px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
`

export const AddressContainer = styled.div`
`