import React from 'react'
import styled from 'styled-components';
import { BLUE } from '../../Constants';


const checkSvg=<svg width="15" height="15" viewBox="0 0 15 15"  xmlns="http://www.w3.org/2000/svg">
<path d="M6.81818 9.76056L4.5 7.50704L3 9.05634L6.81818 13L15 4.5493L13.2273 3L6.81818 9.76056Z"/>
</svg>


const Container = styled.div`
display: flex;
align-items:center ;
grid-gap:10px;
`
const CheckContainer = styled.div`
height:25px;
width:25px;
border-radius:5px;
border:${props=>props.selected?"2px solid" +props.color:"2px solid #c4c4c4"};
display: flex;
justify-content: center;
align-items: center;
background: ${props=>props.selected?props.color:""};
>svg{
    height: 80%;
    position: relative;
    right: 1px;
    color: ${props=>props.checkColor?props.checkColor:"white"};
    fill: ${props=>props.checkColor?props.checkColor:"white"};
}`

const Check = ({ color=BLUE, checkColor, text="Text Exaple"}) => {


    const [selected, setSelected] = React.useState(false);
    return (
        <Container>
            <CheckContainer  color={color} checkColor={checkColor} onClick={()=>setSelected(previous=>!previous)} selected={selected}>
                {selected? checkSvg:null}
            </CheckContainer>
            <p>{text}</p>
        </Container>
    )
}

export default Check
