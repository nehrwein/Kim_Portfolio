import styled from 'styled-components'

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90vw;
  height: 160px;
  margin: 90px 0 250px 10px;
  padding: 20px 0;
  border-top: 3px solid var(--secondary);
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  a {
    color: white;
  }

  a:hover {
    color: var(--secondary);
    transition: 0.2s ease-in-out;
  }

  @media (min-width: 668px) {
    font-size: 21px;
    line-height: 29px;
    margin: 0 auto;
    padding-bottom: 250px;
  }
`

export const AddressContainer = styled.div`
`