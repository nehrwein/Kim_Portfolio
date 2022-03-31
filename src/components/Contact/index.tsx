import React from 'react'
import { ContactContainer, AddressContainer } from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <AddressContainer>
        <p>Kim Lind</p>
        <p>550 West 45th Street</p>
        <p>New York, NY, 10036</p>
      </AddressContainer>
      <a href='mailto:kim-lind@outlook.com'>kim-lind@outlook.com</a>
    </ContactContainer>
  )
}

export default Contact