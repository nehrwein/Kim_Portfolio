import React from 'react'
import { ContactContainer, AddressContainer, TextContainer } from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer>
      <TextContainer id='contact'>
        <AddressContainer>
          <p>Kim Lind</p>
          <p>550 West 45th Street</p>
          <p>New York, NY, 10036</p>
        </AddressContainer>
        <a href='mailto:kim-lind@outlook.com'>kim-lind@outlook.com</a>
      </TextContainer>
    </ContactContainer>
  )
}

export default Contact