import React from 'react'
import { BLUE } from '../../Constants'
import styled from 'styled-components'



const ButtonStyle = styled.button`
padding-left:20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom: 10px;
color: white;
font-weight:600;
box-shadow: 0px 1px 8px rgba(46, 46, 46, 0.04);
border-radius: 5px;
font-size: 1rem;
border:none;`
const Button = ({color=BLUE, }) => {
  return (
    <ButtonStyle style={{backgroundColor:color}}>Button</ButtonStyle>
  )
}

export default Button