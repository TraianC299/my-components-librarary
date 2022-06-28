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
border:none;
cursor:pointer;
background-color: ${props => props.color};`


const ghostButton = {
    backgroundColor: "transparent",
    border: "1px solid" + BLUE,
    color: BLUE,
}
const Button = ({children,color=BLUE, ghost, ...props}) => {


  return (
    <ButtonStyle {...props} color={color} style={ghost&&ghostButton}>{children}</ButtonStyle>
  )
}

export default Button