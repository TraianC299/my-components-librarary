import React from 'react'
import styled from 'styled-components'
import { BLUE, device } from '../../Constants'
import Input from '../Input/Input'
import AutosizeInput from '../Input/AutosizeInput.tsx'
import Button from '../Buttons/Button'


const Container = styled.div`
height: fit-content;
width: 100%;
margin:auto;

@media ${device.laptopSmall}{
    display: grid;
    grid-template-columns: 40% 60%;
}
`

const StyledTextContainer = styled.div`
display:none;

@media ${device.laptopSmall}{
    display: flex;
align-items: center;
background-color: ${BLUE};
justify-content: center;
padding:50px;
>h1{
    color: white;
    font-weight:600;
}
}`

const InputContainer = styled.div`
padding:20px;
grid-gap:20px;
display: grid;
grid-auto-flow: row;


@media ${device.laptopSmall}{
grid-template-columns: 1fr 1fr;
padding:50px;
grid-gap:50px;
display: grid;
grid-template-rows: 1fr 1fr;
>.autosize-input{
    grid-column: 1 / -1;
}
>button{
    grid-column: 2 / 3;
}
}`
const ContactForm = () => {
  return (
    <Container>
        <StyledTextContainer>
            <h1 className='h3'>
            We all know that time is money...
so stop wasting time, and save money with Rate It!
            </h1>
        </StyledTextContainer>
        <InputContainer>
        <Input label="First Name"></Input>
        <Input label="Last Name"></Input>
        <Input label="Mail"></Input>
        <Input label="Phone"></Input>
        <AutosizeInput label="Message" className="autosize-input"></AutosizeInput>
        <Button style={{height:"58px"}}>Send Message</Button>
        </InputContainer>
    </Container>
  )
}

export default ContactForm