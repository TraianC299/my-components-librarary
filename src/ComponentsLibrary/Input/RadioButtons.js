import React from 'react';
import styled from 'styled-components';
import { BLUE, DARKBLUE } from '../../Constants';


const RadioButtonFrame  = styled.div`
background: ${props=>props.selected?props.color:"#c4c4c4"};
height:25px;
width:25px;
border-radius:50%;
border:${props=>props.selected?"2px solid " +props.color:"2px solid #c4c4c4"};
display: flex;
justify-content: center;
align-items: center;
>.white-circle{
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height:21px;
    width: 21px;
    border-radius:50%;

}
    `
const RadioCircle = styled.div`
background: ${props=>props.color};
border-radius:50%;
height:10px;
width: 10px;
transform: ${props=>props.selected?"scale(1.2)":"scale(0)"};
transition: transform 0.1s ease-in-out;
`

const RadioContainer = styled.div`
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
>p{
    text-align: left;
    margin-left: 10px;
    color: ${DARKBLUE};
}`


const GlobalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-items: flex-start;
>div{
    margin-bottom: 10px;
}
`


const placeholderOptions = [
    {title: "Option 1",id:"1"},
    {title: "Option 2",id:"2"},
    {title: "Option 3",id:"3"},
    {title: "Option 4",id:"4"},
    {title: "Option 5",id:"5"},
]
const RadioButtons = ({color=BLUE, options=placeholderOptions}) => {

    const [selected, setSelected] = React.useState(null);
    return (
        <GlobalContainer>
            {options.map((option, index) => {
                return <RadioContainer key={"radio-button"+index} onClick={()=>setSelected(previous=>option.id)}>
                <RadioButtonFrame selected={selected==option.id} color={color}>
                    <div className="white-circle">
                    <RadioCircle color={color} selected={selected==option.id}></RadioCircle>
                    </div>
                
                </RadioButtonFrame>
                <p>{option.title}</p>
                </RadioContainer>
            })}
            
        </GlobalContainer>
    )
}

export default RadioButtons


