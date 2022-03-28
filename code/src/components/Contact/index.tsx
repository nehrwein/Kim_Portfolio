import React from 'react'
import { ContactContainer, AddressContainer } from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer>
      <AddressContainer>
        <p>Kim Lind</p>
        <p>550 West 45th Street</p>
        <p>New York, NY, 10036</p>
      </AddressContainer>
      <p>kim-lind@outlook.com</p>
    </ContactContainer>
  )
}

export default Contact