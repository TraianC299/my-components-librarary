import React from 'react'
// import {  LIGHTGREY, YELLOW } from '../../../Assets/Styles'
import styled from 'styled-components';
import { BLUE, LIGHTGREY } from '../../Constants';

const checkSvg = <svg width="512" height="368" viewBox="0 0 512 368" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M460.5 1.402C449.972 4.74 449.648 5.04799 316 138.577L184.5 269.961L124.998 210.544C69.7281 155.353 65.0171 150.903 58.7721 147.98C42.8981 140.552 26.0171 142.899 13.4231 154.285C3.43114 163.318 -1.50786 177.691 0.896138 190.739C3.35714 204.096 1.81113 202.356 84.7801 285.129C157.358 357.536 161.851 361.821 167.995 364.5C175.775 367.892 186.543 368.926 193.746 366.973C205.919 363.671 200.705 368.613 356.567 212.657C518.033 51.092 508.811 60.987 511.265 46.663C514.661 26.834 502.221 7.525 482.119 1.423C476.457 -0.295003 465.885 -0.304999 460.5 1.402Z" fill="white"/>
</svg>



const StepperContainer = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content:center;
height:10vh;
background: "white";
padding-left:5vw;
padding-right:5vw;
overflow: hidden;
background: white;
position:sticky;
top:10vh;
z-index:99;

@media (orientation: landscape) and (min-width: 768px){
padding-left:15vw;
padding-right:15vw;
}
@media (orientation: landscape) and (min-width: 1500px){
padding-left:25vw;
padding-right:25vw;
}
@media (orientation: portrait) and (min-width: 768px){
    top:7vh;

}

`


const Step = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-left: 8px;
padding-right: 8px;
>p{
    width: calc(100% - 2rem);
    color: ${props=>props.previous?"#000":LIGHTGREY};
    font-size: 0.875rem;
    letter-spacing: 0.01071em;
    line-height: 1.43;
}

@media (orientation: landscape) and (min-width: 768px){
    >p{
    font-size: 1.2rem;
    width: calc(100% - 3rem);
}
}


@media (orientation: portrait) and (min-width: 768px){
    >p{
    font-size: 1.4rem;
    width: calc(100% - 3rem);
}
}

`


const StepNumber = styled.div`
border-radius:333px;
height:1.5rem;
width:1.5rem;
background: ${props=>props.selected ?BLUE:props.previous? "#000" : LIGHTGREY};
display: flex;
align-items: center;
justify-content: center;
margin-right: 8px;
>p{
    color: ${props=>props.selected ?"#000" : LIGHTGREY};
    font-size: 0.85rem;
}

>svg{
    width: 50% !important;
    height: 50% !important;
}

@media (orientation: portrait) and (min-width: 768px){
    height:2.2rem;
    width:2.2rem;
    >p{
    color: ${props=>props.selected ?"#000" : LIGHTGREY};
    font-size: 1.4rem;
}
}
`

const Line = styled.div`
margin:auto;
flex-grow:0.8;
height:1px;
background:${LIGHTGREY};
display: none;
@media (orientation: landscape) and (min-width: 768px){
    display: block;

}

@media (orientation: portrait) and (min-width: 768px){
    display: block;

}
`

const FlexCenterCenter = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content:center;

`
const Stepper = ({activeStep, steps}) => {
    return (
        <StepperContainer>
            {steps.map((label, index) => {
                return (
                    <FlexCenterCenter key={"stepper"+index} style={index==steps.length-1?{width:"auto"}:{width:"100%"}}>
                    <Step previous={index<=activeStep} color="#000">
                        <StepNumber selected={index==activeStep} previous={index<=activeStep}>{activeStep>index?checkSvg:<p style={{color:index==activeStep?"white":index<activeStep?"white":"white"}}>{index+1}</p>}</StepNumber>
                        <p style={{fontWeight: index==activeStep?500:400}} className="stepper-paragraph" >{label}</p>
                    </Step>
                    {index!==steps.length-1?<Line></Line>:null}
                    </FlexCenterCenter>
                );
            })}
        </StepperContainer>
    )
}

export default Stepper