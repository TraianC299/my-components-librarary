import React from 'react'
import styled from "styled-components"
import { device, LIGHTGREY } from '../../Constants'


const Container = styled.div`
  display: flex;
  background-color:${LIGHTGREY};
  align-items: center;
  justify-content: space-evenly;
  height: 7.5vh;
  position: relative;
  border-radius: 14px;
  margin: 20px auto;
  box-sizing: border-box;
  border: 5px solid transparent;
  >div{
    margin-left: 10px;
    margin-right: 10px;
    z-index:2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight:500 ;
  }


  @media ${device.laptopSmall}{
    max-width: 70%;
    

  }
  `

  

  const Span  =styled.span`
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    background-color: white;
    position: absolute;
    width: 33%;
    height: 100%;
    top:0px;
    padding: inherit;
    box-shadow: rgb(5 16 55 / 10%) 0px 2px 6px;




  `
const SliderHeader = ({steps=[], selected, setSelected}) => {
  return (
    <Container>
      <Span  style={{width: `${100/steps.length}%`, left:`${selected* (100/steps.length)}%`}}></Span>
      {steps.map((step, index) => <div key={index} onClick={()=>setSelected(index)}>{step}</div>)}
    </Container>
  )
}

export default SliderHeader