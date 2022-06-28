import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BLUE, DARKBLUE } from '../../Constants'


const Container = styled.div`
    display: flex;
    padding: 20px;
    background-color: ${DARKBLUE};
    flex-direction: column;
    width: 200px;
    height: 100vh;
    
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    font-weight: 500;
    color: white;
    `

const CollapsableContainer = styled.div`
padding-left: 10px;
display: flex;
flex-direction: column;
`

const ComponentLink = styled(NavLink)`
width:100%;
color: white;
text-decoration: none;
margin-top:5px;
margin-bottom: 5px;

&.active{
    color: ${BLUE};
    font-weight: 600;
}
`

const activeStyle = {
    color: BLUE,
    fontWeight:600,
}
const Menu = () => {
    const [inputOpen, setInputOpen] = useState(false)
  return (
    <Container>
        <Category onClick={()=>setInputOpen(previous=>!previous)}>Inputs</Category>
        <Collapse on={inputOpen}>
            <CollapsableContainer>
                <ComponentLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }to="/input/option-selector">Option Selector</ComponentLink>
                <ComponentLink to="/input/input">Input</ComponentLink>
                <ComponentLink to="/input/time-picker">Time Picker</ComponentLink>
            </CollapsableContainer>
        </Collapse>
        <Category onClick={()=>setInputOpen(true)}>Input</Category>
       
    </Container>
  )
}

export default Menu




const CollapseContainer = styled.div`
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
overflow: hidden;
`
const Collapse = ({children, on})=>{
    const divRef = useRef(null);

    const [height, setHeight] = React.useState(0);
    const [overflow, setOverflow] = useState("hidden")


    useEffect(()=>{
        if(on){
            setHeight(divRef.current.scrollHeight)
            return
        }
        setHeight(0)
        setOverflow("hidden")
    
    },[on])


    return(
        <CollapseContainer onTransitionEnd={()=>height>0?setOverflow("visible"): null} style={{height: height, overflow:overflow}} ref={divRef}>
            {children}
        </CollapseContainer>
    )
}